import React from 'react';
import './home.css'
import Header from '../../components/header/Header';
import HomeMain from '../../components/homemain/HomeMain';
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <Header/>
      <HomeMain/>
      <Footer/>
    </div>
  )
}

export default Home