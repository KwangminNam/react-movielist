import { useState,useEffect } from "react";
import Loading from "./Loading";

export default function Movies(){
    
		const [movie,setMoive] = useState([]);
    const getMovies = async()=>{
			const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
			const json = await res.json();
			setMoive(json.data.movies);
    }
		useEffect(()=>{
			getMovies();
			// setLoading(false);
		},[])
    return (
        <div>
        <ul>
         {movie.map((item)=>{
         return <li key={item.id}>
                 <h3>{item.title}</h3>
                 <div>{item.summary}</div>
                 <div>
                   <img src={item.medium_cover_image}/>
                 </div>
               </li>
       })}
       </ul>
       
     </div>
    )
}