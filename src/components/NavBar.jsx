import CartWidget from "./CartWidget";

const NavBar = () => {
    return(

        <div>
            <section>
               
            </section>
            <nav>
                <ul className="NavBar"> 
                    <li> <a className="NavBarLinks" href="">CAMA</a></li>
                    <li> <a className="NavBarLinks" href="">DECO</a></li>
                    <li> <a className="NavBarLinks" href="">BAÑO</a></li>
                    <li> <a className="NavBarLinks" href="">COCINA</a></li>
                <CartWidget />
                </ul>
            </nav>
        </div>

    )
}

export default NavBar;