import './App.css';
import React from 'react';
import Card from './Card';

class App extends React.Component{
  constructor() {
    // console.log('constructor')
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      counter: 0,
      searchWord: ''
    }
  }
  componentDidMount() {
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      this.setState({
        posts: data,
        filteredPosts: data
      })
    });
    // only one time call when component is rendered at the beginning
    // when component is rendered
    // Side effect
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('componentDidUpdate')
   /*  console.log('componentDidUpdate prevProps: ', prevProps);
    console.log('componentDidUpdate prevState: ', prevState); */
    // Don't update state because of infinitive loop
    /* this.setState({
      counter: this.state.counter + 1
    }) */
    // when component is updated, it calls componentDidUpdate
  }

  componentWillUnmount() {
    // when component before deleted from dom
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate');
    /* console.log('shouldComponentUpdate nextProps:', nextProps);
    console.log('shouldComponentUpdate nextState:', nextState); */
    // console.log(this.state)
    /* if (nextState.counter === 3) {
      return false;
    } */
    return true;
    // return nextState.counter === 3;
  }

  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps state:');
    // return new state
    return null;
    if (state.counter === 0 ) {
      return null;
    }
    return {
      counter: state.counter + 1,
      posts: [
        {
          id: 3,
          title: 'Title post',
          body: 'body postt'
        }
      ]
    }
    
  }
  
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  deletePost = id => {
    console.log('deletepost id:', id);
    const posts = this.state.posts.filter(post => post.id !== id);
    this.setState({
      posts
    })
  }
  handleSearch = event => {
    const filteredPosts = this.state.posts.filter(post => post.title.includes(event.target.value))
    this.setState({
      searchWord: event.target.value,
      filteredPosts
    })
  }
  render() {
    console.log('App render');
    const filteredData = this.state.posts.filter(post => post.title.includes(this.state.searchWord));
    return (
      <div>
        <p>This counter: {this.state.counter}</p>
        <button onClick={() => {this.setState({counter: this.state.counter + 1})}}>Increase Counter</button>
        <h1 style={{textAlign: 'center'}}>Posts</h1>
        <input type="text" value={this.state.searchWord} onChange={this.handleSearch} />
        {filteredData.map(post => (
          <Card post={post} key={post.id} deletePost={this.deletePost} />
        ))}
        {this.state.filteredPosts.length === 0 && <p>There is no data.</p>}
        {/* <p>Counter: {this.state.counter}</p>
        <button onClick={this.increaseCounter} >Increase Counter</button> */}
        {/* {
          this.state.counter !== 6 && <Card/>
        } */}
        
      </div>
    )
  }

}



export default App;
