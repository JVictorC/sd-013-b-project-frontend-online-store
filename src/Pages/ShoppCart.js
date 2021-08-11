import React from 'react';
import CartProductList from './CartProductList';

class ShoppCart extends React.Component {

  render() {
    return (
      <div>
        <CartProductList />
        <div> sem produtos </div>
      </div>
    );
  }
}

export default ShoppCart;
