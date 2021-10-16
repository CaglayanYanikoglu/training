import React from 'react';
import Header from '../../components/Header';
import HeaderMenu from '../../components/HeaderMenu';
import NotificationWrapper from '../../components/NotificationWrapper';
import ContentWrapper from '../../components/ContentWrapper';

const Home = () => {
  return (
    <>
      <Header />
      <HeaderMenu />
      <NotificationWrapper />
      <ContentWrapper />
    </>
  );
};

export default Home;
