import PropTypes from 'prop-types';
import { Card } from '../card';
import { Modal } from '../modal';
import { Pelicula } from '../../api/pelicula';
import './index.css'
import { useState } from 'react';



function ListMovies(props){
    
    const [bufferId,setbufferID] = useState(false);
    const [detailsMovie,setDetailsMovie] = useState(false);
    const [modalIsOn,setModalIsOn] = useState(false);
    const [detailsIsLoaded,setDetailsIsLoaded] = useState(false);

    const showModalDetailsById = async (id)=>{
        setModalIsOn(true);
        
        //If exist not load again
        if(bufferId == id){
            setDetailsIsLoaded(true)
            return false;
        };

        setDetailsMovie(false)
        setDetailsIsLoaded(false)
        
        const detailsResponse = await Pelicula.getDetailsById(id);
        const detailsMovie = await detailsResponse.json();
        
        if(!detailsResponse.ok){
         alert("Error de red");
          return false
        }

        if(detailsMovie){
            setbufferID(id);
            setDetailsMovie(detailsMovie);
            setDetailsIsLoaded(true)
        }                
    };


    return(
        <div className='ListMovies'>
            <div className='container'>
            {props.movies && props.movies.length > 0 ? props.movies.map((obj,index)=>{
                return <Card onClick={showModalDetailsById} title={obj.Title} key={obj.imdbID} id={obj.imdbID} img={obj.Poster} infoObject={{Año:obj.Year,Tipo:obj.Type}} />
            }):false}
            </div>
            
            {modalIsOn ? <Modal isLoaded={detailsIsLoaded} infoObject={{Tipo:detailsMovie.Type,Año:detailsMovie.Year,Pais:detailsMovie.Country,Genero:detailsMovie.Genre,Lenguaje:detailsMovie.Language,Director:detailsMovie.Director
            ,Actores:detailsMovie.Actors,Produccion:detailsMovie.Production,Trama:detailsMovie.Plot}} onClick={()=>{setModalIsOn(false)}} id={detailsMovie.imdbID} img={detailsMovie.Poster} title={detailsMovie.Title} />:false}
        </div>
    )

}

ListMovies.propTypes = {
    movies : PropTypes.array.isRequired
}


export{ListMovies};