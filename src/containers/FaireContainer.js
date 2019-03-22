import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { BreadCrumbs } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CategoryActions from '../actions/category';

class FaireContainer extends Component {
  state = {
    filter: null,
    loading: true,
  };

  componentDidMount() {
    const { filter } = this.props.match.params;
    this.setState({
      filter: filter || 'All',
      loading: false,
    });
    this.props.getAllCategories();
  }
  render() {
    console.log('State: ', this.props);
    return (
      <div className="faire">
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="faire-container">
            <BreadCrumbs actualRoute={this.state.filter} />
            <h1>{this.state.filter}</h1>
            <ul>
              {this.props.categories.map((category, index) => (
                <li key={index}>{category.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

FaireContainer.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  categories: PropTypes.array,
  getAllCategories: PropTypes.func,
};

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { getAllCategories: CategoryActions.getAllCategories },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(FaireContainer));
