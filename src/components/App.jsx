import React, { useState } from 'react';
import css from './LeaveFeedback/LeaveFeedback.module.css';
import { Statistics } from './LeaveFeedback/Statistics/Statistics';
import { Notification } from './LeaveFeedback/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [goodBtn, setGoodBtn] = useState('Good');
  const [badBtn, setBedBtn] = useState('Bad');

  const handleAddFeedbackGood = () => {
    setGood(good + 1);
  };
  const handleAddFeedbackNeautral = () => {
    setNeutral(neutral + 1);
  };
  const handleAddFeedbackBad = () => {
    setBad(bad + 1);
  };
  const handleGoodBtnChange = () => {
    setGoodBtn(':)');
  };
  const handleGoodBtnChangeBack = () => {
    setGoodBtn('Good');
  };
  const handleBadBtnChange = () => {
    setBedBtn(':(');
  };
  const handleBadBtnChangeBack = () => {
    setBedBtn('Bad');
  };
  const total = good + neutral + bad;
  const percentage = total === 0 ? 0 : (good / total) * 100;
  return (
    <div className={css.container}>
      <h1>{'Please leave feedback'}</h1>
      <ul className={css.list}>
        <li>
          <button
            onMouseOver={handleGoodBtnChange}
            onMouseOut={handleGoodBtnChangeBack}
            onClick={handleAddFeedbackGood}
            className={`${css.good} ${css.btn}`}
          >
            {goodBtn}
          </button>
        </li>
        <li>
          <button
            onClick={handleAddFeedbackNeautral}
            className={`${css.neutral} ${css.btn}`}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            onMouseOver={handleBadBtnChange}
            onMouseOut={handleBadBtnChangeBack}
            onClick={handleAddFeedbackBad}
            className={`${css.bad} ${css.btn}`}
          >
            {badBtn}
          </button>
        </li>
      </ul>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Statistics
          statisticsTitle={'Statistics'}
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          percentage={percentage}
        />
      )}
    </div>
  );
};
