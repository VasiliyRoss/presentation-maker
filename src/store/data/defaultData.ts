import { BlockType, TextType } from '../PresentatonType.ts';

const defaultText: TextType = {
    'id': '',
    'type': 'text',
    'value': 'Text',
    'width': 30,
    'height': 20,
    'posX': 0,
    'posY': 0,
    'posZ': 1,
    'fontSize': 16,
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

export {
    defaultText,
    defaultBlock,
};