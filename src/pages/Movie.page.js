import { Route, Routes } from "react-router-dom";
import MovieLayout from "../layouts/movie.layout";



const Movie = ({ component: Component, ...rest }) => {
return(
<>
<Routes> 
<Route {...rest} 
component = {(props) => (

    <MovieLayout> 
        <Component {...props}/> 
    </MovieLayout>
)}
/> 

</Routes>
</>


);

};

export default Movie;