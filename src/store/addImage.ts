import { generateId } from './utils.ts';
import { ImageType, SlideType, ContentType } from './PresentatonType.ts';

function addImage(selectedSlide: SlideType, imageSource: string): SlideType {

    const newImage: ImageType = {
        'src': imageSource,
        'width': 300,
        'height': 300,
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
