import React from 'react';
import Nav from './../components/Nav';
import Search from './../components/Search';
import Cocktails from './../components/Cocktails';

const Home = () => {
  return (
    <div className='home-page-container'>
      <Nav />
      <Search />
      <Cocktails />
    </div>
  );
};

export default Home;
