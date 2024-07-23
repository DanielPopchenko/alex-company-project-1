import React from 'react';
import classes from './ServicesPage.module.css';
import gutterImg from './images/gutter.jpg';
import windowCleaningImg from './images/windowCleaning.jpg';
import pressureWashingImg from './images/pressureWashing.webp';
import newConstructionImg from './images/newConstruction.png';
import screenRepairImg from './images/screenRepair.jpg';
import dryerImg from './images/dryerVentCleaning.jpg';

const ServicesPage = () => {
  return (
    <section className={classes.servicesPageSection}>
      <div className={classes.titleContainer}>
        <div className={classes.backgroundLayer}>
          <h2 className={classes.title}>OUR SERVICES</h2>
        </div>
      </div>

      <div className={classes.content}>
        <ul className={classes.servicesList}>
          <li className={classes.servicesListItem}>
            “GUTTER CLEANING”
            <img src={gutterImg} alt="GUTTER CLEANING image" width={500} height={300} />
          </li>
          <li className={classes.servicesListItem}>
            “WINDOW CLEANING”{' '}
            <img
              src={windowCleaningImg}
              alt="WINDOW CLEANING image"
              width={500}
              height={300}
            />
          </li>
          <li className={classes.servicesListItem}>
            “PRESSURE WASHING”{' '}
            <img
              src={pressureWashingImg}
              alt="PRESSURE WASHING image"
              width={500}
              height={300}
            />
          </li>
          <li className={classes.servicesListItem}>
            “NEW CONSTRUCTION”{' '}
            <img
              src={newConstructionImg}
              alt="NEW CONSTRUCTION image"
              width={500}
              height={300}
            />
          </li>
          <li className={classes.servicesListItem}>
            “SCREEN REPAIR”{' '}
            <img
              src={screenRepairImg}
              alt="SCREEN REPAIR image"
              width={500}
              height={300}
            />
          </li>
          <li className={classes.servicesListItem}>
            “DRYER VENT CLEANING{' '}
            <img
              src={dryerImg}
              alt="DRYER VENT CLEANING image"
              width={500}
              height={300}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServicesPage;
