import { useContext, createContext, useState } from "react";

const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
   // Estado
   const [value, setLoading] = useState({
      isloading:false,
      progress : 100
   });

   // Generacion provider utilizando id y funcion
   return (
      <LoadingContext.Provider value={{ value, setLoading }}>
         {children}
      </LoadingContext.Provider>
   );
};

/**
 * Para uso del conexto desde otros componentes
 * @returns  Context
 */
export const UseLoadingContext = () => {
   return useContext(LoadingContext);
};
