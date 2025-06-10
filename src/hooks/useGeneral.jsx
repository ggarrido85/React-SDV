import { useContext } from "react";
import GeneralContext from "../context/GeneralContext";
 


export const UseGeneralSingleton = () => {
    return useContext(GeneralContext);
};