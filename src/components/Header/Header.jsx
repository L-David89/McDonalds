import logo from "../../assets/logo.svg";
import cell1 from "../../assets/cell1.svg";
import cell2 from "../../assets/cell2.svg";
import * as S from "./header_style";

function Header() {
    return (
      <S.Header>
        <img src={logo} alt="" className="logo" />
  
        <section>
          <div className="apl">
            <img src={cell1} alt="" />
            <h3>Baixe o App</h3>
          </div>
          <div className="mequi">
            <h3>Peça seu Méqui</h3>
            <img src={cell2} alt="" />
          </div>
        </section>
      </S.Header>
    );
  }
  
  export default Header;