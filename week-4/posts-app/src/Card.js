import React from 'react';

class Card extends React.Component {
  /* constructor(props) {
    // console.log('constructor card');
    super(props);
  } */
  componentWillUnmount() {
    // right before removed from dom
    // console.log('Card componentWillUnmount ');
  }

  render() {
    const { post } = this.props;
    console.log('card render');
    return (
      <div key={post.id} className="card-container">
        <p>Id: {post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <button onClick={() => this.props.deletePost(post.id)}>Delete</button>
      </div>
    )
  }
}

export default React.memo(Card);
