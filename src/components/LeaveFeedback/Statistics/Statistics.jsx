import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  percentage,
  statisticsTitle,
}) => {
  return (
    <>
      <h2 className={css.title}>{statisticsTitle}</h2>
      <ul className={css.stat}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {percentage}%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  statisticsTitle: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
