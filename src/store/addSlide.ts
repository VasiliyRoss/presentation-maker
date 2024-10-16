import { EditorType } from './EditorType.ts';
import { generateId } from './utils.ts';
import { SlideType } from './PresentatonType.ts';

function addSlide(editor: EditorType) : EditorType {
    const newSlide: SlideType = {
        'id': generateId(),
        'preview': '',
        'content': [],
        'background': '#FFF',
    };

    return {
        ...editor,
        'presentation': {
            ...editor.presentation,
            'slideCollection': [
                ...editor.presentation.slideCollection,
                newSlide,
            ],
        },
    };
}

export {
    addSlide,
};