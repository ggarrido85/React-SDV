 
import SelectBasic from "../Basic/SelectBasic";
import apis from "../../assets/urls/apis";


export default function ListProvincias() {  

  return (
    <SelectBasic
      required
      pWidth="300"
      pTittle="Provincias"
      pFirst={true}
      pDataType="provincias"
      pParentType="none"
      pApi={apis.PROVINCIAS}
      pMapping={{id:'idprovincia',value:'denominacion'}} 
    ></SelectBasic>
  );
}
