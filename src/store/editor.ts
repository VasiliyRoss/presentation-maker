import { fullEditorType } from './data/filledData.ts';
import { emptyEditorType } from './data/emptyData.ts';
import {EditorType} from "./EditorType.ts";



let _editor : EditorType= fullEditorType;
let _handler = null;
function getEditor() {
    return _editor;
}

function setEditor(newEditor: EditorType) {
    _editor = newEditor;
}

function dispatch(modifyFn: Function, payload?: object): void {
    const newEditor = modifyFn(_editor, payload);
    setEditor(newEditor);

    if (_handler) {
        _handler();
    }
}


export {
    getEditor,
    dispatch,
};