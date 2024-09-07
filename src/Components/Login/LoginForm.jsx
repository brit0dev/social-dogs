import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { Link } from 'react-router-dom';

function LoginForm() {
  const { userLogin, loading, error } = React.useContext(UserContext);

  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    userLogin(username.value, password.value);
  }

  return (
    <section className={styles.container + ' animeLeft'}>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label='Usuário' name='username' {...username} />
        <Input label='Senha' type='password' name='password' {...password} />

        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <Error message={error} />}
      </form>
      <Link className={styles.recoverPass} to='/login/recoverpassword'>
        Esqueci minha senha.
      </Link>
      <div className={styles.signIn}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to='/login/create'>
          Cadastro
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
