import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = props => (
  <div className="sidebar">
    <ul>
      {props.list &&
        props.list.map((route, index) => (
          <li key={index}>
            <Link to={route.linkTo}>{route.name}</Link>
          </li>
        ))}
    </ul>
  </div>
);

Sidebar.propTypes = {
  list: PropTypes.array,
};

export default Sidebar;
