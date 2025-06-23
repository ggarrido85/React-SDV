
const prod = {
  PROVINCIAS: '../ImagenesMinjus/controllers/index.php/Objects/getAllProvincias',

  REGISTROS: '../ImagenesMinjus/controllers/index.php/Objects/getRegistrosByProvincia',

  SECCIONES: '../ImagenesMinjus/controllers/index.php/Objects/getSecciones',

  AVAILABLE_TOMOS: '../ImagenesMinjus/controllers/index.php/Objects/getAvailableTomos',

  IMAGES: '../ImagenesMinjus/controllers/index.php/Objects/getTomoOnDemand', 

  THUMBNAIL_IMAGE_URL: '../ImagenesMinjus/controllers/index.php/Picture/getThumbnail',

  FULL_IMAGE_URL: '../ImagenesMinjus/controllers/index.php/Picture/getFull',
}


const devStaging = {
  PROVINCIAS: 'https://raw.githubusercontent.com/ggarrido85/React-SDV/refs/heads/main/src/fetch/provinces.json',

  REGISTROS: 'https://raw.githubusercontent.com/ggarrido85/React-SDV/refs/heads/main/src/fetch/registry.json',

  SECCIONES: 'https://raw.githubusercontent.com/ggarrido85/React-SDV/refs/heads/main/src/fetch/seccions.json',

  AVAILABLE_TOMOS: 'https://raw.githubusercontent.com/ggarrido85/React-SDV/refs/heads/main/src/fetch/tomos.json',

  IMAGES: 'https://raw.githubusercontent.com/ggarrido85/React-SDV/refs/heads/main/src/fetch/images.json',

  THUMBNAIL_IMAGE_URL: 'https://raw.githubusercontent.com/ggarrido85/React-SDV/refs/heads/main/src/fetch/getThumbnail.jpeg',

  FULL_IMAGE_URL: 'https://raw.githubusercontent.com/ggarrido85/React-SDV/refs/heads/main/src/fetch/getFull.jpeg',
}


const dev = {
  PROVINCIAS: 'https://wf-e.3.5.4.prod.xetid.cu/lib/js/ejemplo.php',

  REGISTROS: 'https://wf-e.3.5.4.prod.xetid.cu/lib/js/registros.php',

  SECCIONES: 'https://wf-e.3.5.4.prod.xetid.cu/lib/js/secciones.json',

  AVAILABLE_TOMOS: 'https://wf-e.3.5.4.prod.xetid.cu/lib/js/tomos.json',

  IMAGES: 'https://wf-e.3.5.4.prod.xetid.cu/lib/js/images.php',

  THUMBNAIL_IMAGE_URL: 'https://wf-e.3.5.4.prod.xetid.cu/lib/img/getThumbnail.jpeg',

  FULL_IMAGE_URL: 'https://wf-e.3.5.4.prod.xetid.cu/lib/img/getFull.jpeg',
}

export default dev; 