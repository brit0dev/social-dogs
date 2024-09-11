import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';

function UserProfile() {
  const { user } = useParams();

  return (
    <section className='container feed-section'>
      <Feed user={user} />
    </section>
  );
}

export default UserProfile;
