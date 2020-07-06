import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    background: #eee;
    border: 4px dashed ${colors.primaryColor};
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }

  input {
    display: none;
  }
`;
