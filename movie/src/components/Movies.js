import { Link } from "react-router-dom"
import Detail from "./Detail"

export default function Movie({coverIMg,movieTitle}){
  return(
    <li>
      <h4>
        <Link to="/detail">{movieTitle}</Link>
      </h4>
      <figure>
        <img src={coverIMg} alt={movieTitle} />
      </figure>
    </li>
  )
}

