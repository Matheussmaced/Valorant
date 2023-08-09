import LogoValorant from '../assets/img/LogoValorant.svg'
import iconOmen from '../assets/img/omen.svg'
import iconSage from '../assets/img/sage.svg'
import iconSova from '../assets/img/sova.svg'
import Jett from '../assets/img/Jett.png'

const Body = () =>{
    return(
        <div id="containerBody">
            <div className="containerChild">
                <div id="containerLeft">
                    <img id='logoValorant' src={LogoValorant} alt="Logo Valorant" />
                    <div id="icons">
                        <div id='borderOmen' className="iconsBorder"></div>
                        <img className='icons' src={iconOmen} alt="Omen" />
                        <div id='borderSage' className="iconsBorder"></div>
                        <img className='icons' src={iconSage} alt="Sage" />
                        <div id='borderSova'className="iconsBorder"></div>
                        <img className='icons' src={iconSova} alt="Sova" />
                    </div>
                </div>

                <div id="containerRight">
                        <img id='jett' src={Jett} alt="Jett" />
                </div>
            </div>
        </div>
    )
}

export default Body