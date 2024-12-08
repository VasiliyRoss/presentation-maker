import { ContentType } from './PresentatonType.ts';

interface newSize {
    'newWidth': number,
    'newHeight': number
}

function changeContentSize(content: ContentType,
    {
        newWidth,
        newHeight,
    }: newSize): ContentType {

    return {
        ...content,
        'width': newWidth,
        'height': newHeight,
    };
}

export {
    changeContentSize,
};