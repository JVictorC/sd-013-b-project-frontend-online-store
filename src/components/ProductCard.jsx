import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
  }

  addHandler() {
    const { product, onAdd } = this.props;
    onAdd(product);
  }

  render() {
    const { product: { title, thumbmail, price } } = this.props;

    return (
      <div>
        <h3>
          { title }
        </h3>
        <img src={ thumbmail } alt={ title } />
        <h4>
          { price }
        </h4>
        <button
          type="button"
          onClick={ this.addHandler }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbmail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default ProductCard;
