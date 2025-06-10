import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


export default function  InputFolio( )  {  

    return (
        <FormControl sx={{ m: 1, width: 250  , minWidth: 80 }}>

         <TextField
            id="outlined-search" 
            label="Folio" 
            type="number"
            min="1"
            max="600"
            /> 
                 </FormControl>

    );

};


