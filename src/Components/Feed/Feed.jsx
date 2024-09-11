import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(false);
  const [infinite, setInfinite] = React.useState(true);
  const [pages, setPages] = React.useState([1]);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll(event) {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('wheel', infiniteScroll);

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div className='feed-container'>
      {modalPhoto && (
        <FeedModal photoId={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
}

export default Feed;
