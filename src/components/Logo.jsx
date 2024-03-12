import { Link } from 'react-router-dom';
import LogoCufa from '../img/logo_cufa.png'

const Logo = () => {
    return(
        <div className='logoDsp'>
            <div>
                    <img className="logoBienvenidos" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e82c468-a0b9-4ead-8a24-228549c0a6bc/d661vor-50e058e6-87fa-4756-b13a-a32e74363457.png/v1/fill/w_654,h_237/bienvenidos_by_chinitaedicions_d661vor-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjM3IiwicGF0aCI6IlwvZlwvMWU4MmM0NjgtYTBiOS00ZWFkLThhMjQtMjI4NTQ5YzBhNmJjXC9kNjYxdm9yLTUwZTA1OGU2LTg3ZmEtNDc1Ni1iMTNhLWEzMmU3NDM2MzQ1Ny5wbmciLCJ3aWR0aCI6Ijw9NjU0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kC2NbZe97o28UADH3v-4wF3nXRhS5PXGsu5sjfY8ZKM" alt="bienvenidos logo" />
            </div>
            <div>
                <Link to={"/"}>
                    <img className="logoCarmiel" src="https://dcdn.mitiendanube.com/stores/002/976/086/themes/common/logo-191497357-1696531475-4bcba3e5034dc77826011adcb1a7628b1696531476.png?0" alt="logo" />
                </Link>
            </div>
        </div>
        )
        
        
}

export default Logo;