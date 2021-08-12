import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      avaliation: '',
      avaliationLocal: [],
    };
    this.addToLocal = this.addToLocal.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getToLocal = this.getToLocal.bind(this);
  }

  componentDidMount() {
    this.getToLocal();
  }

  onChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    const locals = JSON.parse(localStorage.getItem('input'));
    this.setState(({ avaliationLocal, avaliation }) => ({
      avaliationLocal: [...avaliationLocal, avaliation],
    }));
    const { avaliationLocal, avaliation } = this.state;
    if (locals.length === 0) {
      localStorage.setItem('input', JSON.stringify([avaliation]));
      return;
    }
    localStorage.setItem('input', JSON.stringify(avaliationLocal));
  }

  getToLocal() {
    const inputFromLocal = JSON.parse(localStorage.getItem('input'));
    return inputFromLocal;
  }

  addToLocal(product) {
    const localData = JSON.parse(localStorage.getItem('cart'));
    if (localData === null) {
      localStorage.setItem('cart', JSON.stringify([product]));
      return;
    }
    localData.push(product);
    localStorage.setItem('cart', JSON.stringify(localData));
  }

  render() {
    const { match, location } = this.props;
    const { data } = location;
    const { product } = data;
    const { params } = match;
    const { input } = params;
    const { avaliationLocal } = this.state;
    return (
      <>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addToLocal(product) }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/shop" data-testid="shopping-cart-button">
          Ir para o carrinho
        </Link>
        <h1 data-testid="product-detail-name">{input}</h1>
        <form action="">
          <h2>Avaliar</h2>
          Adicione uma avaliação
          <input
            type="text"
            name="avaliation"
            onChange={ this.onChange }
          />
          <div>
            Digite a nota de 1 a 5
            <input
              type="number"
              name="rating"
              required="required"
              onChange={ this.onChange }
            />
          </div>
        </form>
        <button type="button" onClick={ this.onClick }>
          Enviar
        </button>
        {(avaliationLocal.length === 0)
          ? <p> { this.getToLocal() }</p>
          : avaliationLocal.map((element) => (
            <div key={ element }>
              <p>{element}</p>
            </div>
          ))}
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      input: PropTypes.string,
      category: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape(
    {
      data: PropTypes.shape({
        product: PropTypes.objectOf(PropTypes.string),
      }),
    },
  ).isRequired,
};
export default ProductDetails;
