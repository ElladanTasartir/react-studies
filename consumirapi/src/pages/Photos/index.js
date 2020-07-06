import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Photos({ match }) {
  const id = get(match, 'params.id', '');
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFoto(get(data, 'Photos[0].url', ''));
        setIsLoading(false);
      } catch {
        toast.error('Erro ao obter a imagem');
        setIsLoading(false);
        history.push('/');
      }
    };

    getData();
  }, [id]);

  const handleChange = async (e) => {
    const fotoEnviada = e.target.files[0];
    // função do JS que gera uma url através de um arquivo
    const fotoURL = URL.createObjectURL(fotoEnviada);

    const validarImagem = String(
      fotoEnviada.name.slice(fotoEnviada.name.length - 4)
    );

    if (
      validarImagem !== '.png' &&
      validarImagem !== '.jpg' &&
      validarImagem !== 'jpeg'
    ) {
      toast.error('As imagens precisam ser do tipo jpg ou png');
      return;
    }

    setFoto(fotoURL);

    // Para enviar arquivos, a melhor maneira é através de Form Data
    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('photo', fotoEnviada);

    try {
      setIsLoading(true);
      await axios.post('/photos/', formData, {
        headers: {
          // Para reconhcer que o arquivo enviado é de fato, form data
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Foto enviada com sucesso');
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      const { status } = get(err, 'response', '');
      toast.error('Erro ao enviar foto');

      if (status === 401) {
        dispatch(actions.loginFailure);
      }
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}

Photos.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
