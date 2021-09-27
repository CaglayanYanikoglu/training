import React from 'react';
import './post.style.css';

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div
      key={id}
      className='postContainer m-4 p-4 d-flex flex-column align-items-start'
    >
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Body:</strong> {body}
      </p>
    </div>
  );
};

export default Post;
