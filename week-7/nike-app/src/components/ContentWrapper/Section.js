import React, { useState, useEffect } from 'react';
import Card from '../shared/Card';

const Section = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(response => {
      setCharacters(response.results);
    })
  }, []);

  return (
    <div className="section-container">
      {characters.map(character => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  );
};

export default Section;
