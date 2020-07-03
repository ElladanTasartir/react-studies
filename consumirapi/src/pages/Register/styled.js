import styled from 'styled-components';

import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-weight: bold;
  }

  input {
    margin-top: 5px;
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    transition: border 200ms;

    &:focus {
      /* O & no styled-components significa o elemento que você está dentro no momento */
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
