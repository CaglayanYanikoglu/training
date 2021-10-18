import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterCharacters } from '../../actions';

const Filter = () => {
  const [filters, setFilters] = useState({
    gender: [],
    type: []
  });
  const dispatch = useDispatch();

  const handleGender = e => {
    const filter = { ...filters };
    if (filters.gender.includes(e.target.value)) {
      filter.gender = filters.gender.filter(item => item !== e.target.value);
    } else {
      filter.gender = [...filters.gender, e.target.value];
    }
    setFilters(filter);
    dispatch(filterCharacters(filter));
  }

  const handleType = e => {
    const filter = { ...filters };
    if (filters.type.includes(e.target.value)) {
      filter.type = filters.type.filter(item => item !== e.target.value);
    } else {
      filter.type = [...filters.type, e.target.value];
    }
    setFilters(filter);
    dispatch(filterCharacters(filter));
  }
  return (
    <>
      <div className="filter-container">
        <div className="filter">
          <p>Cinsiyet</p>
          <div>
            <input id="male" type="checkbox" name="gender" value="male" onChange={handleGender} />
            <label htmlFor="male" >Male</label>
          </div>
          <div>
            <input id="female" type="checkbox" name="gender" value="female" onChange={handleGender} />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="filter">
          <p>Yaşam formu</p>
          <div>
            <input id="human" type="checkbox" name="type" value="human" onChange={handleType} />
            <label htmlFor="human">Human</label>
          </div>
          <div>
            <input id="alien" type="checkbox" name="type" value="alien" onChange={handleType} />
            <label htmlFor="alien">Alien</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
