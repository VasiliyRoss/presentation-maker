import { ContentType } from './PresentatonType.ts';

interface newPosition {
    'newPosX': number;
    'newPosY': number;
}

function changeContentPosition(content: ContentType,
    { newPosX, newPosY }: newPosition): ContentType {

    return {
        ...content,
        'x': newPosX,
        'y': newPosY,
    };
}

export {
    changeContentPosition,
};