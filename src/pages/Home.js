import React from 'react';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import InputDigital from '../components/InputDigital';
import * as api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      queryValue: '',
      productFilter: '',
    };
  }

  handleSubmit = async (element) => {
    element.preventDefault();
    const { queryValue, productFilter } = this.state;
    const data = await api.getProductsFromCategoryAndQuery(productFilter, queryValue);
    this.setState({ data });
  };
​
  handleCategory = (category) => {
    const { queryValue } = this.state;
    api.getProductsFromCategoryAndQuery(category, queryValue)
      .then((data) => {
        this.setState({ productFilter: category, data });
      });
  }
​
  handleSearch = ({ target: { value } }) => {
    this.setState({ queryValue: value });
  }
​
  render() {
    const { queryValue, data: { results } } = this.state;
    return (
      <section>
        <div>
          <Categories setCategory={ this.handleCategory } />
        </div>
        <div>
          <InputDigital
            value={ queryValue }
            onChange={ this.handleSearch }
            onSubmit={ this.handleSubmit }
          />
          <ProductList products={ results } />
        </div>
      </section>
    );
  }
}
​
export default Home;
