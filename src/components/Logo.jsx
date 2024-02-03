import { Link } from 'react-router-dom';
import LogoCufa from '../img/logo_cufa.png'

const Logo = () => {
    return(
        <div>
            <Link to={"/"}>
                <img className="logo" src={LogoCufa} alt="McDonalds" />
            </Link>
        </div>
        )
        
        
}

export default Logo;