import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const BreadCrumbs = props => (
  <div className="breadcrumbs">
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      {props.breadcrumbsRoutes &&
        props.breadcrumbsRoutes.map((route, index) => (
          <li key={index}>
            <Link to={route.link}>{route.name}</Link>
          </li>
        ))}
      <li>{props.actualRoute}</li>
    </ul>
  </div>
);

BreadCrumbs.propTypes = {
  breadcrumbsRoutes: PropTypes.array,
  actualRoute: PropTypes.string,
};

export default BreadCrumbs;
