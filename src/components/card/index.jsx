import PropTypes from 'prop-types';
import ImagenNoEncontrada from '../../assets/imagenNotFound.jpg';
import './index.css'

function Card(props){

    return(

        <button className='card' id={props.id} onClick={()=>{props.onClick(props.id)}}>
            <div className='card__img__container'>
                <img className='card__img' src={props.img && props.img !== "N/A" ? props.img:ImagenNoEncontrada} alt={"Imagen : " + props.id} />
            </div>

            <div className='card__info'>
                <strong><p className='card__info__title'>{props.title}</p></strong>
                <div className='card__info__extra'>
                    {props.infoObject && props.infoObject instanceof Object ? Object.keys(props.infoObject).map((clave,ind)=>{
                        return <p key={ind}>{clave + ":"}{props.infoObject[clave]}</p>
                    }):false}
                </div>
            </div>

        </button>   
    )
}

Card.propTypes = {
    img : PropTypes.string,
    title : PropTypes.string,
    id : PropTypes.string.isRequired,
    infoObject : PropTypes.object,
    onClick:PropTypes.func
}


export {Card}
