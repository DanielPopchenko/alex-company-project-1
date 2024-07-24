import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import classes from './Portfolio.module.css';

import image1 from '../../images/portfolio-1.jpg';
import image2 from '../../images/portfolio-2.jpg';
import image3 from '../../images/portfolio-3.jpg';
import image4 from '../../images/portfolio-4.jpg';
import image5 from '../../images/portfolio-5.jpg';

const items = [
  { id: '1image', image: image1, title: 'gutter cleaning image' },
  { id: '2image', image: image2, title: 'just cleaned window image' },
  { id: '3image', image: image3, title: 'clean window image' },
  { id: '4image', image: image4, title: 'dirty window image' },
  { id: '5image', image: image5, title: 'clean windows image' },
];

const PortfolioPage = () => {
  return (
    <section className={classes.portfolioPage}>
      <div className={classes.titleContainer}>
        <div className={classes.backgroundLayer}>
          <h2>PORTFOLIO</h2>
        </div>
      </div>

      <div className={classes.content}>
        <div className={`${classes.iconsContainer} flex`}>
          <a href="https://www.instagram.com/libertyshineservices/?fbclid=IwZXh0bgNhZW0CMTEAAR0e_El-4ggXz4rkkUm8TvNFXrtfXJwm7o4TfUuPRCgo4tvF1pL2SFpgOyE_aem_zxt0HetOGovdE7LI0ctj-Q">
            <FaInstagram fill="#4b66bd" fontSize={43} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100072242174679">
            <FaFacebook fill="#4b66bd" fontSize={43} />
          </a>
        </div>
        <div className={classes.imagesList}>
          <ImageList
            variant="quilted"
            sx={{ width: '100%', minHeight: 500 }}
            gap={8}
            cols={3}
            rowHeight={531}
          >
            {items.map((item) => (
              <ImageListItem key={item.image}>
                <img src={`${item.image}`} alt={item.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
