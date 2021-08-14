import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import InputDigital from '../components/InputDigital';
import * as api from '../services/api';
import '../App.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      queryValue: '',
      productFilter: '',
      product: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  handleSubmit = async (element) => {
    element.preventDefault();
    const { queryValue, productFilter } = this.state;
    const data = await api.getProductsFromCategoryAndQuery(productFilter, queryValue);
    this.setState({ data });
  };

  handleCategory = (category) => {
    const { queryValue } = this.state;
    api.getProductsFromCategoryAndQuery(category, queryValue)
      .then((data) => {
        this.setState({ productFilter: category, data });
      });
  }

  handleSearch = ({ target: { value } }) => {
    this.setState({ queryValue: value });
  }

  addToCart(obj) {
    const { product } = this.state;
    const box = [...product];
    const objNovo = { ...obj, quantidade: 1, valueTotal: obj.price };
    if (product.length === 0) {
      box.push(objNovo);
      this.setState({ product: box });
    } else {
      const resultado = box.find(({ id }) => id === obj.id);
      box.forEach((elemento) => {
        if (resultado === elemento) {
          elemento.quantidade += 1;
          elemento.valueTotal = elemento.price * elemento.quantidade;
          this.setState({
            product: box,
          });
        } else {
          const box2 = [...product];
          box2.push(objNovo);
          this.setState({
            product: box2,
          });
        }
      });
    }
  }

  render() {
    const { queryValue, data: { results }, product } = this.state;
    const { func } = this.props;
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
            cart={ product }
            func={ func }
          />
          <ProductList onClick={ this.addToCart } products={ results } />
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  func: PropTypes.func,
}.isRequired;

export default Home;
