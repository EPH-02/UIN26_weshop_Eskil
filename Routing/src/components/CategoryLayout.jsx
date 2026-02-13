import { Link, Outlet } from "react-router-dom"


export default function CategoryLayout () {
    return (
        <>
            <nav>
                <Link to="sko">Sko</Link>
                <Link to="bukse">Bukser</Link>
                <Link to="skjorte">Skjorter</Link>
                <Link to="lue">Luer</Link>
                <Link to="vest">Vest</Link>
                <Link to="belter">Belter</Link>
            </nav>
            <Outlet />    
        </>
    )
}