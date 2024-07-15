import React from 'react';
import classes from './WhoWeAre.module.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { FaRegListAlt } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';

const WhoWeAre = () => {
  return (
    <section className={`${classes.whoWeAreSection}`}>
      <div className={`${classes.container}`}>
        <div className={`${classes.iconsContainer} flex`}>
          <a href="#!">
            <FaInstagram fill="#4b66bd" fontSize={43} />
          </a>
          <a href="#!">
            <FaFacebook fill="#4b66bd" fontSize={43} />
          </a>
        </div>

        <div className={classes.content}>
          <h2>WHO WE ARE</h2>
          <div className={classes.contentText}>
            <h3>
              At "MYCOMPANY" Cleaning, window cleaning is our specialty. It's our main
              service (and we do it extensively) and we excel at it. Window cleaning is an
              art that each of our technicians has been meticulously trained in. We
              deliver the stunning sparkle of clean windows that brightens your home with
              sunlight. We bring the light in.
            </h3>
          </div>

          <div className={classes.contentBlocks}>
            <ul className={classes.contentBlocksList}>
              <li className={classes.blocksListItem}>
                <IoCheckmarkDoneSharp fontSize={50} style={{ marginBottom: 30 }} />
                We are fully insured to protect both our team and your property. Our
                comprehensive insurance coverage guarantees financial protection in the
                rare event of any unforeseen incidents during our services, ensuring
                complete peace of mind for our valued customers.
              </li>
              <li className={classes.blocksListItem}>
                <FaRegListAlt fontSize={50} style={{ marginBottom: 30 }} />
                Our team consists of home o busin SS IS In professional technicians who
                good hand have undergone rigorous background checks. You can trust that
                our staff is reliable, trustworthy, and committed to delivering
                exceptional service with
              </li>
              <li className={classes.blocksListItem}>
                <FaLeaf fontSize={50} fill="green" style={{ marginBottom: 30 }} />
                We offer eco-friendly options to prioritize sustainability and your
                well-being. Our environmentally conscious solutions ensure a clean,
                healthy environment without compromising on effectiveness.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
