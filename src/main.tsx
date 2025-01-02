import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
    emptyEditorType, emptyPresentationType, emptySelectionType, emptySlideType, emptyTextType,
} from './store/data/emptyData.ts';
import {
    fullEditorType, fullImageType, fullPresentationType, fullSelectionType, fullSlideType, fullTextType,
} from './store/data/filledData.ts';
import { addImage } from './store/addImage.ts';
import { addSlide } from './store/addSlide.ts';
import { changeContentPosition } from './store/changeContentPosition.ts';
import { changeContentSize } from './store/changeContentSize.ts';
import { changeFontFamily } from './store/changeFontFamily.ts';
import { changeFontSize } from './store/changeFontSize.ts';
import { changePresentationTitle } from './store/changePresentationTitle.ts';
import { changeSlideBackground } from './store/changeSlideBackground.ts';
import { changeSlidePosition } from './store/changeSlidePosition.ts';
import { changeText } from './store/changeText.ts';
import { removeContent } from './store/removeContent.ts';
import { removeSlide } from './store/removeSlide.ts';
import { setSelection } from './store/setSelection.ts';
import { addEditorChangeHandler, getEditor } from './store/editor.ts';
import { addText } from './store/addText.ts';

console.log('addImage + emptyEditorType', addImage(emptySlideType, 'text'));
console.log('addImage + fullEditorType', addImage(fullSlideType, 'image'));

console.log('addText + emptyEditorType', addText(emptySlideType));
console.log('addTexy + fullEditorType', addText(fullSlideType));

console.log('addSlide + emptyEditorType', addSlide(emptyEditorType));
console.log('addSlide + fullEditorType', addSlide(fullEditorType));

console.log('changeBlockPosition + emptyEditorType', changeContentPosition(emptyTextType, { 'newPosX': 150, 'newPosY': 200 }));
console.log('changeBlockPosition + fullEditorType', changeContentPosition(fullImageType, { 'newPosX': 150, 'newPosY':200 }));

console.log('changeBlockSize + emptyEditorType', changeContentSize(emptyTextType, { 'newWidth': 500, 'newHeight': 600 }));
console.log('changeBlockSize + fullEditorType', changeContentSize(fullImageType, { 'newWidth': 500, 'newHeight': 600 }));

console.log('changeFontFamily + emptyEditorType', changeFontFamily(emptyTextType, 'Times New Roman'));
console.log('changeFontFamily + fullEditorType', changeFontFamily(fullTextType, 'Times New Roman'));

console.log('changeFontSize + emptyEditorType', changeFontSize(emptyTextType, 25 ));
console.log('changeFontSize + fullEditorType', changeFontSize(fullTextType, 25 ));

console.log('changePresentationTitle + emptyEditorType', changePresentationTitle(emptyPresentationType,'This is pretty new title'));
console.log('changePresentationTitle + fullEditorType', changePresentationTitle(fullPresentationType, 'This is title from main'));

console.log('changeSlideBackground + emptyEditorType', changeSlideBackground(emptySlideType,'#000'));
console.log('changeSlideBackground + fullEditorType', changeSlideBackground(fullSlideType, 'base64image'));

console.log('changeSlidePosition + emptyEditorType', changeSlidePosition(emptyEditorType,1));
console.log('changeSlidePosition + fullEditorType', changeSlidePosition(fullEditorType, 2));

console.log('changeText + emptyEditorType', changeText(emptyTextType, 'Super text for block'));
console.log('changeText + fullEditorType', changeText(fullTextType, 'New text for block'));

console.log('removeBlock + emptyEditorType', removeContent(emptySlideType,'1'));
console.log('removeBlock + fullEditorType', removeContent(fullSlideType, '100'));

console.log('removeSlide + emptyEditorType', removeSlide(emptyEditorType));
console.log('removeSlide + fullEditorType', removeSlide(fullEditorType));

console.log('setSelection + emptyEditorType', setSelection(emptyEditorType, { ...emptySelectionType, 'activeSlideId': '3' }));
console.log('setSelection + fullEditorType', setSelection(fullEditorType, { ...fullSelectionType, 'activeSlideId': '40' } ));


const root = createRoot(document.getElementById('root')!);
function render() {
    root.render(<StrictMode>
        <App editor={getEditor()}/>
    </StrictMode>);
}

addEditorChangeHandler(render);
render();