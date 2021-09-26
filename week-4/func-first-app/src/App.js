import './App.css';
import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import Loading from './components/Loading';

// TODO: learn hooks
function App() {
  // this.setState({})
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(true);
  // componentdidmount
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const id = setTimeout(() => {
      getPosts();
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, []);

  console.log(posts);

  useEffect(() => {
    setFilteredData(posts);
  }, [posts]);

  // depends on counter variable. It observe counter value.
  useEffect(() => {
    console.log('use effect counter changed');
  }, [counter]);

  const handleSearch = (event) => {
    setSearchWord(event.target.value);
    /* const filteredData = posts.filter(item => item.title.includes(event.target.value));
    setFilteredData(filteredData); */
  };

  useEffect(() => {
    const filteredData = posts.filter((item) =>
      item.title.includes(searchWord)
    );
    setFilteredData(filteredData);
  }, [searchWord]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='App'>
      <p>Hello Functional Compenent!</p>
      {/* <p> Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button> */}
      <input type='text' value={searchWord} onChange={handleSearch} />
      <div className='posts-container'>
        {filteredData.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
