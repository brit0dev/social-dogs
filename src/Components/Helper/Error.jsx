import styles from './Error.module.css';

function Error({ message }) {
  if (!message) return null;
  return <p className={styles.error}>{message}</p>;
}

export default Error;
