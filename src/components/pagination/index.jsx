
import PropTypes from 'prop-types';
import './index.css'

function Pagination (props){


    const prev = ()=>{
        if(props.pageCurrent > 1){
            props.searchFunction(props.textSearch,props.pageCurrent - 1)
        }

    };

    const next = ()=>{
        props.searchFunction(props.textSearch,props.pageCurrent + 1)
    };


    return(
        <div className='Pagination'>
            {props.pageCurrent > 1 ?  <button className='Pagination__prev' onClick={()=>{prev(false)}}>Anterior</button>:false }
            {props.resultsNumber > (props.pageCurrent * 10) ? <button className='Pagination__next' onClick={()=>{next(true)}}>Siguiente</button> :false}
        </div>
    )
}


Pagination.propTypes = {
    searchFunction : PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
    resultsNumber: PropTypes.number.isRequired,
    pageCurrent: PropTypes.number.isRequired,
    textSearch :  PropTypes.string.isRequired,
}

export {Pagination};