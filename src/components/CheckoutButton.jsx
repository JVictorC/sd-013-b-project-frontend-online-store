import React from 'react';
import PropTypes from 'prop-types';

class CheckoutButton extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="button">
        <button
          type="button"
          name="checkout-button"
          onClick={ handleClick }
        >
          Comprar
        </button>
      </div>
    );
  }
}

CheckoutButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CheckoutButton;
