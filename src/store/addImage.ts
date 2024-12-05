import { generateId } from './utils.ts';
import { defaultText, defaultBlock } from './data/defaultData.ts';
import { ImageType, SlideType, TextType, SlideContentType, SizeType } from './PresentatonType.ts';
import { useState, useEffect } from 'react';

interface ImageSource {
    'imageSource': string,
}

function getImageSize({ imageSource }: ImageSource): SizeType {
    const initSizeState: SizeType = {
        'width': 0,
        'height': 0,
    };
    const [size, setSize] = useState(initSizeState);

    useEffect(() => {
        if(!imageSource){
            return;
        }

        const img = new Image();
        img.onload = () => {
            setSize({
                'width': img.width,
                'height': img.height,
            });
        };
        img.onerror = () => {
            console.error('Ошибка при загрузке изображения');
        };
    }, [imageSource]);

    return(size);
}

function addImage(selectedSlide: SlideType, imageSourse: string): SlideType {
    const imageSize = getImageSize(imageSourse);

    const newImage: ImageType = {
        'width': imageSize.width,
        'height': imageSize.height,


    };

    return ({
        ...editor,
        'presentation': {
            ...editor.presentation,
            'slideCollection': updatedSlideCollection,
        },
    });
}

export {
    addImage,
};
