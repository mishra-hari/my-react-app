import styles from './header.module.css'

function Header({ title, children, bgColor = 'bg-slate-50', textColor = 'text-slate-900' }) {

    return (
        <header className={`header p-4 ${bgColor} ${textColor}`}>
            { title && <h1 className={styles.title}>{title}</h1> }
            {children}
        </header>
    )
}

export default Header