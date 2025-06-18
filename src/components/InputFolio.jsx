import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'; 
import { UseGeneralSingleton } from '../context/GeneralProvider';

export default function  InputFolio( )  {  

  /**
   * General context
   */
  const { data, setData } = UseGeneralSingleton();

  const pDataType = 'folio';
  const handleChange =(event)=>{
        data.store[pDataType].selected = event.target.value;
    // clean images
    data.store.images = [];
    setData(prevState => (
      {
        ...prevState,
        store: data.store
      })
    );
  }
 
    return (
        <FormControl sx={{ m: 1, width: 250  , minWidth: 80 }}>

         <TextField
            id="outlined-search" 
            label="Folio" 
            type="number"
            min="1"
            max="600"
            onChange={handleChange}
            /> 
                 </FormControl>

    );

};


