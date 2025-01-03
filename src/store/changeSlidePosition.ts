import { EditorType } from './EditorType.ts';

function changeSlidePosition(editor: EditorType, newPosition: number) : EditorType {
    const slideCollection = editor.presentation.slideCollection;
    const activeSlideId = editor.selection.activeSlideId;
    const currentIndex = slideCollection.findIndex(slide => slide.id === activeSlideId);
    const updatedSlideCollection = [...slideCollection];

    const [slide] = updatedSlideCollection.splice(currentIndex, 1);

    return {
        ...editor,
        'presentation': {
            ...editor.presentation,
            'slideCollection': updatedSlideCollection.splice(newPosition, 0, slide),
        },
    };
}

export {
    changeSlidePosition,
};