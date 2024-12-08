import { generateId } from './utils.ts';
import { ImageType, SlideType, SizeType, ContentType } from './PresentatonType.ts';

function getImageSize(image: string): Promise<SizeType> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({
                'width': img.width,
                'height': img.height,
            });
        };
        img.onerror = () => {
            reject(new Error('Не удалось загрузить изображение'));
        };
        img.src = image;
    });
}


async function addImage(selectedSlide: SlideType, imageSource: string): Promise<SlideType> {
    const imageSize = await getImageSize(imageSource);

    const newImage: ImageType = {
        'src': imageSource,
        'width': imageSize.width,
        'height': imageSize.height,
        'x': 300,
        'y': 300,
        'id': generateId(),
        'type': 'image',
    };

    const updatedContent: ContentType[] = [...selectedSlide.content, newImage];

    return {
        ...selectedSlide,
        'content': updatedContent,
    };
}

export {
    addImage,
};
