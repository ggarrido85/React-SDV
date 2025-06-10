import { useContext, createContext, useState } from "react";

const ProvinceContext = createContext(null);

export const ProvinceProvider = ({ children }) => {
    // Estado
    const [id, setId] = useState(null);

    // Generacion provider utilizando id y funcion
    return (
        <ProvinceContext.Provider value={{ id, setId }}>
            {children}
        </ProvinceContext.Provider>
    );
};

export const UseProvince = () => { 
    return useContext(ProvinceContext);
};
