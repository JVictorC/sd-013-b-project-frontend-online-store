import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardItems extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div data-testid="product">
        <h4>{ item.title }</h4>
        <img src={ item.thumbnail } alt={ item.title } />
        <p>
          { item.price }
        </p>
        <Link
          to={ { pathname: `/product/${item.id}`, item } }
          data-testid="product-detail-link"
        >
          Details
        </Link>
      </div>
    );
  }
}

CardItems.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  })),
};

CardItems.defaultProps = {
  item: [],
};
