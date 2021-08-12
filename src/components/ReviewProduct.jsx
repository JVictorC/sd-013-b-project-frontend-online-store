import React, { Component } from 'react'

export default class ReviewProduct extends Component {
	render() {
    const { product: { name, amount, price } } = this.props;
		return (
			<div data-testid="checkout-products">
        <span> { amount } </span>
        <span>TOTAL: {amount*price}</span>
			</div>
		)
	}
}
