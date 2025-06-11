import Viewer from "react-viewer";
import "../../assets/css/PanelResult.css";
import CardFolio from "../Card/CardFolio";
import { useState } from "react";
import apis from "../../assets/urls/apis"; 
import { UseGeneralSingleton } from "../../context/GeneralProvider";
 


export const getUrlImage = (registry, seccion, tomo, folio, objectId) => {
  return apis.FULL_IMAGE_URL;
};



const PanelResult = () => {
   const {data} = UseGeneralSingleton();
   //let imagenes = data.store.images;
  const [visible, setVisible] = useState(false);
 
  const [index, setIndex] = useState(0);

  // Index for component card
  let fIndex = 0;

  // Image list for viewer
  const visual = data.store.images.map((item) => {
    return {
      id: item.objectId,
      src: getUrlImage(
        (item.registroID, item.seccionID, item.tomo, item.folio, item.objectId)
      ),
      alt: "Tomo: " + item.tomo + " Folio:" + item.folio,
    };
  });

  /**
   *  Callback function for display image by index
   * @param {*} idx 
   */
  const display =(idx)=>{
      setIndex(idx);
      setVisible(true);

  }
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
            pIndex={fIndex++}
            key={item.objectID}
            pRegistry={item.registroID}
            pSeccion={item.seccionID}
            pTomo={item.tomo}
            pFolio={item.folio}
            pObjectId={item.objectID}
            pDisplay={display}
          ></CardFolio>
        ))}
      </div>

      <Viewer 
        visible={visible}
        activeIndex = {index}
        onClose={() => {
          setVisible(false);
        }}
        images={visual}
      />
    </div>
  );
};

export default PanelResult;
