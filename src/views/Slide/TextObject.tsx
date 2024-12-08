import { TextType } from '../../store/PresentatonType.ts';
import { CSSProperties } from 'react';

type TextObjectProps = {
    'textObject': TextType,
    'scale'?: number,
};
function TextObject({ textObject, scale = 1 }: TextObjectProps) {
    const textObjectStyles: CSSProperties = {
        'position': 'absolute',
        'top': `${textObject.x * scale}px`,
        'left': `${textObject.y * scale}px`,
        'width': `${textObject.width * scale}px`,
        'height': `${textObject.height * scale}px`,
        'fontSize': `${textObject.fontSize * scale}px`,
    };
    return (
        <p style={textObjectStyles}>{textObject.value}</p>
    );
}

export {
    TextObject,
};
