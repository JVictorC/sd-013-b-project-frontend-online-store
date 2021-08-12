import React, { Component } from 'react'

export default class ReviewProduct extends Component {
	render() {
    const { product: { name, amount, price } } = this.props;
		return (
			<div data-testid="checkout-products">
				<span> { name } - {`R$: ${ price }`} </span>
        <span> { amount } </span>
        <span>TOTAL: {amount*price}</span>
			</div>
		)
	}
}
