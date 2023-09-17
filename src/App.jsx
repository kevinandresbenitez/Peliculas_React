import { Pelicula } from "./api/pelicula";
import {SearchBar} from "./components/searchBar"
import {Pagination} from "./components/pagination";
import { ListMovies } from "./components/listMovies";
import { useEffect, useState } from "react";
import './index.css';

function App() {
  
  const [movies,setMovies] = useState([]);
  const [textSearch,setTextSearch] = useState(null);
  const [page,setPage] = useState(1);
  const [messageError,setMessageError] = useState(null);
  const [resultsNumber,setResultNumbers] = useState(0);

  useEffect(()=>{
    searchMovies();
  },[])

  const searchMovies = async (text ='', page = 1)=>{
    let searchResponse = await Pelicula.searchMovies(text,page);
    let searchMovies = await searchResponse.json()
    
    if(!searchResponse.ok){
      setMessageError('Error De Red');
      return false
    }

    if(!(searchMovies.Response == "True")){
      setMessageError('No Se Encontraron Peliculas');
      return false
    }
    
    // Set Values
    setPage(page);
    setTextSearch(text);
    setMovies(searchMovies.Search);
    setResultNumbers(parseInt(searchMovies.totalResults));
    setMessageError(null);

  };

  return (
    <div className="container">
      <SearchBar searchFunction={searchMovies} />
      <ListMovies movies={movies} />
      {movies && movies.length > 0 ? <Pagination searchFunction={searchMovies} textSearch={textSearch} resultsNumber={resultsNumber} pageCurrent={page} setPage={setPage}/>:false}
    </div>
  )
}

export default App
