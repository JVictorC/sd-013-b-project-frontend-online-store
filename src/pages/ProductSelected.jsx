import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';

class ProductSelected extends React.Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler() {
    const { onAdd } = this.props;
    const { props: { location: { state } } } = this;
    onAdd(state);
  }

  render() {
    const { props: { location: { state } } } = this;
    const { title, price, thumbnail } = state;
    return (
      <div>
        <ShoppingCartButton />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <img alt="imagem do produto" src={ thumbnail } />
        <p>{`R$ ${price}`}</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addHandler }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductSelected.propTypes = {
  onAdd: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductSelected;
