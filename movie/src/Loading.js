import { useState , useEffect} from "react";
import Movies from "./Movies";

export default function Loading(props){
    const [loading,setLoading] = useState(true);
    // const getMovies = async()=>{
    // //   const res = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    // //   const json = await res.json();
    // //   setMovie(json.data.movies);
    // //   setLoading(false);
  
    //   // or more shortcut
    //   // const json2  =await(
    //   //   await fetch("www.api_url.com")
    //   // ).json()
  
    //   // or
    //   // fetch("www.api_url.com").then((res)=>{res.json()}).then((json)=>console.log(json));
    // }
    // async 함수를 만들고 res로 받아와서 then 대신에 await 씀
  
    // useEffect(()=>{
    //   getMovies();
    // },[])
    // async 함수를 useeffet안에 넣음 

    return (
        loading ? <p>Loading...</p> : <Movies></Movies>
      )

}