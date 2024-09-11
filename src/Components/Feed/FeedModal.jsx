import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import PhotoContent from '../Photo/PhotoContent';
import Loading from '../Helper/Loading';

function FeedModal({ photoId, setModalPhoto }) {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getPhoto() {
      const { url, options } = PHOTO_GET(photoId);
      await request(url, options);
    }

    getPhoto();
  }, [photoId, request]);

  function handleOutsideClick(event) {
    if (event.currentTarget === event.target) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {data ? (
        <PhotoContent data={data} />
      ) : error ? (
        <Error message={error} />
      ) : (
        loading && <Loading />
      )}
    </div>
  );
}

export default FeedModal;
