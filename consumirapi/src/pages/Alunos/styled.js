import styled from 'styled-components';

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
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
