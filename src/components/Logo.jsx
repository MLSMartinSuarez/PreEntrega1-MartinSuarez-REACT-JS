import { Link } from 'react-router-dom';
import LogoCufa from '../img/logo_cufa.png'

const Logo = () => {
    return(
        <div>
            <Link to={"/"}>
                <img className="logo" src="https://dcdn.mitiendanube.com/stores/002/976/086/themes/common/logo-191497357-1696531475-4bcba3e5034dc77826011adcb1a7628b1696531476.png?0" alt="logo" />
            </Link>
        </div>
        )
        
        
}

export default Logo;