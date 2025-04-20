import styles from './Title.module.css';

type TituloProps = {
    children: React.ReactNode
}

export function Titulo({ children }: TituloProps) {

    return <h1 className={styles.title}>{children}</h1>
}

