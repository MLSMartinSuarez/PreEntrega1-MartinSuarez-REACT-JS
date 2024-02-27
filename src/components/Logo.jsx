import { Link } from 'react-router-dom';
import LogoCufa from '../img/logo_cufa.png'

const Logo = () => {
    return(
        <div>
            <Link to={"/"}>
                <img className="logo" src="https://envillabosch.com.ar/images/guiacomercio/logo%20sue%C3%B1os%20angelados%20350.png" alt="McDonalds" />
            </Link>
        </div>
        )
        
        
}

export default Logo;