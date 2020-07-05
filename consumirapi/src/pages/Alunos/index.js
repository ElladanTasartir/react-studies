import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { get } from 'lodash';

import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';

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

  const handleDeleteAsk = (e) => {
    e.preventDefault();
    // e.currentTarget retorna o link que clicamos enquanto o target retorna o ícone
    // dessa forma,substituímos o ícone de excluir com um de exclamação
    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id) => {
    e.persist();
    setIsLoading(true);
    try {
      await axios.delete(`/alunos/${id}`);
      // Com isso removemos o pai do elemento clicado
      const novosAlunos = alunos.filter((aluno) => aluno.id !== id);
      setAlunos(novosAlunos);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) toast.error('Você precisa fazer login');
      else toast.error('Ocorreu um erro ao excluir aluno');
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>
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
            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>

            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={(e) => handleDelete(e, aluno.id)}
            />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
