import React from 'react';

class Lifecycles extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      name: 'Caglayan',
      count: 0,
    };
  }
  componentDidMount() {
    console.log('component did mount');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component did update prevProps', prevProps);
    console.log('component did update prevState', prevState);
    console.log('component did update', this.state);
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps state:', props);
    console.log('getDerivedStateFromProps props:', state);
    return {
      name: 'Hellow',
      count: state.count + 1
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate prevProps', prevProps);
    console.log('getSnapshotBeforeUpdate prevState', prevState);
    return null;
  }
  componentWillUnmount() {
    console.log('component will unmounth');
  }
  increaseCount = () => {
    console.log('increase count', this);
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('render');
    return (
      <>
        <p>Lifecycles</p>
        <p>{this.state.name}</p>
        <p>{this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
      </>
    );
  }
}

export default Lifecycles;