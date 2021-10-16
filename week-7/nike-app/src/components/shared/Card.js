import React from 'react';

const Card = ({
  data
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={data.image} height="auto" width="300" />
      </div>
      <div className="img-content">
        <p className="name">{data.name}</p>
        <p className="species">{data.species}</p>
        <p className="gender">{data.gender}</p>
        <p className="status">Status: {data.status}</p>
      </div>
    </div>
  );
};

export default Card;
