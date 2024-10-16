import { PresentationType } from './PresentatonType.ts';

type SelectionType = {
    'slideId': string | null;
};

type EditorType = {
    'presentation': PresentationType;
    'selection': SelectionType;
};

export type {
    SelectionType,
    EditorType,
};