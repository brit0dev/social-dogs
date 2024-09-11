import React from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

function UserPhotoPost() {
  const navigate = useNavigate();
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { error, loading, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    if (peso.validate() && idade.validate() && nome.validate()) {
      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_POST(token, formData);
      request(url, options).then((response) => {
        if (response.response.ok) navigate('/conta');
      });
    }
  }
  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Poste sua foto' />

      <form onSubmit={handleSubmit}>
        <Input label='Nome' name='nome' {...nome} />
        <Input label='Peso' name='peso' type='text' {...peso} />
        <Input label='Idade' name='idade' type='text' {...idade} />
        <input
          className={styles.file}
          type='file'
          name='img'
          id='img'
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      <Error message={error} />
      {img.preview && (
        <div
          className={styles.preview}
          style={{ backgroundImage: `url(${img.preview})` }}
        ></div>
      )}
    </section>
  );
}

export default UserPhotoPost;
