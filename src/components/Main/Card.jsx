import * as S from "./main_style";

function Card({ imagem, texto }) {
  return (
    <S.Card>
      <img src={imagem} alt="img" />
      <h2>{texto}</h2>
      <S.OrangeButton>Clique Aqui</S.OrangeButton>
    </S.Card>
  );
}

export default Card;
