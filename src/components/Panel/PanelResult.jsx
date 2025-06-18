import Viewer from "react-viewer";
import "../../assets/css/PanelResult.css";
import CardFolio from "../Card/CardFolio";
import { useState } from "react";
import apis from "../../assets/urls/apis";
import { UseGeneralSingleton } from "../../context/GeneralProvider";
//import { UseLoadingContext } from '../../context/LoadingProvider';
//import { InfiniteScrollCmp } from "../InfiniteScroll/InfiniteScroll";
import InfiniteScroll from "react-infinite-scroll-component";



/**
 * Result panel
 */
const PanelResult = () => {
   const { data } = UseGeneralSingleton();
   //const loadingContext = UseLoadingContext();

   //let imagenes = data.store.images;
   const [visible, setVisible] = useState(false);

   const [index, setIndex] = useState(0);

   // Index for component card
   let fIndex = 0;

   /**
 * Full image for main viewer
 */
   const getUrlImage = (objectId) => {
      return apis.FULL_IMAGE_URL + "?objectID=" + objectId;
   };

   // Image list for viewer
   const visual = data.store.images.map((item) => {
      return {
         id: item.objectId,
         src: getUrlImage(item.objectID),
         alt: "Tomo: " + item.tomo + " Folio:" + item.folio,
      };
   });

   /**
    *  Callback function for display image by index
    * @param {*} idx
    */
   const display = (idx) => {
      setIndex(idx);
      setVisible(true);
   };

   // off: there is no data
   if (data.store.images.length === 0) return <div></div>;

   //if(loadingContext.value.isLoading) return <div></div>;
   return (
      <div
         className="results-box" id="scrollableDiv"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy"
         infinite-scroll-distance="25"
      >
         <div className="grid-container"  >
            <InfiniteScroll
               dataLength={data.store.images.length}
               next={data.fn}
               //style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
               //inverse={true} //
               hasMore={data.store.imageMore}
               loader={<h4>Cargando...</h4>}
            //scrollableTarget="scrollableDiv"
            >
               {data.store.images.map((item) => (
                  <CardFolio
                     pIsSelected={index == fIndex}
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
            </InfiniteScroll>
         </div>

         <Viewer
            visible={visible}
            activeIndex={index}
            noNavbar={true}
            onClose={() => {
               setVisible(false);
               setIndex(-1);
            }}
            onMaskClick={() => {
               setVisible(false);
               setIndex(-1);
            }}
            onChange={(activeImage, idx) => {
               // Not need to request new data because the focus move the scroll
               // Verify has more
               /*if((data.store.images.length - 2 === idx) && data.store.imageMore){
                  data.fn();// request new data
               }*/
               setIndex(idx);
            }}
            images={visual}
         />
      </div>
   );
};

export default PanelResult;
