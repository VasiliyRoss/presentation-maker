import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
    emptyEditorType,
} from './store/data/emptyData.ts';
import {
    fullEditorType,
} from './store/data/filledData.ts';
import { addBlock } from './store/addBlock.ts';
import { addSlide } from './store/addSlide.ts';
import { changeBlockPosition } from './store/changeBlockPosition.ts';
import { changeBlockSize } from './store/changeBlockSize.ts';
import { changeFontFamily } from './store/changeFontFamily.ts';
import { changeFontSize } from './store/changeFontSize.ts';
import { changePresentationTitle } from './store/changePresentationTitle.ts';
import { changeSlideBackground } from './store/changeSlideBackground.ts';
import { changeSlidePosition } from './store/changeSlidePosition.ts';
import { changeText } from './store/changeText.ts';
import { removeBlock } from './store/removeBlock.ts';
import { removeSlide } from './store/removeSlide.ts';
import { setSelection } from './store/setSelection.ts';
import { getEditor } from './store/editor.ts';

console.log('addBlock + emptyEditorType', addBlock(emptyEditorType, 'text'));
console.log('addBlock + fullEditorType', addBlock(fullEditorType, 'image'));

console.log('addSlide + emptyEditorType', addSlide(emptyEditorType));
console.log('addSlide + fullEditorType', addSlide(fullEditorType));

console.log('changeBlockPosition + emptyEditorType', changeBlockPosition(emptyEditorType,'1', 150,200,10));
console.log('changeBlockPosition + fullEditorType', changeBlockPosition(fullEditorType, '100', 150,200,10));

console.log('changeBlockSize + emptyEditorType', changeBlockSize(emptyEditorType,'1', 500,600));
console.log('changeBlockSize + fullEditorType', changeBlockSize(fullEditorType, '100', 500,600));

console.log('changeFontFamily + emptyEditorType', changeFontFamily(emptyEditorType,'1', 'Times New Roman'));
console.log('changeFontFamily + fullEditorType', changeFontFamily(fullEditorType, '100', 'Times New Roman'));

console.log('changeFontSize + emptyEditorType', changeFontSize(emptyEditorType,'1', 25));
console.log('changeFontSize + fullEditorType', changeFontSize(fullEditorType, '100', 25));

console.log('changePresentationTitle + emptyEditorType', changePresentationTitle(emptyEditorType,'This is pretty new title'));
console.log('changePresentationTitle + fullEditorType', changePresentationTitle(fullEditorType, 'This is title from main'));

console.log('changeSlideBackground + emptyEditorType', changeSlideBackground(emptyEditorType,'#000'));
console.log('changeSlideBackground + fullEditorType', changeSlideBackground(fullEditorType, 'base64image'));

console.log('changeSlidePosition + emptyEditorType', changeSlidePosition(emptyEditorType,1));
console.log('changeSlidePosition + fullEditorType', changeSlidePosition(fullEditorType, 2));

console.log('changeText + emptyEditorType', changeText(emptyEditorType,'1', 'Super text for block'));
console.log('changeText + fullEditorType', changeText(fullEditorType, '100', 'New text for block'));

console.log('removeBlock + emptyEditorType', removeBlock(emptyEditorType,'1'));
console.log('removeBlock + fullEditorType', removeBlock(fullEditorType, '100'));

console.log('removeSlide + emptyEditorType', removeSlide(emptyEditorType));
console.log('removeSlide + fullEditorType', removeSlide(fullEditorType));

console.log('setSelection + emptyEditorType', setSelection(emptyEditorType, { 'slideId': '3' }));
console.log('setSelection + fullEditorType', setSelection(fullEditorType, { 'slideId': '40' }));

createRoot(document.getElementById('root')!).render(<StrictMode>
    <App editor={getEditor()}/>
</StrictMode>);
