import { TextType } from './PresentatonType.ts';


function changeFontFamily(textBlock: TextType, newFontFamily: string) : TextType {

    return {
        ...textBlock,
        'fontFamily': newFontFamily,
    };
}

export {
    changeFontFamily,
};