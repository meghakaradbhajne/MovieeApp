import './App.css';
import {  Routes, Route } from "react-router-dom"
import Header from './component/header/Header'
import Home from './pages/home/home';
import MovieList from './component/movieListt/movieListt';
import Movie from './pages/moviedetailPage/movie'
 function App() {
   return (
     <div className="App">
    <Header/>  

 <Routes> 
    
      <Route index element={<Home/>}></Route> 
    
               <Route path="movie/:id" element={<Movie/>}></Route>
                 <Route path="movies/:type" element={<MovieList/>}></Route>
                 <Route path="/*" element={<h1>Error Page</h1>}></Route>    
           
           </Routes>   
         </div>
   );
 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

export default App;
