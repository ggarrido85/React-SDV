import SelectBasic from "../Basic/SelectBasic";
import apis from "../../assets/urls/apis";


export default function  ListRegistros(){
/*
    const [isLoading, setIsLoading]  = useState(false);
    const [lastParentSelected, setLastParent]  = useState(null);
    const [value,setValue] = useState([]);
    const [idSelected, setIdSelected] = useState(0);
    const provinceContext = UseProvince();
    const provinciaID = {provinciaID: provinceContext.id};
    const loadingContext = UseLoadingContext();

    if(provinceContext.id != null && lastParentSelected != provinceContext.id  && !isLoading) {
        setValue(null );
        setIsLoading(true);
        loadingContext.setLoading({
            isLoading:true,
            progress: 10
        })
        axios.get(apis.REGISTROS,{
            params:
                provinciaID
        }).then((response) => {
            const data = response.data.registros.map(
                item => ({
                    id: item.registroID,
                    value:item.description
                })
                );
                setValue(data );
                setIsLoading(false);
                setLastParent( provinceContext.id );
                loadingContext.setLoading({
                    isLoading:false,
                    progress: 100
                })
                });
    }

   console.log(idSelected)*/
    return (
        <SelectBasic required
      pWidth="300"
      pTittle="Registros"
      pFirst={false}
      pDataType="registros"
      pParentType="provincias"
      pApi={apis.REGISTROS}
      pMapping={{id:'registroID',value:'description'}}></SelectBasic>
    );

};