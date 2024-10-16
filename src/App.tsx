import { EditorType } from './store/EditorType.ts';
import TopPanel from './views/topPanel/TopPanel.tsx';

type AppProps = {
    'editor': EditorType;
};

function App({ editor }: AppProps) {
    console.log('App', editor);
    return(
        <>
            <TopPanel title={editor.presentation.title}></TopPanel>
        </>
    );
}

export default App;