import styles from './Button.module.css';

type ButtonProps = {
    children: React.ReactNode
    button?: 'outline' | 'solid'
}

export function Button({ children, button = 'outline' }: ButtonProps) {

    return (
        <button 
            className={button === 'outline' ? styles.buttonOutline : styles.buttonSolid}
        >
            { children }
        </button>
    )
}