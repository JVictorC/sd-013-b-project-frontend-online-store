import React, { Component } from 'react';
import * as api from '../services/api';
import CardProduct from './CardProduct';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      productsFromCategory: [],
      loading: true,
    };
    this.fetchCategories = this.fetchCategories.bind(this);
    this.getCategoryId = this.getCategoryId.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async getCategoryId(event) {
    const filterCategoryId = await
    api.getProductsFromCategoryAndQuery(event.target.value, '');
    //  console.log(event.target.value);
    //  console.log(filterCategoryId.results);
    this.setState({
      loading: false,
      productsFromCategory: filterCategoryId.results,
    });
  }

  async fetchCategories() {
    const fetchApi = await api.getCategories();
    this.setState({
      loading: false,
      categories: fetchApi,
    });
  }

  render() {
    const { categories, loading, productsFromCategory } = this.state;
    if (loading) return <h4>Loading</h4>;
    /* console.log(productsFromCategory); */
    /* console.log(this.props); */
    return (
      <div>
        <form>
          {categories.map(({ id, name }) => (
            <div key={ id }>
              <label htmlFor={ id } data-testid="category">
                <input
                  type="radio"
                  name="category"
                  id={ id }
                  value={ id }
                  onClickCapture={ this.getCategoryId }
                />
                { name }
              </label>
            </div>
          ))}
        </form>
        <div>
          {productsFromCategory.length !== 0 ? productsFromCategory
            .map((product, { id }) => (
              <CardProduct key={ id } products={ product } />
            )) : ''}
        </div>
      </div>
    );
  }
}
