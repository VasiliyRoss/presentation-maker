import { EditorType } from './EditorType.ts';
import { generateId } from './utils.ts';
import { SlideType } from './PresentatonType.ts';
import { defaultSlide } from './data/defaultData.ts';

function addSlide(editor: EditorType): EditorType {
    const slideCollection = editor.presentation.slideCollection;
    const selectedSlideId = editor.selection.slideId;
    const currentIndex = slideCollection.findIndex(slide => slide.id === selectedSlideId);
    const newSlide: SlideType = {
        ...defaultSlide,
        'id': generateId(),
    };
    const updatedSlideCollection = [
        ...slideCollection.slice(0, currentIndex + 1),
        newSlide,
        ...slideCollection.slice(currentIndex + 1),
    ];

    return {
        ...editor,
        'presentation': {
            ...editor.presentation,
            'slideCollection': updatedSlideCollection,
        },
    };
}

export {
    addSlide,
};