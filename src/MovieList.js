import React,{useContext} from "react"
import {MyContext} from "./MovieContext"

function MovieList() {
 const [movies,] =  useContext(MyContext);
return (
<div>
    {
    movies.map((movie)=>(
        <React.Fragment>
            <h3>{movie.name}</h3>
            <p>{movie.Price}</p>
        </React.Fragment>
    ))

}
</div>
)
}
export default MovieList