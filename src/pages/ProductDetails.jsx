<<<<<<< HEAD
import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class ProductDetails extends Component {

	render() {
    const { products } = this.props;
		return (
			<div>
          teste
        <button 
          type="submit"
       
          >Carrinho de Compras</button>
			</div>
		)
	}
}
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  render() {
    const { productData: { title } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h4>{title}</h4>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productData: PropTypes.objectOf(PropTypes.any),
}.isRequired;
>>>>>>> d7a7dcc5d78245839f96d68d052021f2c8303038
