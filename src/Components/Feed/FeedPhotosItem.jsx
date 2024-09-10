import React from 'react';
import styles from './FeedPhotosItem.module.css';

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo.id);
  }

  return (
    <li className={styles.feedItem} onClick={() => handleClick()}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
