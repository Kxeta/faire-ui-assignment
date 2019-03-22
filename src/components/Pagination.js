import React from 'react';
import { PropTypes } from 'prop-types';

const Pagination = props => {
  const maxPages = 4;
  const buttonClickHandler = (e, pageAcc) => {
    const { page_number } = props.pagination_data;
    e.preventDefault();
    props.onPageChangeHandler(page_number + pageAcc);
  };
  const pageListNumbers = () => {
    const { page_count, page_number } = props.pagination_data;
    const pageList = [];
    if (page_number > maxPages) {
      pageList.push({
        label: '&hellip;',
      });
    }
  };
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={e => buttonClickHandler(e, -1)}
      >
        Back
      </button>
      <ul>
        {props.breadcrumbsRoutes &&
          props.breadcrumbsRoutes.map((route, index) => <li key={index} />)}
        <li>{props.actualRoute}</li>
      </ul>
      <button
        className="pagination-button"
        onClick={e => buttonClickHandler(e, 1)}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  pagination_data: PropTypes.object,
  onPageChangeHandler: PropTypes.func,
};

export default Pagination;
