import { EditorType } from './EditorType.ts';
import { SlideType } from './PresentatonType.ts';

function changeSlideBackground(editor: EditorType, newBackground: string) : EditorType {
    const selectedSlide = editor.presentation.slideCollection.find(slide => slide.id === editor.selection.slideId);
    if (!selectedSlide) {
        return editor;
    }

    const updatedSlide : SlideType = {
        ...selectedSlide,
        'background': newBackground,
    };

    const updatedSlideCollection = editor.presentation.slideCollection.map(slide =>
        slide.id === editor.selection.slideId ? updatedSlide : slide);

    return {
        ...editor,
        'presentation': {
            ...editor.presentation,
            'slideCollection': updatedSlideCollection,
        },
    };
}

export {
    changeSlideBackground,
};