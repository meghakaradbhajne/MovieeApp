 import React, {useEffect, useState} from "react"
   import './movieList.css'
 import { useParams } from "react-router-dom"
 import Card from '../Card'

 const MovieList = () => {
    
     const [movieList, setMovieList] = useState([])
     const {type} = useParams()

    //  useEffect(() => {
    //      getData()
    //  }, [])

     useEffect(() => {
         getData()
     }, [type])

     const getData = () => {
          fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=9c30c76a2149cb2ece98778ba0c99c09&language=en-US&page=1`)
          .then(res => res.json())
         .then(data => setMovieList(data.results))

        
     }

     return (
         <div className="movie__list">
             <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
             <div className="list__cards">
                 {
                     movieList.map((movie ,index)=> (
                         <Card movie={movie} key={index} />
                     ))
                 }
             </div>
         </div>
     )
}

 export default MovieList

