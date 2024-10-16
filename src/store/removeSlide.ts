import { EditorType } from './EditorType.ts';

function removeSlide(editor: EditorType): EditorType {
    const selectedSlide = editor.presentation.slideCollection.find(slide => slide.id === editor.selection.slideId);
    if (!selectedSlide) {
        return editor;
    }

    const removeSlideId = editor.selection.slideId;
    const removeSlideIndex = editor.presentation.slideCollection.findIndex(slide => slide.id === removeSlideId);
    const newSlides = editor.presentation.slideCollection.filter(slide => slide.id !== removeSlideId);

    let newSelectedSlideId = null;
    if (newSlides.length > 0) {
        const index = Math.min(removeSlideIndex, newSlides.length - 1);
        newSelectedSlideId = newSlides[index].id;
    }

    return {
        'presentation': {
            ...editor.presentation,
            'slideCollection': newSlides,
        },
        'selection': {
            'slideId': newSelectedSlideId,
        },
    };
}

export {
    removeSlide,
};