import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';

function UserProfile() {
  const { user } = useParams();

  return (
    <section className='container'>
      <Head title={user} />
      <Feed user={user} />
    </section>
  );
}

export default UserProfile;
