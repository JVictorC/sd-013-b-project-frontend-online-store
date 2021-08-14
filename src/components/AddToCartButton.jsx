import React from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    const { product: { title: name, thumbnail, price: productPrice } } = this.props;
    this.state = {
      title: name,
      image: thumbnail,
      price: productPrice,
      qts: 1,
      variablePrice: productPrice,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let product = [];
    let counter = 0;
    const { title } = this.state;

    // REFERÊNCIA - https://abre.ai/c9iQ
    // Object.prototype.hasOwnProperty.call - VERIFICA SE JÁ EXISTE A PROPRIEDADE NO LOCAL STORAGE
    if (Object.prototype.hasOwnProperty.call(localStorage, 'product')) {
      product = JSON.parse(localStorage.getItem('product'));
    }

    product.forEach((element) => {
      if (element.title === title) {
        counter += 1;
      }
    });

    product.push(this.state);
    if (counter === 0) localStorage.setItem('product', JSON.stringify(product));
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
};
export default AddToCartButton;
