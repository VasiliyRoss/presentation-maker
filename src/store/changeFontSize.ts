import { TextType } from './PresentatonType.ts';

function changeFontSize(textBlock: TextType, newFontSize: number) : TextType {
    return {
        ...textBlock,
        'fontSize': newFontSize,
    };
}

export {
    changeFontSize,
};