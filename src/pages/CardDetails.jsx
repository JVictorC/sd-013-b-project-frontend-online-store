import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import BtnAddToCart from '../components/BtnAddToCart';

export default class CardDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { categoryId, query } } } = this.props;
    await api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => {
        this.setState({ product: response.results[0] });
      });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, id } = product;
    return (
      <section>
        <div>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <h2>{ `Preço: R$${price}` }</h2>
          <img alt="Product" src={ thumbnail } />
          <BtnAddToCart
            title={ title }
            thumbnail={ thumbnail }
            price={ price }
            id={ id }
            buttonId="product-detail-add-to-cart"
          />
        </div>
        <div>
          <h3>Especificações técnicas:</h3>

        </div>
        <Link to="/">VOLTAR</Link>
        <Link to="/cart">CARRINHO</Link>
      </section>
    );
  }
}

CardDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryId: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
