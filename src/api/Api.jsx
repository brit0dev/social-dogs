import React from 'react';
import UserPost from './endpoints/UserPost';
import TokenPost from './endpoints/UserToken';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

function Api() {
  return (
    <div>
      <h1>Create User</h1>
      <UserPost />

      <h1>User token (Login)</h1>
      <TokenPost />

      <h1>Post Photo</h1>
      <PhotoPost />

      <h1>Photo Get</h1>
      <PhotoGet />
    </div>
  );
}

export default Api;
