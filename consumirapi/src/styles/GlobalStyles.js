import styled, { createGlobalStyle } from 'styled-components';

import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
// estilização do Toastify

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box ;
 }

 body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
 }

 html, body, #root {
     height: 100%;
 }

 button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    font-weight: 700;
    border-radius: 4px;
 }

 a {
    text-decoration: none;
    background: ${colors.primaryColor};
 }

 ul {
    list-style: none;
 }

 /* Para dar override no CSS padrão do toastify  */
 body .Toastify .Toastify__toast-container .Toastify__toast--success {
   background: ${colors.successColor};
 }

 body .Toastify .Toastify__toast-container .Toastify__toast--error {
   background: ${colors.errorColor};
 }

`;
// Todo estilo colocado aqui dentro quando importado globalmente
// afetará toda a aplicação

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
