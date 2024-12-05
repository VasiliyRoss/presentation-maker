import {TextType} from './PresentatonType.ts';

function changeText(textBlock: TextType, newText: string) : TextType {
    return {
        ...textBlock,
        'value': newText,
    };
}

export {
    changeText,
};