import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

function Feed() {
  const [modalPhoto, setModalPhoto] = React.useState(false);

  return (
    <div className='feed-container'>
      {modalPhoto && (
        <FeedModal photoId={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
