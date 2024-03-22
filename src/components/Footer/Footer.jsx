import logo2 from "../../assets/logo2.png"
import play from "../../assets/play.png"
import app from "../../assets/app.png"
import * as S from "./footer_style"


function Footer() {
    return (
      <S.Footer>
        <img src={logo2} alt="" className="logo2" />
        <p>© McDonald’s 2024</p>
  
        <section>
          <div className="store">
            <img src={play} alt="" /> 
          </div>
          <div className="apple">
            
            <img src={app} alt="" />
          </div>
        </section>
      </S.Footer>
    );
  }
  
  export default Footer;