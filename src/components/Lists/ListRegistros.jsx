import SelectBasic from "../Basic/SelectBasic";
import apis from "../../assets/urls/apis";


export default function  ListRegistros(){
 
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