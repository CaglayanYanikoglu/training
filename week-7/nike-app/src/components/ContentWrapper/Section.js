import React from 'react';
import Card from '../shared/Card';
import { useSelector } from 'react-redux';

const Section = () => {
  const characters = useSelector(state => {
    console.log('general state', state);
    return state.filteredData
  });

  return (
    <div className="section-container">
      {characters.map(character => (
        <Card key={character.id} data={character} />
      ))}
    </div>
  );
};

export default Section;
