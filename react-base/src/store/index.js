import { createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

// Ação é disparada, o reducer escuta a ação e retorna novo estado
// Podemos inicializar o nosso estado da aplicação com um estado inicial dessa forma no Redux
const reducer = (state = initialState, action) => {
  // Sempre é necessário retornar ou o estado atual ou um novo estado, mas é necessário retornar um estado
  // Configuração mais simples do redux possível
  // O Reducer ouve todas as ações disparadas na aplicação
  // Quando o reducer identificar a ação disparada, pode se filtrar com um switch
  // LEMBRETE: NUNCA ALTERA-SE DIRETAMENTE UM ESTADO NO REACT
  // Apenas copia-se os dados e retorna em um novo estado
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      // Realiza um toggle no botão
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
};

// Recebe um reducer
const store = createStore(reducer);

export default store;
