import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Card from './Card';

class List extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="list-view-container">
        <h1>{this.props.title}</h1>
        {this.props.isFetchingMakers ? (
          <h1>Loading...</h1>
        ) : (
          <Fragment>
            <h6>{`${
              this.props.pagination ? this.props.pagination.total_results : 0
            } results`}</h6>
            <div>
              <div>
                {this.props.list &&
                  this.props.list.map((item, index) => (
                    <Card key={index} item={item} />
                  ))}
              </div>
              );
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.array,
  pagination: PropTypes.object,
  title: PropTypes.string,
};

export default List;
