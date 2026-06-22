import styles from './header.module.css'

function Header({ title, children }) {

    return (
        <header className={'header'}>
            { title && <h1 className={styles.title}>{title}</h1> }
            {children}
        </header>
    )
}

export default Header