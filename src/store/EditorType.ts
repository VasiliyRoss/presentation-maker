import { PresentationType, SlideContentType, SlideType } from './PresentatonType.ts';

type SelectionType = {
    'selectedSlideIds': Array <string | null>,
    'activeSlideId': string | null,
    'selectedContentIds': Array <string | null>,
    'selectedObjectType': SlideType | SlideContentType | null,
};

type EditorType = {
    'presentation': PresentationType;
    'selection': SelectionType;
};

export type {
    SelectionType,
    EditorType,
};