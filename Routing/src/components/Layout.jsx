import {Link} from 'react-router-dom'

export default function Layout ({children}) {
    return (
        <>
        <nav className="mainNav">
            <Link to="/">Hjem</Link>
            <Link to="categories">Kategorier</Link>
            <Link to="about">Om oss</Link>
        </nav>
        {children}
        <footer>
            <p>2026 Utvikling av Interaktive nettsteder - React router</p>
        </footer>
        </>
    )
}