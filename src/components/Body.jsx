import LogoValorant from '../assets/img/logoValorant.svg'
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
                        <div id="omen">
                            <div id='borderOmen' className="iconsBorder"></div>
                            <img className='icons' src={iconOmen} alt="Omen" />
                            <p>Omen</p>
                        </div>
                        <div id="sage">
                            <div id='borderSage' className="iconsBorder"></div>
                            <img className='icons' src={iconSage} alt="Sage" />
                            <p>Sage</p>
                        </div>
                        <div id="Sova">
                            <div id='borderSova'className="iconsBorder"></div>
                            <img className='icons' src={iconSova} alt="Sova" />
                            <p>Sova</p>
                        </div>
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