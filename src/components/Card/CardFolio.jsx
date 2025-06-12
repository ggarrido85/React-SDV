import apis from '../../assets/urls/apis'

/**
* Thumbnail for main viewer
*/
export const getUrlImage = (objectId) => {
    return apis.THUMBNAIL_IMAGE_URL + "?objectID=" + objectId +"&hhh";
}

const CardFolio = ({ pIndex, pRegistry, pSeccion, pTomo, pFolio, pObjectId, pDisplay }) => {

    /** Overload display for future actions */
    const show = () => {
        pDisplay(pIndex);

    }
    const url = getUrlImage(pObjectId);
    return (
        <div className="polaroid"  >
            <div className="container">
                <p className="folio-number">
                    <b>Tomo:</b> {pTomo}
                    <b> Folio:</b> {pFolio}
                </p>
            </div>
            <hr />

            <img src={url} onClick={show} className="el-image" alt={"Folio: " + pTomo} />
        </div>
    )
};

export default CardFolio;