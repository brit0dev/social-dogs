import React from 'react';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import { PASSWORD_RESET_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';

function LoginPasswordReset() {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const { error, loading, request } = useFetch();
  const password = useForm();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET_POST({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <div>
      <h1 className='title'>Resetar a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input type='password' name='password' {...password} />
        {loading ? (
          <Button disabled>Mudando a senha...</Button>
        ) : (
          <Button>Mudar senha</Button>
        )}
      </form>
      <Error message={error} />
    </div>
  );
}

export default LoginPasswordReset;
