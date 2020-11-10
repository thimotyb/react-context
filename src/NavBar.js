import React,{useContext} from "react";
import {MyContext} from "./MovieContext"
function NavBar(){
    const [movies,] = useContext(MyContext)
    return (
        <p>Length : {movies.length} </p>
    )
}
export default NavBar;