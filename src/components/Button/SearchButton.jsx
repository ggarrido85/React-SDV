import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Search';
import { UseLoadingContext } from "../../context/LoadingProvider";
import { UseGeneralSingleton } from "../../context/GeneralProvider";


export function SearchButton({ config }) {

    
    return (<Button style={{ with: 50 }} startIcon={<DeleteIcon />} disabled={config.isDisabled}
        text={config} variant="contained" onClick={()=>{config.onClick(true)}}>Buscar</Button>);

};
