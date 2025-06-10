import SelectBasic from "../Basic/SelectBasic";
import apis from "../../assets/urls/apis";


export default function  ListSecciones( )  {  

        return (
            <SelectBasic required
          pWidth="300"
          pTittle="Secciones"
          pFirst={false}
          pDataType="secciones"
          pParentType="registros"
          pApi={apis.SECCIONES}
          pMapping={{id:'seccionID',value:'description'}}></SelectBasic>
        );

};