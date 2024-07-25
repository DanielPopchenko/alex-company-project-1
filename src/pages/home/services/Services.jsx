import React from 'react';
import classes from './Services.module.css';
import Layout from '../../../components/layout/Layout';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <section className={classes.servicesSection} id="services">
      <Layout
        outerDivClasses={classes.background}
        innerDivClasses={classes.backgroundLayer}
      >
        <h2>OUR SERVICES</h2>

        <ServicesList />
      </Layout>
    </section>
  );
};

export default Services;
