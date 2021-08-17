import React from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    const { product: {
      available_quantity: quantity,
      shipping: { free_shipping: shipping },
      id, title: name, thumbnail, price: productPrice } } = this.props;
    this.state = {
      itemId: id,
      title: name,
      image: thumbnail,
      price: productPrice,
      qts: 1,
      amount: productPrice,
      availableQuantity: quantity,
      freeShipping: shipping,
    };
  }

  // ARMAZENA OS PRODUTOS NO LOCAL STORAGE
  handleClick = () => {
    const { onClick } = this.props;
    const { itemId } = this.state;
    let product = [];

    // REFERÊNCIA - https://abre.ai/c9iQ
    // Object.prototype.hasOwnProperty.call - VERIFICA SE JÁ EXISTE A PROPRIEDADE NO LOCAL STORAGE
    if (Object.prototype.hasOwnProperty.call(localStorage, 'product')) {
      product = JSON.parse(localStorage.getItem('product'));
    }

    if (!product.some((element) => element.itemId === itemId)) {
      product.push(this.state);
      localStorage.setItem('product', JSON.stringify(product));
      onClick();
    }
  }

  render() {
    const { testid } = this.props;

    return (
      <div>
        <button
          data-testid={ testid }
          onClick={ this.handleClick }
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
  testid: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default AddToCartButton;
