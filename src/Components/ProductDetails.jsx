import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      price: 0,
      thumbnail: '',
      condition: '',
    };
    this.productsRequisition = this.productsRequisition.bind(this);
  }

  componentDidMount() {
    this.productsRequisition();
  }

  async productsRequisition() {
    const { match: { params: { id } } } = this.props;
    const requisition = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const response = await requisition.json();
    this.setState({
      title: response.title,
      subtitle: response.subtitle,
      price: response.price,
      thumbnail: response.thumbnail,
      condition: response.condition,
    });
  }

  render() {
    const { title, subtitle, price, thumbnail, condition } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{title}</h2>
        <h4>{subtitle}</h4>
        <span>{`Preço: R$${price.toFixed(2)}`}</span>
        <img src={ thumbnail } alt="product.png" />
        <p>{`Condição: ${condition}`}</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
    categoryId: PropTypes.string,
    id: PropTypes.string,
    query: PropTypes.string,
  }).isRequired,
};
