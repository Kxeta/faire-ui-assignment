import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { BreadCrumbs } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CategoryActions from '../actions/category';
import * as MakersActions from '../actions/makers';
import Sidebar from '../components/SideBar';

const defaultCategory = 'All Products';

class FaireContainer extends Component {
  state = {
    actualCategory: null,
    loading: true,
  };

  async componentDidMount() {
    const { actualCategory } = this.props.match.params;
    await this.props.getAllCategories();
    const makers = await this.props.getMakersWithFilters({
      category: actualCategory,
    });
    const products = await this.props.getMakerProducts('b_88a8c067');
    this.setState({
      actualCategory: actualCategory || defaultCategory,
      loading: false,
    });
    console.log(makers);
    console.log(products);
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
    console.log('State: ', this.props);
    return (
      <div className="faire">
        {this.state.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="faire-container">
            <BreadCrumbs actualRoute={this.state.actualCategory} />
            <h1>{this.state.actualCategory}</h1>
            <Sidebar
              list={this.getSidebarCategoryList(this.props.categories)}
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
