import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const { params } = match;
    const { input } = params;
    this.state = {
      input,
      itens: [],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(({ input, itens }) => ({
      itens: [...itens, input],
    }));
  }

  render() {
    const { input, itens } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">{input}</h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.onClick }
        >
          Adicionar ao carrinho
        </button>
        <Link to={ { pathname: '/shop', state: { foo: itens } } }>My route</Link>
      </div>
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
};
export default ProductDetails;
