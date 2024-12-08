import { PresentationType } from './PresentatonType.ts';

function removeSlide(presentation: PresentationType, removeSlideId: string): PresentationType {
    if(!presentation.slideCollection)
        return presentation;

    const slides = presentation.slideCollection.filter(slide => slide.id !== removeSlideId);

    return {
        ...presentation,
        'slideCollection': slides,
    };
}

export {
    removeSlide,
};