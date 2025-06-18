import { useRef } from 'react';
import apis from '../../assets/urls/apis'



const CardFolio = ({ pIndex, pRegistry, pSeccion, pTomo, pFolio, pObjectId, pDisplay, pIsSelected }) => {

    /** Overload display for future actions */
    const show = () => {
        pDisplay(pIndex);

    }
    // Focus on div to create a motion effect an scroll move down
    const divRef = useRef(null);

    if (pIsSelected && divRef.current) {
        divRef.current.focus();
    }

    /**
    * Thumbnail for main viewer
    */
    const getUrlImage = (objectId) => {
        return apis.THUMBNAIL_IMAGE_URL + "?objectID=" + objectId + "&hhh";
    }


    return (
        <div className="polaroid" ref={divRef} tabIndex={-1} style={pIsSelected ? { backgroundColor: "#abb1b6c2" } : {}} >
            <div className="container">
                <p className="folio-number">
                    <b>Tomo:</b> {pTomo}
                    <b> Folio:</b> {pFolio}
                </p>
            </div>
            <hr />

            <img src={getUrlImage(pObjectId)} onClick={show} className="el-image" alt={"Folio: " + pTomo} />
        </div>
    )
};

export default CardFolio;