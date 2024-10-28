import styles from './TopPanel.module.css';
import Button from '../../components/button/Button.tsx';

type TopPanelProps = {
    'title': string,
};

function TopPanel({ title }: TopPanelProps) {
    return(
        <div className={styles.topPanel}>
            <input className={styles.title} type='text' defaultValue={title} />
            <div>
                <Button text={'Add Slide'} onClick={() => console.log('ADD SLIDE')} className={styles.button}></Button>
                <Button text={'Remove Slide'} onClick={() => console.log('REMOVE SLIDE')} className={styles.button}></Button>
            </div>
        </div>
    );
}

export default TopPanel;