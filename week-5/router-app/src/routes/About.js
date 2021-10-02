import React from 'react';
import { useHistory, useLocation, useParams } from "react-router-dom";

const About = () => {
  let history = useHistory();
  // let location = useLocation();

  console.log('history', history);
  // console.log('location', location);

  function handleClick() {
    history.push("/home");
  }
  return (
    <>
      <h2>About Page</h2>
      <button onClick={handleClick}>Go Home</button>
      {history.location.hash === '#newrequest' && <p>Hello new user</p>}
    </>
  )
}

export default About;
