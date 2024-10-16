import { TextType, ImageType, SlideType, PresentationType } from '../PresentatonType.ts';
import { EditorType, SelectionType } from '../EditorType.ts';

const fullTextType : TextType = {
    'id': '100',
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
    'decoration': 'underline',
    'align': 'left',
};

const fullImageType : ImageType = {
    'id': '20',
    'posX': 10,
    'posY': 10,
    'posZ': 1,
    'height': 100,
    'width': 50,
    'type': 'image',
    'src': 'base64',
};

const fullSlideType : SlideType = {
    'id': '10',
    'preview': '',
    'background': '#FFF',
    'content': [fullTextType, fullImageType],
};

const fullSlideType2 : SlideType = {
    'id': '40',
    'preview': '',
    'background': '#FFF',
    'content': [fullTextType, fullImageType],
};

const fullPresentationType : PresentationType = {
    'title': 'full Presentation',
    'slideCollection': [fullSlideType, fullSlideType2],
};

const fullSelectionType : SelectionType = {
    'slideId': '10',
};

const fullEditorType: EditorType = {
    'presentation': fullPresentationType,
    'selection': fullSelectionType,
};

export {
    fullTextType,
    fullPresentationType,
    fullSlideType,
    fullImageType,
    fullSlideType2,
    fullEditorType,
    fullSelectionType,
};