 import apis from '../../assets/urls/apis'

 export const getUrlImage =(registry,seccion,tomo,folio,objectId)=>{

        return  apis.THUMBNAIL_IMAGE_URL;
} 

const CardFolio = ({pRegistry,pSeccion,pTomo,pFolio,pObjectId})=>{

    const show = () =>{
        alert('mostrando' + pObjectId);

    }
    

    return (
        <div   className="polaroid"  >
                        <div className="container">
                        <p className="folio-number">
                            <b>Tomo:</b> { pTomo }
                            <b> Folio:</b> { pFolio }
                        </p>
                    </div>
                    <hr/>
        
                    <img  src={getUrlImage(pRegistry,pSeccion,pTomo,pFolio,pObjectId) } onClick={show}  className="el-image"  alt="'Folio:' + folio"/>
                    </div>
    )
};

export default  CardFolio;