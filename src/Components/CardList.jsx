import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class CardList extends Component {

  render() {
    const { productsList } = this.props;
    const mapCart = productsList.map((product) => (<Card
      key={ product.id }
      id={ product.id }
      object={ product }
      title={ product.title }
      thumbnail={ product.thumbnail }
      price={ product.price }
    />));
    return (
      <div className="cardlist">
        { mapCart }
      </div>
    );
  }
}

CardList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
