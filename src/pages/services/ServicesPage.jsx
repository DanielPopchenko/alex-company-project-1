import React from 'react';
import classes from './ServicesPage.module.css';
import Services from '../home/services/Services';

const ServicesPage = () => {
  return (
    // <section className={classes.servicesPageSection}>
    //   <div className={classes.titleContainer}>
    //     <div className={classes.backgroundLayer}>
    //       <h2 className={classes.title}>OUR SERVICES</h2>
    //     </div>
    //   </div>

    <div>
      {/* <ul className={classes.servicesList}>
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
        </ul> */}

      {/* <ImageList
          sx={{ maxWidth: 1350, height: 'auto' }}
          variant="woven"
          cols={3}
          gap={14}
        >
          {items.map((item) => (
            <ImageListItem key={item.id}>
              <img
                // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.image}?w=161&fit=crop&auto=format`}
                // alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      <Services />
    </div>
    // </section>
  );
};

export default ServicesPage;
