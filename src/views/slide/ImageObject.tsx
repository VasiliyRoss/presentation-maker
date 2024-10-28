import { ImageType } from '../../store/PresentatonType.ts';
import { CSSProperties } from 'react';


type ImageObjectProps = {
    'imageObject': ImageType,
    'scale'?: number,
};

function ImageObject({ imageObject, scale=1 }: ImageObjectProps) {
    const imageObjectStyles: CSSProperties = {
        'position': 'absolute',
        'top': `${imageObject.posX * scale}px`,
        'left': `${imageObject.posY * scale}px`,
        'width': `${imageObject.width * scale}px`,
        'height': `${imageObject.height * scale}px`,
    };
    return (
        <img style={imageObjectStyles} src={`data:image/jpeg;base64, ${imageObject.src}`}/>
    );
}

export {
    ImageObject,
};