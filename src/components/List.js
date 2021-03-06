import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Card from './Card';
import Pagination from './Pagination';
import Loader from './Loader';

import './List.css';

class List extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="list-view-container">
        <h1>{this.props.title}</h1>
        {this.props.isFetchingMakers ? (
          <Loader />
        ) : (
          <Fragment>
            <h6>{`${
              this.props.pagination ? this.props.pagination.total_results : 0
            } results`}</h6>
            <div className="list-view-content">
              {this.props.list &&
                this.props.list.map((item, index) => (
                  <Card key={index} item={item} />
                ))}
            </div>
            <Pagination
              paginationData={this.props.pagination}
              onPageChangeHandler={this.props.onPageChangeHandler}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array,
  pagination: PropTypes.object,
  onPageChangeHandler: PropTypes.func,
  title: PropTypes.string,
};

export default List;
