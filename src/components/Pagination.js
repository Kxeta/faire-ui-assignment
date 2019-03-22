import React from 'react';
import { PropTypes } from 'prop-types';

import './Pagination.css';

const Pagination = props => {
  const maxPages = 4;

  const buttonClickHandler = (e, pageAcc) => {
    const { page_number } = props.paginationData;
    e.preventDefault();
    props.onPageChangeHandler(page_number + pageAcc);
  };

  const numberButtonClickHandler = e => {
    e.preventDefault();
    const newPage = e.target.getAttribute('data-page');
    props.onPageChangeHandler(newPage);
  };

  const addBeforePageHelper = (pageList, pageNumber) => {
    if (pageNumber > 1) {
      pageList.push({
        label: 1,
        goToPage: 1,
      });
    }
    if (pageNumber > maxPages / 2 + 2) {
      pageList.push({
        label: '...',
      });
    }
    for (let i = 0; i < maxPages / 2; i++) {
      const beforePageNumber = pageNumber - (maxPages / 2 - i);
      if (beforePageNumber > 1) {
        pageList.push({
          label: beforePageNumber,
          goToPage: beforePageNumber,
        });
      }
    }
  };

  const addAfterPageHelper = (pageList, pageNumber, pageCount) => {
    for (let i = maxPages / 2 - 1; i >= 0; i--) {
      const afterPageNumber = pageNumber + (maxPages / 2 - i);
      if (afterPageNumber < pageCount) {
        pageList.push({
          label: afterPageNumber,
          goToPage: afterPageNumber,
        });
      }
    }
    if (pageNumber < pageCount - (maxPages / 2 + 1)) {
      pageList.push({
        label: '...',
      });
    }
    if (pageNumber < pageCount) {
      pageList.push({
        label: pageCount,
        goToPage: pageCount,
      });
    }
  };

  const pageListNumbers = () => {
    const { page_count, page_number } = props.paginationData;
    const pageList = [];
    addBeforePageHelper(pageList, page_number);

    pageList.push({
      label: page_number,
      actual: true,
    });

    addAfterPageHelper(pageList, page_number, page_count);
    return pageList;
  };

  return !props.paginationData ? null : (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={e => buttonClickHandler(e, -1)}
        disabled={props.paginationData.page_number === 1}
      >
        Back
      </button>
      <ul>
        {pageListNumbers().map((element, index) => (
          <li key={index}>
            {element.goToPage ? (
              <button
                onClick={element.goToPage && numberButtonClickHandler}
                data-page={element.goToPage}
              >
                {element.label}
              </button>
            ) : (
              element.label
            )}
          </li>
        ))}
      </ul>
      <button
        className="pagination-button"
        onClick={e => buttonClickHandler(e, 1)}
        disabled={
          props.paginationData.page_count === props.paginationData.page_number
        }
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  paginationData: PropTypes.object,
  onPageChangeHandler: PropTypes.func,
};

export default Pagination;
