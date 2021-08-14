import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class InputDigital extends Component {
  render() {
    const { onChange, queryValue, onSubmit, func, cart } = this.props;
    return (
      <form onSubmit={ onSubmit }>
        <input
          data-testid="query-input"
          type="text"
          queryValue={ queryValue }
          onChange={ onChange }
        />
        <button
          data-testid="query-button"
          type="submit"
        >
          Pesquisar
        </button>
        <div className="cart-btn">
          <button
            type="submit"
            onClick={ () => { func(cart); } }
          >
            <Link
              to="/cart"
              data-testid="shopping-cart-button"
            >
              Seu Carrinho de compras
            </Link>
          </button>
        </div>
      </form>
    );
  }
}

InputDigital.propTypes = {
  onChange: PropTypes.func,
  queryValue: PropTypes.string,
  onSubmit: PropTypes.func,
  func: PropTypes.func,
  cart: PropTypes.array,
}.isRequired;

export default InputDigital;
