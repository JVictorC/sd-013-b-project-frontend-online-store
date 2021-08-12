import React from 'react';

class AddCart extends React.Component {
  constructor() {
    super();

    this.state = {
      item: [],
    };

  }

  render() {
    const { item } = this.state;
    return (
      <button
        type="button"
        name="AddToCart"
        data-testid="product-add-to-cart"
        value=""
      >
        Add ao Carrinho
      </button>
    );
  }
}

export default AddCart;
