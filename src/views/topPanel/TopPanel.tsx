import styles from './TopPanel.module.css';
import Button from '../../components/button/Button.tsx';
import { dispatch } from '../../store/editor.ts';
import { changePresentationTitle } from '../../store/changePresentationTitle.ts';
import * as React from 'react';
import { addSlide } from '../../store/addSlide.ts';
import { removeSlide } from '../../store/removeSlide.ts';
import { addImage } from '../../store/addImage.ts';
import { removeContent } from '../../store/removeContent.ts';
import {addText} from "../../store/addText.ts";

type TopPanelProps = {
    'title': string,
};

function TopPanel({ title }: TopPanelProps) {

    function onAddText(){
        dispatch(addText);
    }

    function onAddImage(){
        dispatch(addImage);
    }

    function onRemoveBlock() {
        dispatch(removeContent);
    }

    function onRemoveSlide() {
        dispatch(removeSlide);
    }

    function onAddSlide() {
        dispatch(addSlide);
    }

    const onTitleChange: React.ChangeEventHandler = (event) => {
        dispatch(changePresentationTitle, (event.target as HTMLInputElement).value);
    };

    return(
        <div className={styles.topPanel}>
            <input className={styles.title} type='text' defaultValue={title} onChange={onTitleChange} />
            <div className={styles.toolbar}>
                <Button text={'Add Slide'} onClick={onAddSlide} className={styles.button}></Button>
                <Button text={'Remove Slide'} onClick={onRemoveSlide} className={styles.button}></Button>
                <Button text={'Remove Block'} onClick={onRemoveBlock} className={styles.button}></Button>
                <Button text={'Add Text'} onClick={onAddText} className={styles.button}></Button>
                <Button text={'Add Image'} onClick={onAddImage} className={styles.button}></Button>
                <Button text={'Change Slide Background'} onClick={onRemoveSlide} className={styles.button}></Button>
            </div>
        </div>
    );
}

export default TopPanel;