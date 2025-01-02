import { fullEditorType } from './data/filledData.ts';
import { EditorType } from './EditorType.ts';
import { SlideType } from './PresentatonType.ts';


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

function dispatchSlide(modifyFn: Function, payload?: string | null): void {
    const activeSlideId = _editor.selection.activeSlideId;
    const slideIndexToModify = _editor.presentation.slideCollection.findIndex(slide => slide.id === activeSlideId);
    const updatedSlide : SlideType = modifyFn(_editor.presentation.slideCollection[slideIndexToModify], payload);
    const updatedCollection = _editor.presentation.slideCollection.map(slide => slide.id === activeSlideId ? updatedSlide : slide );

    const newEditor : EditorType = {
        ..._editor,
        'presentation': {
            ..._editor.presentation,
            'slideCollection': updatedCollection,
        },
    };
    setEditor(newEditor);

    console.log(newEditor);

    if (editorChangeHandler) {
        editorChangeHandler();
    }
}

export {
    getEditor,
    dispatch,
    dispatchSlide,
    addEditorChangeHandler,
};