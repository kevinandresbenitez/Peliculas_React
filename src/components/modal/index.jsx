import PropTypes from 'prop-types';
import ImagenNoEncontrada from '../../assets/imagenNotFound.jpg';
import { Loader } from '../loader';
import './index.css'

function Modal(props){

    
    if(!props.isLoaded){
        return(
            <div className='DarkScreen'>
                <div className='Modal'>
                    <Loader/>
                </div>
            </div>
        );
    }

    return(
        <div className='DarkScreen'>
            <div className='Modal'>
                    <button className='Modal__close' onClick={()=>{props.onClick()}}>X</button>
                    <div className='Modal__img__container'>
                        <img className='Modal__img' src={props.img !== "N/A" ? props.img: ImagenNoEncontrada} alt={'Poster'+props.id}></img>                    
                    </div>
                   
                    <div className='Modal__info'>
                        <h1 className='Modal__info__title'>{props.title}</h1>
                        <div className='Modal__info__extra'>
                            
                        {props.infoObject && props.infoObject instanceof Object ? Object.keys(props.infoObject).map((clave,ind)=>{
                            return <p key={ind}><strong>{clave + ":"}</strong>{props.infoObject[clave]}</p>
                        }):false}

                        </div>
                    </div>
            </div>
        </div>
    )
}


Modal.propTypes = {
    img : PropTypes.string,
    title : PropTypes.string,
    id : PropTypes.string,
    infoObject : PropTypes.object,
    onClick:PropTypes.func,
    isLoaded:PropTypes.bool.isRequired
}


export {Modal}