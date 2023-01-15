import { useState, useEffect } from "react";
import React from "react";
import "./row.css";
import Row from "../RowCompo/Row"


const Apicall = () => {


  
  const [popular, setPopular] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [TvShow, setTvShow] = useState([]);
  

const pageination =1
    
    
  const Key = "a6c393f0ff4b41179167b7119538133b";
  const MovieUrl = "https://api.themoviedb.org/3/movie/";
  const TvShowUrl = "https://api.themoviedb.org/3/tv/"
  


 
  
   

  const PopularApi = async () => {
    let res = await fetch(`${MovieUrl}popular?api_key=${Key}&language=en-US&page=${pageination}`);
    let data = await res.json();
    setPopular(data.results);
  };

  const TopRatedApi = async () => {
    let res = await fetch(`${MovieUrl}top_rated?api_key=${Key}&language=en-US&page=${pageination}`);
    let data  = await res.json()
     setTopRated(data.results)
  };

  const TvShowPopular = async () => {
    let res = await fetch(`${TvShowUrl}popular?api_key=${Key}&language=en-US&page=${pageination}`);
    let data  = await res.json()
     setTvShow(data.results)
  };

  useEffect(() => {
    PopularApi()
    TvShowPopular();
    TopRatedApi()
  }, []);
      

 
  

  return (
    <>
        <Row  arr={popular} title="Populer" pageination={pageination}  />
        <Row  arr={TopRated} title="Movies"  pageination={pageination}  />
        <Row  arr={TvShow} title="Tv show" pageination={pageination}  />

    </>
  );
};

export default Apicall;
