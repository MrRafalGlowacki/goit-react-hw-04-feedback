import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <div className={css['no-feedaback']}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
