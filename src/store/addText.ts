import { ContentType, SlideType } from './PresentatonType.ts';
import { defaultText } from './data/defaultData.ts';


function addText(selectedSlide: SlideType) : SlideType {

    const updatedContent: ContentType[] = [...selectedSlide.content, defaultText];

    return {
        ...selectedSlide,
        'content': updatedContent,
    };
}

export {
    addText,
};