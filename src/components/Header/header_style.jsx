/** @format */

import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    * {
     margin: 0;
     padding: 0;
     box-sizing:border-box;
     font-family: sans-serif;
 } 
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  margin: 10px 20px; 
  height: 6vh;

  div {
    display: flex;
    align-items: center;
  }

  section {
    display: flex;
  }

  .mequi {
    background-color: yellow;
    border-radius: 15px;
    padding: 10px;
    margin-right: 20px;
  }
  .apl {
    margin-right: 20px;
  }

  .logo {
    margin-left: 20px; 
  }

  h3 {
    font-size: 1rem; 
  }
`;

