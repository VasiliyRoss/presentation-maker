import { fullEditorType } from './data/filledData.ts';
import { emptyEditorType } from './data/emptyData.ts';
import { EditorType } from './EditorType.ts';


let _editor : EditorType= fullEditorType;
let editorChangeHandler = null;
function getEditor() {
    return _editor;
}

function setEditor(newEditor: EditorType) {
    _editor = newEditor;
}

function addEditorChangeHandler(handler: Function): void {
    editorChangeHandler = handler;
}

function dispatch(modifyFn: Function, payload?: object): void {
    const newEditor = modifyFn(_editor, payload);
    setEditor(newEditor);

    console.log(newEditor);

    if (editorChangeHandler) {
        editorChangeHandler();
    }
}

export {
    getEditor,
    dispatch,
    addEditorChangeHandler,
};