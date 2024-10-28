import { BlockType, SlideType, TextType } from '../PresentatonType.ts';

const defaultText: TextType = {
    'id': '',
    'type': 'text',
    'value': 'New text area',
    'width': 300,
    'height': 20,
    'posX': 400,
    'posY': 700,
    'posZ': 1,
    'fontSize': 46,
    'fontFamily': 'Arial',
    'fontColor': '#000',
    'decoration': '',
    'align': 'left',
};

const defaultBlock: BlockType = {
    'id': '',
    'width': 100,
    'height': 100,
    'posX': 0,
    'posY': 0,
    'posZ': 1,
};

const defaultTitle: string = 'Untitled presentation';

const defaultSlide: SlideType = {
    'id': '',
    'preview': '',
    'content': [],
    'background': '#FFF',
};

export {
    defaultText,
    defaultBlock,
    defaultTitle,
    defaultSlide,
};