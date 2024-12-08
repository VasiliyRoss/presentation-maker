import { SlideType } from '../../store/PresentatonType.ts';
import { CSSProperties } from 'react';
import { TextObject } from './TextObject.tsx';
import { ImageObject } from './ImageObject.tsx';
import styles from './Slide.module.css';

const SLIDE_WIDTH = 1251;
const SLIDE_HEIGHT = 704;

type SlideProps = {
    'slide': SlideType,
    'scale'?: number,
    'isSelected': boolean,
    'className': string,
};

function Slide({ slide, scale=1, isSelected, className }: SlideProps) {
    const slideStyles:CSSProperties = {
        'backgroundColor': slide.background,
        'width': `${SLIDE_WIDTH * scale}px`,
        'height': `${SLIDE_HEIGHT * scale}px`,
    };
    if (isSelected) {
        slideStyles.border = '3px solid #0b57d0';
    }



    return(
        <div style={slideStyles} className={styles.slide + ' ' + className}>
            {slide.content.map(slideObject=> {
                switch (slideObject.type) {
                    case 'text':
                        return <TextObject key={slideObject.id} textObject={slideObject} scale={scale}></TextObject>;
                    case 'image':
                        return <ImageObject key={slideObject.id} imageObject={slideObject} scale={scale}></ImageObject>;
                    default:
                        throw new Error(`Unknown slide type: ${slideObject.type}`);
                }
            })}
        </div>
    );
}

export {
    Slide,
};