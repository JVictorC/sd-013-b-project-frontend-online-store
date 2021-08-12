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
      <div>
        <form onChange={ handleChange } className="categories" name="category">
          { categories.map(({ name, id }) => (
            <div key={ id }>
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
        <ProductList products={ products } />
      </div>
    );
  }
}

ListCategories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ListCategories;
