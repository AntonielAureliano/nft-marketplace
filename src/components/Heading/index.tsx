import styles from './Heading.module.css';

type HeadingProps = {
    children: React.ReactNode
    level?: 'h1' | 'h2'
}

export function Heading({ children, level = 'h1' }: HeadingProps) {
    const Tag = level;
    
    return (
        <Tag 
            className={level === 'h1' ? styles.heading1 : styles.heading2}
        >
            {children}
        </Tag>
    )
}

