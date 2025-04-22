import styles from './Btn1.module.css';

type BtnProps = {
    children: React.ReactNode;
}

function Btn1({ children }: BtnProps) {

    return <button className={styles.btn}>{ children }</button>
}

export default Btn1;