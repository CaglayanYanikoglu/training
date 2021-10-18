import React from 'react';
import Sidebar from '../Sidebar'
import Section from './Section'

const ContentWrapper = () => {
  return (
    <div className="container">
      <Sidebar />
      <Section />
    </div>
  );
};

export default ContentWrapper;
