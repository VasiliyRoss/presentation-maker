import { BlockType, SlideType, TextType } from '../PresentatonType.ts';

const defaultText: TextType = {
    'id': '',
    'type': 'text',
    'value': 'New text',
    'width': 300,
    'height': 20,
    'x': 0,
    'y': 0,
    'fontSize': 20,
    'fontFamily': 'Arial',
    'fontColor': '#000',
    'align': 'left',
    'bold' : false,
    'underline': false,
    'lineThrough': false,
};

const defaultBlock: BlockType = {
    'id': '',
    'width': 100,
    'height': 100,
    'x': 0,
    'y': 0,
};

const defaultTitle: string = 'Untitled presentation';

const defaultSlide: SlideType = {
    'id': '',
    'backgroundType': 'fillColor',
    'content': [],
    'background': '#FFF',
};

export {
    defaultText,
    defaultBlock,
    defaultTitle,
    defaultSlide,
};