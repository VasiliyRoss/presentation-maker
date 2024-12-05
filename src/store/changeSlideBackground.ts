import { SlideType } from './PresentatonType.ts';

function changeSlideBackground(slide: SlideType, newBackground: string) : SlideType {
    return {
        ...slide,
        'background': newBackground,
    };
}

export {
    changeSlideBackground,
};