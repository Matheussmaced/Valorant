import Logo from '../assets/img/Logo valorant.svg'
import LogoRiot from '../assets/img/Logo riot.svg'
import Share from '../assets/img/share.png'
const Header = () => {
    return(
        
        <div id='containerHeader'>
            <header>
                <img src={Logo} alt="Logo Valorant" />
                <img src={LogoRiot} alt="Logo Riot" />
                <img src={Share} alt="Share icon" />
            </header>
        </div>
    )
}

export default Header
