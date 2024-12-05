import {PresentationType} from "./PresentatonType.ts";

function changePresentationTitle(presentation: PresentationType, newTitle: string) : PresentationType {
    return {
        ...presentation,
        'title': newTitle,
    };
}

export {
    changePresentationTitle,
};