import { SlideType } from '../../store/PresentatonType.ts';
import styles from './SlidesList.module.css';
import { SelectionType } from '../../store/EditorType.ts';
import { setSelection } from '../../store/setSelection.ts';
import { Slide } from '../slide/Slide.tsx';
import { dispatch } from '../../store/editor.ts';

const SLIDE_PREVIEW_SCALE = 0.2;

type SlidesListPros = {
    'slides': Array<SlideType>,
    'selection': SelectionType,
};

function SlidesList({ slides, selection }: SlidesListPros) {
    function onSlideClick(slideId: string) {
        dispatch(setSelection, {
            'selectedSlideId': slideId,
        });
    }
    return (
        <div className={styles.slideList}>
            {slides.map(slide =>
                <div key={slide.id} onClick={() => onSlideClick(slide.id)}>
                    <Slide
                        slide={slide}
                        scale={SLIDE_PREVIEW_SCALE}
                        isSelected={slide.id === selection.slideId}
                        className={styles.item}
                    ></Slide>
                </div>)}
        </div>
    );
}

export {
    SlidesList,
};
