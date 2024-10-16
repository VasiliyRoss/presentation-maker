import { EditorType } from './EditorType.ts';
import { SlideType } from './PresentatonType.ts';

function changeBlockPosition(editor: EditorType,
    blockId: string,
    newPosX: number,
    newPosY: number,
    newPosZ: number
): EditorType {
    const selectedSlide = editor.presentation.slideCollection.find(slide => slide.id === editor.selection.slideId);
    if (!selectedSlide) {
        return editor;
    }

    const updatedContent = selectedSlide.content.map(block =>
        block.id === blockId ? { ...block, 'posX': newPosX, 'posY': newPosY, 'posZ': newPosZ } : block);

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
    changeBlockPosition,
};