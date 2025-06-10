import { useContext, createContext, useState } from "react";

const GeneralContext = createContext(null);

export const GeneralProvider = ({ children }) => {
    // Estado
    const [data, setData] = useState({
        counter: 0,
        store : {
        none : {
            selected : null,
        },
        provincias: {
            selected : null,
        },
        registros: {
            selected : null,
        },
        secciones: {
            selected : null,
        }
        ,data: {
            selected : null,
        }}

    });

    // Generacion provider utilizando id y funcion
    return (
        <GeneralContext.Provider value={{ data, setData }}>
            {children}
        </GeneralContext.Provider>
    );
};

export const UseGeneralSingleton = () => {
    return useContext(GeneralContext);
};
