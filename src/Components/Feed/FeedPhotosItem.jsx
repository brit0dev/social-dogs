import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';

function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo.id);
  }

  return (
    <li className={styles.feedItem} onClick={() => handleClick()}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.views}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotosItem;
