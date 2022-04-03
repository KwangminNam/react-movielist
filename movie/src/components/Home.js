import {useState,useEffect} from "react";
import Movie from "./Movies";

export default function Home(){
  const [loading,setLoaidng]=useState(true);
  const [moive , setMovie] = useState([]);

  const getMoives = async()=>{
    const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    const json = await res.json();
    setMovie(json.data.movies);
    setLoaidng(false);
}
  useEffect(()=>{
      getMoives();
  },[])

 return(
    <div>
        {loading ? <p>loading,,</p> :<ul>
        {moive.map((item)=>
            <Movie 
                coverIMg={item.medium_cover_image}
                movieTitle={item.title}
            />
        )}
        </ul>}
    </div>
 )
}