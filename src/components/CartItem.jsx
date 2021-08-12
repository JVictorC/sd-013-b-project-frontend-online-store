import React, { Component } from 'react';
import removido from '../img/removido.png';

export default class CartItem extends Component {

  render() {
    return (
      <div>
        <button
          data-testid="product-increase-quantity"
          name="plus"
          type="button"
          // onClick={ (e) => handleCartBtnEvent(e, id) }
        >
          +
        </button>
        <button
          data-testid="product-decrease-quantity"
          name="subtract"
          type="button"
          // onClick={ (e) => handleCartBtnEvent(e, id) }
        >
          -
        </button>

        <img
          src={ removido }
          alt="remove icon"
          name="remove"
          aria-hidden="true"
          // onClick={ (e) => handleCartBtnEvent(e, id) }
        />
        <p>
          Total: R$
          {' '}
        </p>
      </div>
    );
  }
}
