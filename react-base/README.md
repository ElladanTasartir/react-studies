#### Redux

Instalado as dependências necessárias para trabalhar com o Redux: redux e react-redux
``` yarn add redux react-redux  ```
Redux possui um estado inicial: {} -> Pode receber qualquer estado
Estado Inicial: {
  usuario_logado: false
}

Quando for necessário manipular esse estado, é necessário disparar uma ação
-> Dispara uma ação -> Ação vai ser ouvida por um Reducer -> Cria um novo Estado e manipula esse novo estado
No exemplo de usuário logado o que ocorre é:
Preciso mudar o meu usuário logado para true, então disparo uma ação falando que o usuário logou,
o reducer vai ouvir essa ação e criar um novo estado, substituir o antigo e esse novo estado
passa a ser o estado global da aplicação

##### Não é toda aplicação que vai precisar do Redux, somente quando formos precisar de estados globais
Exemplo: Um carrinho de compras em uma aplicação é preciso que seja um estado global, porque ele precisa estar presente em toda aplicação e não só na tela do pedido em que o usuário fez, aquela informação precisa ser exposta à toda a aplicação


#### Redux Saga

O Saga é majoritariamente usado para realizar alterações assíncronas nos estados da aplicação, para disparar essas ações de forma assíncronas com os middlewares do Saga.

Fluxo normal do Redux: Ação -> Reducer escuta a ação -> Reducer decide o que vai fazer -> Retorna newState/state
Fluxo com Saga: Ação (request, faz uma requisição para a ação) -> Saga vai verificar -> Saga chama o Reducer enviando uma ação de sucesso ou falha

#### Redux Persist

Vai persistir os estados na aplicação, mesmo depois do usuário já ter fechado a aplicação, comportamento parecido com localStorage.
O Redux Persist espera os dados declarados no persistor serem salvos antes de renderizar a aplicação React, o que significa que ele permite que a nossa aplicação sempre seja renderizada com os dados que persistimos em mãos, não tendo que primeiro abrir, renderizar, receber os dados e depois renderizar em tela
