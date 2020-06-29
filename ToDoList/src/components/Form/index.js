import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Form.css';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  // Props são propriedades que passamos de pai para filho
  // podendo ser resgatadas dentro dos parâmetros do componente

  // O eslint denuncia as props que não possuem validação, por isso
  // instalamos uma dependência chamada prop-types
  return (
    <form onSubmit={handleSubmit} className="form" action="#">
      <input type="text" onChange={handleChange} value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

// Define um valor padrão para props não passadas e que não sejam requeridas
// Por exemplo:
// Form.defaultProps = {
//   novaTarefa: '',
// };

Form.propTypes = {
  // Lembra um pouco as interfaces do typescript
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
