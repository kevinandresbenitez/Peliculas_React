import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

function SearchBar (props){

    const searchBarDOM = React.createRef();

    
    function eventSearch(){
        let value = searchBarDOM.current.value;
        props.searchFunction(value.trim())
    }

    return(         
        <div className='SearchBar'>
            <h1 className='SearchBar__title'>Buscar Peliculas</h1>
            <input className='SearchBar__input' placeholder='Buscar...' ref={searchBarDOM}  type='text' id='Buscador' onKeyUp={()=>{eventSearch()}} ></input>
        </div>
    )
}

SearchBar.propTypes = {
    searchFunction : PropTypes.func.isRequired
}

export {SearchBar};