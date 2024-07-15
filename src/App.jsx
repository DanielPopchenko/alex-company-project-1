import React from 'react';
import classes from './App.module.css';
import Header from './components/header/Header';
import MySlider from './ui/slider/Slider';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

// ! company name --- no
// ! tel number --- no
// ! comapny adress --- no

const App = () => {
  return (
    <>
      {/* HEADER */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> // ! Styles
      </Routes>
    </>
  );
};

export default App;
