import Viewer from "react-viewer";
import "../../assets/css/PanelResult.css";
import CardFolio from "../Card/CardFolio";
import { useState } from "react";
import apis from "../../assets/urls/apis"; 
import { UseGeneralSingleton } from "../../context/GeneralProvider";
 


export const getUrlImage = (registry, seccion, tomo, folio, objectId) => {
  return apis.FULL_IMAGE_URL;
};

/*
const imagenes = [
  {
    objectID: 1005008,
    registroID: "335",
    seccionID: "2",
    tomo: "5",
    folio: 492,
  },
  {
    objectID: 1005024,
    registroID: "335",
    seccionID: "2",
    tomo: "5",
    folio: 495,
  },
  {
    objectID: 1005042,
    registroID: "335",
    seccionID: "2",
    tomo: "5",
    folio: 495,
  },
];*/

const PanelResult = () => {
   const {data} = UseGeneralSingleton();
   //let imagenes = data.store.images;
  const [visible, setVisible] = useState(false);
 
  const visual = data.store.images.map((item) => {
    return {
      id: item.objectId,
      src: getUrlImage(
        (item.registroID, item.seccionID, item.tomo, item.folio, item.objectId)
      ),
      alt: "Tomo: " + item.tomo + " Folio:" + item.folio,
    };
  });

  if(data.store.images.length == 0 )
      return <div></div>;
  
  return (
    <div
      className="results-box"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="25"
    >
      <div className="grid-container">
        {data.store.images.map((item) => (
          <CardFolio
            key={item.objectID}
            pRegistry={item.registroID}
            pSeccion={item.seccionID}
            pTomo={item.tomo}
            pFolio={item.folio}
            pObjectId={item.objectID}
          ></CardFolio>
        ))}
      </div>

      <Viewer 
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        images={visual}
      />
    </div>
  );
};

export default PanelResult;
