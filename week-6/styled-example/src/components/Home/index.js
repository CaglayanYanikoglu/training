import React, {useState} from 'react';
import { Wrapper, Button } from './ScHome';

const Home = () => {
  const handleTheme = () => {
    console.log('handleClick');
    if (theme === '#ddd') {
      setTheme('#333');
    } else {
      setTheme('#ddd');
    }
  }
  const [theme, setTheme] = useState('#ddd');
  return (
    <>
      <Wrapper theme={theme}>
        <p>Home</p>
        <span className="home-text">Welcome</span>
        <Button onClick={handleTheme} size="tiny" >Change Theme</Button>
        <Button onClick={handleTheme} size="big" >Change Theme</Button>
        <p>Theme: {theme}</p>
      </Wrapper>
    </>
  )
};

export default Home;
