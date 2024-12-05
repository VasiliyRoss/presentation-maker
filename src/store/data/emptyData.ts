import { TextType, ImageType, SlideType, PresentationType } from '../PresentatonType.ts';
import { EditorType, SelectionType } from '../EditorType.ts';
import { defaultTitle } from './defaultData.ts';

const emptyTextType : TextType = {
    'id': '1',
    'x': 10,
    'y': 10,
    'height': 100,
    'width': 50,
    'type': 'text',
    'value': 'This is test data',
    'fontSize': 10,
    'fontFamily': 'Arial',
    'fontColor': '#000',
    'bold': true,
    'underline': true,
    'lineThrough': true,
    'align': 'left',
};

const emptyImageType : ImageType = {
    'id': '2',
    'x': 200,
    'y': 100,
    'height': 100,
    'width': 50,
    'type': 'image',
    'src': '',
};

const emptySlideType : SlideType = {
    'id': '3',
    'background': '#fff',
    'backgroundType': 'fillColor',
    'content': [],
};

const emptyPresentationType : PresentationType = {
    'title': defaultTitle,
    'slideCollection': [],
};

const emptySelectionType : SelectionType = {
    'selectedSlideIds': [],
    'activeSlideId': null,
    'selectedContentIds': [],
    'selectedObjectType': null,
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