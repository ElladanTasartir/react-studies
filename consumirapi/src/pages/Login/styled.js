import styled from 'styled-components';

export const Title = styled.h1`
  background: green; /* O código fora de brackets é do próprio Title
  E o código digitado dentro pode ser para características de
  componentes filhos do Title, assim como poderíamos
  criar um componente próprio pra ele */

  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  font-size: 80px;
`;
// Só declaramos um estilo vazio, ele recebe as características
// Padrões daquela tag, se for um p, ele funcionará como um p normal
