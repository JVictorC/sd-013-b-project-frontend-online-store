import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';
class ProductSelected extends React.Component {
  render() {
    const { props: { location: { state } } } = this;
    const { title, price, thumbnail } = state;
    return (
      <div>
        <ShoppingCartButton />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{`R$ ${price}`}</p>
        <img alt="imagem do produto" src={ thumbnail } />
      </div>
    );
  }
}
ProductSelected.propTypes = {
  location: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  ).isRequired,
};
export default ProductSelected;
