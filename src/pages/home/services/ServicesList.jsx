import React from 'react';

import { GiFamilyHouse } from 'react-icons/gi';
import { FaHandsWash } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';
import { MdOutlineFullscreen } from 'react-icons/md';
import { MdConstruction } from 'react-icons/md';
import { PiWashingMachine } from 'react-icons/pi';

const ServicesList = () => {
  return (
    <ul>
      <li>
        <div className="">
          <span>
            <FaHandsWash style={{ fontSize: 70, marginBottom: 25 }} />
          </span>

          <h3>GUTTER CLEANING </h3>
          <p>
            Experience hassle-free gutter cleaning with our professional services tailored
            for residential, commercial, and new construction properties. Our skilled team
            uses advanced equipment and techniques to efficiently remove debris and ensure
            your gutters operate smoothly. Protect your investment and maintain curb
            appeal with our reliable gutter cleaning solutions, backed by options for
            regular maintenance contracts to keep your property in top shape.”
          </p>
        </div>
      </li>
      <li>
        <div className="">
          <span>
            <GiFamilyHouse style={{ fontSize: 70, marginBottom: 25 }} />
          </span>

          <h3>WINDOW CLEANING </h3>
          <p>
            From homes to commercial buildings and new constructions, our professional
            window cleaning services cover it all. With a dedicated team of expert
            technicians equipped with advanced tools and techniques, we guarantee superior
            results every time. Plus, enjoy exclusive discounts on regular window cleaning
            contracts, ensuring your windows receive the care they deserve, consistently.
          </p>
        </div>
      </li>
      <li>
        <div className="">
          <span>
            <MdCleaningServices style={{ fontSize: 70, marginBottom: 25 }} />
          </span>
          <h3>PRESSURE WASHING</h3>
          <p>
            Elevate your property's cleanliness and appeal with our expert pressure
            washing services. Whether for residential, commercial, or new construction
            projects, our skilled technicians use high-quality equipment to effectively
            remove dirt, grime, and stains from various surfaces. Enhance curb appeal and
            prolong the life of your property with our professional pressure washing
            solutions, ensuring exceptional results every time.
          </p>
        </div>
      </li>
      <li>
        <div className="">
          <span>
            <MdConstruction style={{ fontSize: 70, marginBottom: 25 }} />
          </span>
          <h3>NEW CONSTRUCTION</h3>
          <p>
            Transform the look of your new construction with our expert window cleaning
            services. Our skilled team utilizes cutting-edge methods and precision tools
            to ensure every window sparkles with clarity and brilliance. Elevate the
            appearance and finish of your property with our professional touch, delivering
            impeccable results that enhance both aesthetics and functionality.
          </p>
        </div>
      </li>
      <li>
        <div className="">
          <span>
            <MdOutlineFullscreen style={{ fontSize: 70, marginBottom: 25 }} />
          </span>
          <h3>SCREEN REPAIR</h3>
          <p>
            Restore your home or business with our dependable screen repair services. We
            specialize in windows re-screening. Our experienced team provides expert
            repairs using high-quality materials. Enjoy improved functionality and
            aesthetics with our meticulous attention to detail, ensuring your screens are
            as good as new.
          </p>
        </div>
      </li>
      <li>
        <div className="">
          <span>
            <PiWashingMachine style={{ fontSize: 70, marginBottom: 25 }} />
          </span>
          <h3>DRYER VENT CLEANING</h3>
          <p>
            Dryer vent cleaning services involve the thorough removal of lint and debris
            from your dryer's vent system. This process enhances dryer efficiency, reduces
            drying times, and significantly lowers the risk of fires caused by lint
            buildup. Regular cleaning ensures better airflow, prolongs dryer lifespan, and
            promotes a safer home environment.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default ServicesList;
