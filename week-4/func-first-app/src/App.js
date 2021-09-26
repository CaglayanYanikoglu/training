import './App.css';
import React, { useState, useEffect } from 'react';

// TODO: learn hooks
function App() {
  // this.setState({})
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  // componentdidmount
  useEffect(() => {
    console.log('use effect');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
      setPosts(data);
    });
  }, []);

  useEffect(() => {
    setFilteredData(posts);
  }, [posts])

  // depends on counter variable. It observe counter value.
  useEffect(() => {
    console.log('use effect counter changed');
  }, [counter]);

  const handleSearch = event => {
    setSearchWord(event.target.value);
    /* const filteredData = posts.filter(item => item.title.includes(event.target.value));
    setFilteredData(filteredData); */
  }

  useEffect(() => {
    const filteredData = posts.filter(item => item.title.includes(searchWord));
    setFilteredData(filteredData);
  }, [searchWord]);

  return (
    <div className="App">
      <p>Hello Functional Compenent!</p>
      {/* <p> Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button> */}
      <input type="text" value={searchWord} onChange={handleSearch} />
      <div className="posts-container">
        {
          filteredData.map(post => (
            <div key={post.id}>
              <p>ID: {post.id}</p>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
          ))
        }

      </div>
    </div>
  );
}

export default App;
