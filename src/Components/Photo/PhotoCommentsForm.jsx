import React from 'react';
import styles from './PhotoCommentsForm.module.css';
import DogCommentIcon from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';

function PhotoCommentsForm({ id, setComments }) {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment('');

      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        value={comment}
        placeholder='Comente...'
        onChange={({ target }) => setComment(target.value)}
      />
      <button>
        <DogCommentIcon />
      </button>
      <Error message={error} />
    </form>
  );
}

export default PhotoCommentsForm;
