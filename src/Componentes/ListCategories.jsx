import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';

class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  async handleClick(event) {
    const id = event.target.value;
    const object = await getProductsFromCategoryAndQuery(id, null);
    const products = object.results;
    this.setState({
      products,
    });
  }

  requestApi = async () => {
    const apiResponse = await getCategories();
    this.setState({
      categories: apiResponse,
    });
  }

  render() {
    const { categories, products } = this.state;
    const { handleChange } = this.props;
    return (
      <div className="ListCategories">
        <form onChange={ handleChange } name="category" className="category">
          { categories.map(({ name, id }) => (
            <div key={ id } className="categories">
              <label htmlFor={ id }>
                <input
                  type="checkbox"
                  key={ id }
                  data-testid="category"
                  value={ id }
                  onClick={ this.handleClick }
                />
                { name }
              </label>
            </div>
          )) }
        </form>
        <div className="ProductList">
          <ProductList products={ products } />
        </div>
      </div>
    );
  }
}

ListCategories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ListCategories;
