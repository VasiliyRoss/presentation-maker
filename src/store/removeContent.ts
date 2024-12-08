import { ContentType, SlideType } from './PresentatonType.ts';

function removeContent(slide: SlideType, blockId: string) : SlideType {
    const updatedContent : Array<ContentType> = slide.content.filter(block => block.id !== blockId);

    return {
        ...slide,
        'content': updatedContent,
    };
}

export {
    removeContent,
};