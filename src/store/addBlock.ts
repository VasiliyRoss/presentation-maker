import { EditorType } from './EditorType.ts';
import { generateId } from './utils.ts';
import { defaultText, defaultBlock } from './data/defaultData.ts';
import { ImageType, SlideType, TextType, BlockContent } from './PresentatonType.ts';


function addBlock(editor: EditorType, type: BlockContent): EditorType {
    const selectedSlide = editor.presentation.slideCollection.find(slide => slide.id === editor.selection.slideId);
    if (!selectedSlide) {
        return editor;
    }

    const blockCreators = {
        'text': () => ({
            ...defaultText,
            'id': generateId(),
        } as TextType),

        'image': () => ({
            ...defaultBlock,
            'id': generateId(),
            'src': 'base64string',
            'type': type,
        } as ImageType),

    };

    const newBlock = blockCreators[type]?.();

    if (!newBlock) {
        throw new Error(`Unsupported block type: ${type}`);
    }

    const updatedContent = [...selectedSlide.content, newBlock];

    const updatedSlideWithNewBlock : SlideType = {
        ...selectedSlide,
        'content': updatedContent,
    };

    const updatedSlideCollection = editor.presentation.slideCollection.map(slide =>
        slide.id === editor.selection.slideId ? updatedSlideWithNewBlock : slide);

    return ({
        ...editor,
        'presentation': {
            ...editor.presentation,
            'slideCollection': updatedSlideCollection,
        },
    });
}

export {
    addBlock,
};
