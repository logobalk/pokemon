import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const View = (props) => {
  const { children } = props;
  const divProps = { ...props };
  return (
    <div style={{ padding: '1em' }} {...divProps}>
      {children}
    </div>
  );
};

View.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

View.defaultProps = {
  children: null,
};

export default View;
