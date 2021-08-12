import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartButton extends React.Component {
  render() {
    return (
      <Link to="/cart" data-testid="shopping-cart-button">
        <div className="btn-cart">
          <i className="fas fa-shopping-cart" />
        </div>
      </Link>
    );
  }
}

export default ShoppingCartButton;
