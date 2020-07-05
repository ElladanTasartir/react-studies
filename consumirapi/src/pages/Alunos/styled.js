import styled from 'styled-components';
import { Link } from 'react-router-dom';

import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 30px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  /* Toda div que for seguida de uma div, ou seja, todas as divs do nosso
  AlunoContainer menos a primeira, pois ela não é seguida de outra div, recebem essa borda */
  div + div {
    border-top: 1px solid #eee;
  }

  svg {
    fill: ${colors.primaryColor};
    background: #fff;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

// Para estilizar um componente próprio do react
export const NovoAluno = styled(Link)`
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  border-radius: 4px;
  color: #fff;
  display: block;
  padding: 10px;
`;
