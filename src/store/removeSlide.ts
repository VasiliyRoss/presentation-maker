import { EditorType } from './EditorType.ts';
import { PresentationType } from './PresentatonType.ts';

function removeSlide(editor: EditorType): EditorType {
    if (!editor.selection) {
        return editor;
    }

    const removeSlideId = editor.selection.slideId;
    const removeSlideIndex = editor.presentation.slideCollection.findIndex(slide => slide.id === removeSlideId);

    const newPresentation = removeSlidePresentation(editor.presentation, removeSlideId);

    let newSelectedSlideId = null;
    if (newPresentation.slideCollection.length > 0) {
        const index = Math.min(removeSlideIndex, newPresentation.slideCollection.length - 1);
        newSelectedSlideId = newPresentation.slideCollection[index].id;
    }

    return {
        'presentation': newPresentation,
        'selection': {
            'slideId': newSelectedSlideId,
        },
    };
}


function removeSlidePresentation(presentation: PresentationType, removeSlideId: string): PresentationType {
    const newSlides = presentation.slideCollection.filter(slide => slide.id !== removeSlideId);

    return {
        ...presentation,
        'slideCollection': newSlides,
    };
}

export {
    removeSlide,
};