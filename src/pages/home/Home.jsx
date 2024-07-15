import React from 'react';
import classes from './Home.module.css';
import MySlider from '../../ui/slider/Slider';
import WhoWeAre from './whoWeAre/WhoWeAre';
import Layout from '../../components/layout/Layout';
import Services from './services/Services';
import ContactUsForm from '../../components/contactUsForm/ContactUsForm';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      {/* Home section */}
      <Layout
        innerDivClasses={classes.backgroundLayer}
        outerDivClasses={classes.background}
      >
        <section className={classes.sectionInner}>
          <div className={classes.sectionContent}>
            <MySlider />
            <div className={`flex j-center ${classes.buttonsContainer}`}>
              <button className={`${classes.button} ${classes.buttonPrimary}`}>
                GET A FREE QUOTE
              </button>
              <button className={classes.button}>GIVE US A FREE CALL</button>
            </div>
          </div>
        </section>
      </Layout>

      {/* Who we are */}
      <WhoWeAre />

      {/* Services */}
      <Services />

      {/* Contact us form */}
      <ContactUsForm />

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
