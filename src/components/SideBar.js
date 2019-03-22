import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { defaultCategory } from '../constants/utils';

import './Sidebar.css';

const Sidebar = props => {
  const isActualCategory = name => {
    const { actualCategory } = props.match.params;
    if (actualCategory && actualCategory === name) {
      return true;
    } else if (!actualCategory && name === defaultCategory) {
      return true;
    }
    return false;
  };
  return (
    <div className="sidebar">
      <ul>
        {props.list &&
          props.list.map((route, index) => (
            <li
              key={index}
              className={isActualCategory(route.name) ? 'actual-category' : ''}
            >
              {isActualCategory(route.name) ? (
                route.name
              ) : (
                <Link to={route.linkTo}>{route.name}</Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  list: PropTypes.array,
};

export default withRouter(Sidebar);
