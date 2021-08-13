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
          Buscar-group-15
        </button>
        <button 
          type="submit"
          onClick={ () => { func(cart) }  }
        >
          <Link data-testid="shopping-cart-button" to="/cart">
            Seu Carrinho de compras
          </Link>
        </button>
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
