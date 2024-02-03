import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(

        <div>
            <section>
               
            </section>
            <nav>
                <ul className="NavBar"> 
                    <li> <NavLink className="NavBarLinks" to={"/category/cama"}>CAMA</NavLink></li>
                    <li> <NavLink className="NavBarLinks" to={"/category/deco"}>DECO</NavLink></li>
                    <li> <NavLink className="NavBarLinks" to={"/category/baño"}>BAÑO</NavLink></li>
                    <li> <NavLink className="NavBarLinks" to={"/category/cocina"}>COCINA</NavLink></li>
                <CartWidget />
                </ul>
            </nav>
        </div>

    )
}

export default NavBar;