import Button from '@mui/material/Button';
import axios, { Axios } from "axios";
import apis from "../../assets/urls/apis";
import { UseLoadingContext } from "../../context/LoadingProvider"; 
import { UseGeneralSingleton } from "../../context/GeneralProvider";



export function SearchButton   ({config})   {

    const {data,setData} = UseGeneralSingleton();
    const loadingContext = UseLoadingContext();

    const search = ()=>{
        /**
         * General context
         */
        

        // TODO: set new config to general store conext
        const conextRegistry = data.store['registros'].selected;
        const contextSeccion = data.store['secciones'].selected;
        const contextTomo = data.store['data'].selected; 
        const contextFolio = data.store['folio'].selected;


        
        // Change global state
        loadingContext.setLoading({
        isLoading: true,
        progress: 10,
        });
            // Fetch 
            axios.get(apis.IMAGES, {
                params: {
                    registroID : conextRegistry,
                    seccionID: contextSeccion,
                    tomo: contextTomo,
                    folio: contextFolio
                },
            })
            .then((response) => {
                const images = response.data.data.map((item) => (
                    {
                        "objectID":item.objectID,
                        "registroID":item.registroID,
                        "seccionID":item.seccionID,
                        "tomo":item.tomo,
                        "folio":item.folio
                    }
                    ));

                data.store.images = images;
                setData(prevState => (
                {
                    ...prevState,
                    store : data.store
                }));


                loadingContext.setLoading({
                isLoading: false,
                progress: 100,
                });
            });
    };
    return (<Button style={{with:50}}  text={config} variant="contained" onClick={search}>Buscar</Button>);

};
