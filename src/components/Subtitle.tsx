import styles from './Subtitle.module.css';

type SubtitleProps = {
    children: React.ReactNode;
} 

function Subtitle({ children }: SubtitleProps) {
    return <h2 className={styles.subtitle}>{children}</h2>
}

export default Subtitle;