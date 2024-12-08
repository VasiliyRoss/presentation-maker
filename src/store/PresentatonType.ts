type SizeType = {
    'height': number,
    'width': number,
};

type PositionType = {
    'x': number,
    'y': number,
};

export type BlockType = SizeType & PositionType & {
    'id': string,
};

type TextDecorationType = {
    'bold': boolean,
    'underline': boolean,
    'lineThrough': boolean,
};

type TextAlignType = 'left' | 'center' | 'right';

type TextType = BlockType & TextDecorationType & {
    'type': 'text',
    'value': string,
    'fontSize': number,
    'fontFamily': string,
    'fontColor': string,
    'align': TextAlignType,
};

type ImageType = BlockType & {
    'type': 'image',
    'src': string,
};

type ContentType = ImageType | TextType;

type SlideBackgroundType = {
    'backgroundType': 'image' | 'fillColor'
};

type SlideType = SlideBackgroundType & {
    'id': string,
    'background': string,
    'content': ContentType[],
};

type SlideContentType = 'text' | 'image';

type PresentationType = {
    'title': string,
    'slideCollection': SlideType[],
};

export type {
    PresentationType,
    ContentType,
    SlideType,
    TextType,
    ImageType,
    SlideContentType,
    SizeType,
};