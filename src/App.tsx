import { EditorType } from './store/EditorType.ts';
import TopPanel from './views/topPanel/TopPanel.tsx';
import { Workspace } from './views/Workspace/Workspace.tsx';
import { SlidesList } from './views/SlidesList/SlidesList.tsx';
import styles from './App.module.css';

type AppProps = {
    'editor': EditorType;
};

function App({ editor }: AppProps) {
    console.log('App', editor);
    return(
        <div className={styles.app} >
            <TopPanel title={editor.presentation.title}></TopPanel>
            <div className={styles.container}>
                <SlidesList slides={editor.presentation.slideCollection} selection={editor.selection}></SlidesList>
                <Workspace slide={editor.presentation.slideCollection[0]}></Workspace>
            </div>
        </div>
    );
}

export default App;