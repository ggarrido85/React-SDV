import { Container, Box } from "@mui/material";
import { SearchButton } from "../Button/SearchButton";
import ListProvincias from '../Lists/ListProvincias';
import ListRegistros from '../Lists/ListRegistros';
import ListSecciones from '../Lists/ListSecciones';
import ListTomos from '../Lists/ListTomos';
import InputFolio from '../InputFolio';
import '../../assets/css/PanelSearch.css' 
import CircularWithValueLabel from '../Progress/Progress'
import { LoadingProvider } from '../../context/LoadingProvider';


const  PanelSearch =()=> {

  return (<>
    
        <section    >
          <Box sx={{ my: 2 }} >
            <div className="search-box">
              <h2 style={{ display: "flex",alignItems: "center", flexDirection: "column" }} >Tomos escaneados del Registro del Estado Civil</h2>
              <hr />
               <div style={{display: "flex", alignContent: "flex-start",  justifyContent: "center"}}>
              <ListProvincias ></ListProvincias>
              <ListRegistros></ListRegistros>
              <ListSecciones></ListSecciones>
              </div>
              <div  style={{display: "flex", alignContent: "flex-start",  justifyContent: "center"}}>
                <ListTomos></ListTomos>
                <InputFolio></InputFolio>
              </div>
              <div style={{with:50, display: "flex", "flexDirection": "column","alignItems": "center"  }} ><SearchButton></SearchButton></div>
            </div>
            <div style={{ align: "center" }}> <CircularWithValueLabel></CircularWithValueLabel> </div>
          </Box>
        </section>
    </>);
};


export default PanelSearch;