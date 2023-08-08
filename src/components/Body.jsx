import LogoValorant from '../assets/img/LogoValorant.svg'
import iconOmen from '../assets/img/omen.svg'
import iconSage from '../assets/img/sage.svg'
import iconSova from '../assets/img/sova.svg'

const Body = () =>{
    return(
        <div id="containerBody">
            <div className="containerChild">
                <div id="containerLeft">
                    <img src={LogoValorant} alt="" />
                    <div id="icons">
                        <div className="iconsBorder"></div>
                        <img src={iconOmen} alt="Omen" />
                        <div id='borderSage' className="iconsBorder"></div>
                        <img src={iconSage} alt="Sage" />
                        <div id='borderSova'className="iconsBorder"></div>
                        <img src={iconSova} alt="Sova" />
                    </div>
                </div>

                <div id="containerRight">

                </div>
            </div>
        </div>
    )
}

export default Body