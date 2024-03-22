/** @format */

import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center; 
  height: 90vh;
  margin-top: 5vh;
  background-color: #ffc72c;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 10vh; 
  }

  img {
    width: 10%; 
    margin-right: 2vw; 
  }

  .bigmac-container {
    width: 230px; 
    height: 230px; 
    overflow: hidden; 
    margin-left: -160px;
   
    
  }

  .bigmac {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    
  }

  h1 {
    color: white;
    font-size: 3em; 
    margin-top: 0;
    margin-left: 20vw; 
    text-align: center; 
    max-width: 40%; 
    word-wrap: break-word;
  }

  .red-text {
    color: red;
  }

  figure {
    display: flex;
    gap: 2vw; 
    justify-content: center; 
  }
`;


export const SecondSection = styled.section`
  background-color: ${(props) => props.backgroundColor || '#FEB706'};
  height: 80vh;
  padding-top: 40px; 
`;

export const CardContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 30px; 
  text-align: center;
`;

export const Card = styled.div`
  width: 280px;
  height: 50vh;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center;
`;

export const SectionTitle = styled.h2`
  color: white; 
  text-align: center; 
  margin-left: 20px; 
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardText = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-size: 0.9em; 
  padding: 0 10px; 

`;

export const OrangeButton = styled.button`
  background-color: orange;
  color: white;
  border: none;
  border-radius: 10px; 
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 30px; 
`;

