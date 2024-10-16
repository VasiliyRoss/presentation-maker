type BlockType = {
    'id': string,
    'posX': number,
    'posY': number,
    'posZ': number,
    'height': number,
    'width': number,
};

type TextType = BlockType & {
    'type': 'text',
    'value': string,
    'fontSize': number,
    'fontFamily': string,
    'fontColor': string,
    'decoration'?: string,
    'align': string,
};

type ImageType = BlockType & {
    'type': 'image',
    'src': string,
};

type SlideType = {
    'id': string,
    'preview': string,
    'background': string,
    'content': Array<TextType | ImageType>,
};

type BlockContent = 'text' | 'image';

type PresentationType = {
    'title': string,
    'slideCollection': Array<SlideType>,
};

export type {
    PresentationType,
    BlockType,
    SlideType,
    TextType,
    ImageType,
    BlockContent,
};