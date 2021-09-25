import React from 'react';

class FirstComponent extends React.Component {
  /* constructor(props) {
    super(props);

  } */
  render() {
    console.log('this props', this.props);
    return (
      <>
        <p>First Component Counter: {this.props.counterOfButton}</p>
        <p>Name: {this.props.name}</p>
        <p>lesson is helpful: {
        this.props.lessonIsHelpful ? <p>Yeaah it's</p> : <span>No :(</span>
        }</p>
      </>
    )
  }
}

export default FirstComponent;