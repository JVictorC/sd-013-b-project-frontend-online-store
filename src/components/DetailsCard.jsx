import React from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from './AddToCartButton';

class DetailsCard extends React.Component {
  render() {
    const { product, onClick } = this.props;

    return (
      <div
        className="detail-specs-card"
      >
        <h6>{`${product.condition} | ${product.sold_quantity} vendidos`}</h6>

        { product.original_price && <h4>{ `R$ ${product.original_price}` }</h4>}

        <h2>{ `R$ ${product.price}` }</h2>

        { product.attributes.map((attribute) => {
          const attributes = `${attribute.name}: ${attribute.value_name}`;
          return (
            <li key={ attribute.id }>
              {attributes}
            </li>
          );
        }) }

        <AddToCartButton
          title={ product.title }
          image={ product.image }
          price={ product.price }
          onClick={ onClick }
        />
      </div>
    );
  }
}

DetailsCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailsCard;
