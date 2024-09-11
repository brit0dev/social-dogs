import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(false);

  return (
    <div className='feed-container'>
      {modalPhoto && (
        <FeedModal photoId={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
    </div>
  );
}

export default Feed;
