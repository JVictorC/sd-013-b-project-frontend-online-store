import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, product: { id, title, thumbmail, price } } = this.props;

    return (
      <div>
        <Link
         data-testid="product-detail-link"
         to={ {
           pathname: `/product/${id}`,
           state: product,
         } }
        >
         <h2>{ title }</h2>
         <img src={ thumbmail } alt="Product Thumbnail" />
         <p>
           {`Preço R$ ${price}`}
         </p>
        </Link>
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
};

export default ProductCard;
