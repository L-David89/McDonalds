import React, { useState } from 'react';
import bigmac from "../../assets/bigmac.svg";
import sorvete from "../../assets/sorvete.svg";
import batata from "../../assets/batata.svg";
import sofa from "../../assets/sofa.png";
import loja from "../../assets/loja.png";
import juntos from "../../assets/juntos.png";
import * as S from "./main_style"
import Card from "./Card";


function Main() {
  const [Image, setImage] = useState(bigmac); 

  return (
    <main>
      <S.Section>
        <div className="top-section">
          <div className="bigmac-container"> 
            <img className='bigmac' src={Image} alt="" />
          </div>
          <h1>BATEU AQUELA <span className='red-text'>#FOME</span> DE <span className='red-text'>Méqui</span>?</h1>
        </div>

        <figure>
          <img
            src={bigmac}
            alt=""
            onClick={() => setImage(bigmac)}
          />
          <img
            src={batata}
            alt=""
            onClick={() => setImage(batata)}
          />
          <img
            src={sorvete}
            alt=""
            onClick={() => setImage(sorvete)}
          />
        </figure>
      </S.Section>

    
  

      <S.SecondSection>
      <S.SectionTitle>Promoção</S.SectionTitle>
      <S.CardContainer>
        <Card imagem={sofa} texto={"Que tal um #MéquiNoSofá?"} botao={"Clique Aqui"} />
        <Card imagem={loja} texto={"Venha conhecer nossa nova loja"} botao={"Clique Aqui"} />
        <Card imagem={juntos} texto={"Confira as medidas que o Méqui adotou!"} botao={"Clique Aqui"} />
      </S.CardContainer>
    </S.SecondSection>
  

    </main>
  );
}

export default Main;