import { Loader } from "../loader";
import './index.css';

function PageLoader(){
    return(
        <div className="PageLoader">
            <Loader/>
        </div>
    )
}

export {PageLoader};