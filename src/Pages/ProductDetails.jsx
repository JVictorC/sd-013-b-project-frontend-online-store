import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { location: { data: { cart } } } = this.props;
    this.state = {
      title: '',
      subtitle: '',
      price: 0,
      thumbnail: '',
      condition: '',
      newCart: cart,
    };
    this.productsRequisition = this.productsRequisition.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.productsRequisition();
  }

  handleClick() {
    const { location: { data: { basicInfo } } } = this.props;
    this.setState(({ newCart }) => ({
      newCart: [...newCart, basicInfo],
    }));
  }

  async productsRequisition() {
    const { match: { params: { id } } } = this.props;
    const requisition = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const response = await requisition.json();
    this.setState({
      title: response.title,
      subtitle: response.subtitle,
      price: response.price,
      thumbnail: response.thumbnail,
      condition: response.condition,
    });
  }

  render() {
    const { title, subtitle, price, thumbnail, condition, newCart } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <h4>{subtitle}</h4>
        <span>{`Preço: R$${price.toFixed(2)}`}</span>
        <img src={ thumbnail } alt="product.png" />
        <p>{`Condição: ${condition}`}</p>
        <button
          type="button"
          onClick={ this.handleClick }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <Link
          to={ {
            pathname: '/shoppingcart',
            data: newCart,
          } }
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
    categoryId: PropTypes.string,
    id: PropTypes.string,
    query: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    data: {
      cart: PropTypes.arrayOf,
    },
  }).isRequired,
};
