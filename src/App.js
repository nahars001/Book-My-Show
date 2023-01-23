import './index.css';
import axios from 'axios';
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';

 import HomePage from './pages/Home.page.js';
 import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
import { Routes } from 'react-router-dom';


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY

function App() {

  return (
 <>

      <DefaultHOC path="/" exact component = {HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} /> 
      <DefaultHOC path="/plays" exact component={Plays}/>
       
   
 </>
  );
}

export default App;
