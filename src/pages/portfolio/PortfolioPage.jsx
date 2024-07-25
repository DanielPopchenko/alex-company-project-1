import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { imagesItems } from './images';
import classes from './Portfolio.module.css';

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
          <a href="https://www.facebook.com/profile.php?id=100072242174679">
            <FaGoogle fill="#4b66bd" fontSize={43} />
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
            {imagesItems.map((item) => (
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
