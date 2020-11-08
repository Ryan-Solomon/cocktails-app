import React from 'react';
import Search from './../components/Search';
import Cocktails from './../components/Cocktails';

const Home = () => {
  return (
    <div className='home-page-container'>
      <Search />
      <Cocktails />
    </div>
  );
};

export default Home;
