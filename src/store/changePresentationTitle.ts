import { EditorType } from './EditorType.ts';

function changePresentationTitle(editor: EditorType, newTitle: string) : EditorType {
    return {
        ...editor,
        'presentation': {
            ...editor.presentation,
            'title': newTitle,
        },
    };
}

export {
    changePresentationTitle,
};