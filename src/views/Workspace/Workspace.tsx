import { SlideType } from '../../store/PresentatonType.ts';
import { Slide } from '../Slide/Slide.tsx';
import styles from './Workspace.module.css';

type WorkspaceProps = {
    'slide': SlideType,
};

function Workspace({ slide }: WorkspaceProps) {
    return (
        <div className={styles.workspace}>
            <Slide slide={slide} className={""} isSelected></Slide>
        </div>
    );
}

export {
    Workspace,
};