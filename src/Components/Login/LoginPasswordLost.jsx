import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST_POST } from '../../api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

function LoginPasswordLost() {
  const login = useForm();
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST_POST({
        login: login.value,
        url: window.location.href.replace('recoverpassword', 'resetpassword'),
      });

      await request(url, options);
    }
  }
  return (
    <section className='animeLeft'>
      <Head title='Recuperação de senha' />
      <h1 className='title'>Recuperação de senha</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>Email enviado.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label='Email / Usuário' type='text' name='email' {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error message={error} />
    </section>
  );
}

export default LoginPasswordLost;
