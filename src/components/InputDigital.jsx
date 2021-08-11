import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class InputDigital extends Component {
  render() {
    const { onChange, queryValue, onSubmit } = this.props;
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
          Buscar
        </button>
        <button type="submit">
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
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
}.isRequired;
​
export default InputDigital;
