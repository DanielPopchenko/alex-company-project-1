import React from 'react';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFoundPage';
import Portfolio from './pages/portfolio/PortfolioPage';
import Questions from './pages/questions/QuestionsPage';
import Reviews from './pages/reviews/ReviewsPage';
import Services from './pages/home/services/Services';

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
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<NotFound />} /> // ! Styles
      </Routes>
    </>
  );
};

export default App;
