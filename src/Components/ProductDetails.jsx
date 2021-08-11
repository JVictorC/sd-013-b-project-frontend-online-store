import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FormProduct from './FormProduct';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { productDetailsSelect } = this.props;
    this.state = {
      productDetailsSelect,
    };
  }

  render() {
    const { productDetailsSelect } = this.state;
    const { thumbnail, price, title } = productDetailsSelect;
    return (
      // thumbnail= imagem, price = preço, title = nome, installments = especificações
      <div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <p>
          Preço: R$
          {price}
        </p>
        <img src={ thumbnail } alt={ title } />
        <div>
          <Link to="/">Voltar</Link>
          <FormProduct />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productDetailsSelect: PropTypes.objectOf(PropTypes.string).isRequired,
};
