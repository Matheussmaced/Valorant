import Logo from '../assets/img/iconValorant.svg'
import LogoRiot from '../assets/img/LogoRiot.svg'
import Share from '../assets/img/share.png'
const Header = () => {
    return(
        
        <div id='containerHeader'>
            <header>
                <img src={Logo} alt="Logo Valorant" />
                <img src={LogoRiot} alt="Logo Riot" />
                <img id='share' src={Share} alt="Share icon" />
            </header>
        </div>
    )
}

export default Header
