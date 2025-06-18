
import SelectBasic from "../Basic/SelectBasic";

import apis from "../../assets/urls/apis";


export default function ListTomos() {

  return (
    <SelectBasic required
      pWidth="300"
      pTittle="Tomos"
      pFirst={false}
      pDataType="data"
      pParentType="secciones"
      pApi={apis.AVAILABLE_TOMOS}
      pMapping={(item)=>({
                    id: item,
                    value: item,
                  })}></SelectBasic>
  );

};