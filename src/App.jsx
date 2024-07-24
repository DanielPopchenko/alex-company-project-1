import React from 'react';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFoundPage';
import Portfolio from './pages/portfolio/PortfolioPage';
import Questions from './pages/questions/QuestionsPage';
import Reviews from './pages/reviews/ReviewsPage';
import ServicesPage from './pages/services/ServicesPage';
import Footer from './components/footer/Footer';
import PagesLayout from './pages/pagesLayout/PagesLayout';

// ! company name --- no
// ! tel number --- no
// ! comapny adress --- no

const App = () => {
  return (
    <>
      {/* HEADER */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="questions" element={<Questions />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} /> // ! Styles
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
