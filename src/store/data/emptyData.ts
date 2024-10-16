import { TextType, ImageType, SlideType, PresentationType } from '../PresentatonType.ts';
import { EditorType, SelectionType } from '../EditorType.ts';

const emptyTextType : TextType = {
    'id': '1',
    'posX': 10,
    'posY': 10,
    'posZ': 1,
    'height': 100,
    'width': 50,
    'type': 'text',
    'value': 'This is test data',
    'fontSize': 10,
    'fontFamily': 'Arial',
    'fontColor': '#000',
    'align': 'left',
};

const emptyImageType : ImageType = {
    'id': '2',
    'posX': 10,
    'posY': 10,
    'posZ': 1,
    'height': 100,
    'width': 50,
    'type': 'image',
    'src': '',
};

const emptySlideType : SlideType = {
    'id': '3',
    'preview': '',
    'background': '#FFF',
    'content': [],
};

const emptyPresentationType : PresentationType = {
    'title': 'Empty Presentation',
    'slideCollection': [emptySlideType],
};

const emptySelectionType : SelectionType = {
    'slideId': null,
};

const emptyEditorType: EditorType = {
    'presentation': emptyPresentationType,
    'selection': emptySelectionType,
};

export {
    emptyTextType,
    emptyPresentationType,
    emptySlideType,
    emptyImageType,
    emptyEditorType,
    emptySelectionType,
};