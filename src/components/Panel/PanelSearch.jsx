import { Container, Box } from "@mui/material";
import { SearchButton } from "../Button/SearchButton";
import ListProvincias from '../Lists/ListProvincias';
import ListRegistros from '../Lists/ListRegistros';
import ListSecciones from '../Lists/ListSecciones';
import ListTomos from '../Lists/ListTomos';
import InputFolio from '../InputFolio';
import '../../assets/css/PanelSearch.css'
import CircularWithValueLabel from '../Progress/Progress'
import { UseLoadingContext } from '../../context/LoadingProvider';
import { UseGeneralSingleton } from "../../context/GeneralProvider";
import axios from "axios";
import apis from "../../assets/urls/apis"; 



const PanelSearch = () => {
  /**
  * General context
  */
  const { data, setData } = UseGeneralSingleton();
  const loadingContext = UseLoadingContext();

  const conextRegistry = data.store['registros'].selected;
  const contextSeccion = data.store['secciones'].selected;
  const contextTomo = data.store['data'].selected;
  const contextFolio = data.store['folio'].selected;

  const isDisabled = !(conextRegistry !== null && contextSeccion !== null && contextTomo !== null);

  //const [isFirstCall,setFirstCall] = useState(false);

  const search = (pFisrtCall = false) => {
    if(pFisrtCall)
      data.store.images = [];
    // setFirstCall(pFisrtCall);
    // Change global state
    loadingContext.setLoading({
      isLoading: true,
      progress: 10,
    });
    // Fetch
    axios.get(apis.IMAGES, {
      params: {
        registroID: conextRegistry,
        seccionID: contextSeccion,
        tomo: contextTomo,
        folio: contextFolio,
        begin: data.store.images.length,
        cant: 20
      },
    })
      .then((response) => {
        // Reformat images 
        const images = response.data.data.map((item) => (
          {
            "objectID": item.objectID,
            "registroID": item.registroID,
            "seccionID": item.seccionID,
            "tomo": item.tomo,
            "folio": item.folio
          }
        ));
        // Prepare to load by Singleton and react all components 
        data.store.images=data.store.images.concat(images); 
        data.store.imageMore = response.data.areMore;
        data.store.imageCant = response.data.total;
        // React general singleton
        setData(prevState => ({
            ...prevState,
            store: data.store,
            fn: search
          }));
        // End loading
        loadingContext.setLoading({
          isLoading: false,
          progress: 100,
        });
      });
  };


  return  (<>
    <section    >
      <Box sx={{ my: 2 }} >
        <div className="search-box">
          <h2 style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >Tomos escaneados del Registro del Estado Civil</h2>
          <hr />
          <div style={{ display: "flex", alignContent: "flex-start", justifyContent: "center" }}>
            <ListProvincias ></ListProvincias>
            <ListRegistros></ListRegistros>
            <ListSecciones></ListSecciones>
          </div>
          <div style={{ display: "flex", alignContent: "flex-start", justifyContent: "center" }}>
            <ListTomos></ListTomos>
            <InputFolio></InputFolio>
          </div>
          <div style={{ with: 50, display: "flex", "flexDirection": "column", "alignItems": "center" }} ><SearchButton config={{ onClick: search, isDisabled: isDisabled }}></SearchButton></div>
        </div>
        <div style={{ align: "center" }}> <CircularWithValueLabel></CircularWithValueLabel> </div>
      </Box>
    </section>
  </>);
};


export default PanelSearch;