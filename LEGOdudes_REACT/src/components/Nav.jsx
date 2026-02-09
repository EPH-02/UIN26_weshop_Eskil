import { Link } from "react-router-dom";

export default function Nav(){
    return(
       <nav>
        <Link to="city">City</Link>
        <Link to="ninjago">Ninjago</Link>
        <Link to="castles_and_knights">Castles & Knights</Link>
        <Link to="marines_and_pirates">Marines & Priates</Link>
        <Link to="movie_characters">Movie Characters</Link>
        </nav>
    )
  }