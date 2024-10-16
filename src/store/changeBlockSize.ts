import { EditorType } from './EditorType.ts';
import { SlideType } from './PresentatonType.ts';

function changeBlockSize(editor: EditorType,
    blockId: string,
    newWidth: number,
    newHeight: number): EditorType {
    const selectedSlide = editor.presentation.slideCollection.find(slide => slide.id === editor.selection.slideId);
    if (!selectedSlide) {
        return editor;
    }

    const updatedContent = selectedSlide.content.map(block =>
        block.id === blockId ? { ...block, 'width': newWidth, 'height': newHeight } : block);

    const updatedSlide : SlideType = {
        ...selectedSlide,
        'content': updatedContent,
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
    changeBlockSize,
};