# Scanned document viewer, react version

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev

```

### Compiles and minifies for production

```bash
npm run prod 
```

## Application configuration
###imagesXPage = 25
Number of images that load when the scroll arrives
in the end.

###thumbnailScale = 3
To obtain the resolution of the thumbnail, divide the 
size (width and height) of the original image between this parameter.
    
###thumbnailQuality = 30
A value between 1 and 100 represents the quality with the
method (imagejpeg) of php prints the image.