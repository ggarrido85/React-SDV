import { useState } from "react";
import axios, { Axios } from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { UseLoadingContext } from "../../context/LoadingProvider";
import { UseGeneralSingleton } from "../../context/GeneralProvider";
import { FormHelperText } from "@mui/material";


/**
 * Componet used to coprate between instances of it self
 * create selection components
 * 
 * @param {*} params
 * @returns
 */
export default function SelectBasic({ pTittle, pApi, pFirst = false, pDataType, pParentType, pMapping }) {


  /**
   * General context
   */
  const { data, setData } = UseGeneralSingleton();

  // TODO: set new config to general store conext
  const contextLastParentSelected = data.store[pParentType].selected;

  /**
   * Values list
   */
  const [values, setValuesSelect] = useState(null);

  /**
   * Loading local state
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Get las Id from parent
   */

  const [lastParentSelected, setLastParent] = useState(contextLastParentSelected);

  /**
   * Use loading context
   */
  const loadingContext = UseLoadingContext();


  /**
   * Handle select event
   * @param {*} event
   */
  const handleChange = (event) => {
    data.store[pDataType].selected = event.target.value;
    // clean images
    data.store.images = [];
    setData(prevState => (
      {
        ...prevState,
        store: data.store
      })
    );
  };

  // Only get new data in the refresh if (is first component or change de selected father and loading is off)
  if (((pFirst && values == null) || lastParentSelected != contextLastParentSelected) && !isLoading) {
    // Clean values an id selected
    setValuesSelect(null);

    // TODO: i dont like this (change global state without reacting) for the future make a class to manage these behaviors
    data.store[pDataType].selected = null;

    // Create dynamic params
    const objectMap = (obj, fn) =>
      Object.fromEntries(
        Object.entries(obj).map(
          ([k, v], i) => [v.param, fn(v, k, i)]
        )
      )
    let p = objectMap(data.store, (v/*,k,i*/)=>{
      if(v.selected != null && v.param != null )
          return v.selected;
        return null;
    });

    // Change local state
    setIsLoading(true);
    // Change global state
    loadingContext.setLoading({
      isLoading: true,
      progress: 10,
    });

    // Fetch
    axios.get(pApi, {
      params: p,
    })
      .then((response) => {
        const dataR = response.data[pDataType].map((item) => ({
          id: item[pMapping.id],
          value: item[pMapping.value],
        }));
        // Set new values
        setValuesSelect(dataR);
        // set new parent selected state
        setLastParent(contextLastParentSelected);
        // Stop local loading
        setIsLoading(false);
        loadingContext.setLoading({
          isLoading: false,
          progress: 100,
        });
      });
  }

  /**
   * Put the Cmp
   */
  return (
    <FormControl sx={{ m: 1, width: 350, minWidth: 80 }}>
      <InputLabel required id={"demo-simple-select-autowidth-label" + pTittle}>
        {pTittle}
      </InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id={"demo-simple-select-autowidth" + pTittle}
        value={data.store[pDataType].selected != null ? data.store[pDataType].selected : ''}
        onChange={handleChange}
        autoWidth
        label={pTittle}
        style={{ with: 500 }}
        inputProps={{ readOnly: loadingContext.value.isLoading || values == null }}
      >
        {values != null &&
          values.map((item) => (
            <MenuItem sx={{ m: 1, width: 350, minWidth: 80 }} value={item.id}>
              {item.value}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText> {(loadingContext.value.isLoading || values == null) ? "." : ""}</FormHelperText>
    </FormControl>
  );
}
