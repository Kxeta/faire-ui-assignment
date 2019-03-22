import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { BreadCrumbs, Loader } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CategoryActions from '../actions/category';
import * as MakersActions from '../actions/makers';
import { List, Sidebar } from '../components';

const defaultCategory = 'All Products';

class FaireContainer extends Component {
  state = {
    actualCategory: null,
  };

  async componentDidMount() {
    const { actualCategory } = this.props.match.params;
    await this.props.getAllCategories();
    await this.props.getMakersWithFilters({
      category: actualCategory,
      pagination_data: {
        page_size: 60,
      },
    });
    await this.props.getMakerProducts('b_88a8c067');
    this.setState({
      actualCategory: actualCategory || defaultCategory,
    });
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.actualCategory !== this.state.actualCategory) {
      await this.props.getMakersWithFilters({
        category: this.state.actualCategory,
        pagination_data: {
          page_size: 60,
        },
      });
      await this.props.getMakerProducts('b_88a8c067');
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.actualCategory !== prevState.actualCategory) {
      return {
        actualCategory:
          nextProps.match.params.actualCategory || defaultCategory,
      };
    }
    return null;
  }

  onPageChangeHandler = newPage => {
    this.props.getMakersWithFilters({
      category: this.state.actualCategory,
      pagination_data: {
        page_size: 60,
        page_number: newPage,
      },
    });
  };

  getSidebarCategoryList = categoryList =>
    categoryList &&
    categoryList.map((category, index) => ({
      name: category.name,
      key: index,
      linkTo:
        defaultCategory === category.name
          ? '/category'
          : `/category/${category.name}`,
    }));

  render() {
    return (
      <div className="faire">
        {this.props.utils.isFetchingCategories ? (
          <Loader />
        ) : (
          <div className="faire-container">
            <BreadCrumbs actualRoute={this.state.actualCategory} />
            <Sidebar
              list={this.getSidebarCategoryList(this.props.categories)}
            />
            <List
              title={this.state.actualCategory}
              pagination={
                this.props.makers && this.props.makers.pagination_data
              }
              list={this.props.makers && this.props.makers.brands}
              isFetchingMakers={this.props.utils.isFetchingMakers}
              isFetchingMaker={this.props.utils.isFetchingMaker}
              onPageChangeHandler={this.onPageChangeHandler}
            />
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
    {
      getAllCategories: CategoryActions.getAllCategories,
      getMakersWithFilters: MakersActions.getMakersWithFilters,
      getMakerProducts: MakersActions.getMakerProducts,
    },
    dispatch,
  );

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FaireContainer),
);
