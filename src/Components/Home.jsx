import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

function Home() {
  return (
    <section className='container'>
      <Head
        title='Home'
        description='Home do site Social Dogs, com o feed de fotos.'
      />
      <Feed />
    </section>
  );
}

export default Home;
