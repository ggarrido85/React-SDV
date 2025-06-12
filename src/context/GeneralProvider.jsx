import { useContext, createContext, useState } from "react";

const GeneralContext = createContext(null);

export const GeneralProvider = ({ children }) => {
    // Estado
    const [data, setData] = useState({
        counter: 0,
        store : {
        none : {
            selected : null,
            param: null
        },
        provincias: {
            selected : null,
            param: "provinciaID"
        },
        registros: {
            selected : null,
            param: "registroID"
        },
        secciones: {
            selected : null,
            param: "seccionID"
        }
        ,data: {
            selected : null,
            param: "tomo"
        }
        ,folio: {
            selected : null,
            param: 'folio'
        }
        ,images: []
    }

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
