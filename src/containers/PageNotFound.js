import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = props => (
  <div className="page-not-found">
    <h2>Ooopss...</h2>
    <h3>I think that this page was already sold...</h3>
    <p>Maybe we can try something else...</p>
    <p>
      Do you want to <Link to="/">START OVER</Link>?
    </p>
  </div>
);

export default PageNotFound;
