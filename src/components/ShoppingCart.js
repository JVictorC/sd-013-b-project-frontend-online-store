import React from 'react';
import PropTypes from 'prop-types';

import ShoppingCartIcon from './ShoppingCartIcon';
// import { prettyDOM } from '@testing-library/dom';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state } } = this.props;

    const quant = state.reduce((ac, corr) => {
      const arry = ac;
      if (corr.id in ac) {
        corr.quantity += 1;
      } else {
        corr.quantity = 1;
      }
      arry.push(corr);
      return arry;
    }, []);

    return (
      <div>
        <ShoppingCartIcon />
        { state.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : quant.map(({ id, title, thumbnail, quantity }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ title } />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
            </div>
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
};

export default ShoppingCart;
