import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            {/* O get do lodash, se não houver o valor que ele procura, no caso Fotos[0].url
            Ele retorna um valor default, no caso false, dessa forma, podemos fazer essa ternária
            para caso o valor exista colocamos a imagem do usuário, caso não, colocamos o ícone */}
            <ProfilePicture>
              {get(aluno, 'Photos[0].url', false) ? (
                <img src={aluno.Photos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
