import React from 'react';
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eveniet
          saepe, tempore eaque facilis delectus dolore dolores officia nobis, harum
          dolorum velit culpa nesciunt quae veritatis omnis esse ducimus blanditiis.
        </p>
      </div>
    </section>
  );
};

export default PortfolioPage;
