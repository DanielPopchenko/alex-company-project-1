import React from 'react';
import classes from './Questions.module.css';
import AccordionElement from '../../ui/accrdion/Accordion';

const QuestionsPage = () => {
  return (
    <section className={classes.questionsPage}>
      <div className={classes.titleContainer}>
        <div className={classes.backgroundLayer}>
          <h2>FAQ’S</h2>
        </div>
      </div>

      <div className={classes.content}>
        <AccordionElement />
      </div>
    </section>
  );
};

export default QuestionsPage;
