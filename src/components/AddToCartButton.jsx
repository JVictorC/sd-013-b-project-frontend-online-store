import React from 'react';

class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    /* this.state = {
      title: props.title,
      image: props.image,
      price: props.price,
      qts: 1,
    }; */

    this.handleClik = this.handleClik.bind(this);
  }

  handleClik() {
    //Salvar produto do local storage
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.handleClik }
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

export default AddToCartButton;
