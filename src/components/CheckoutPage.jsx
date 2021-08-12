import React from 'react';
import BuyerInfo from './BuyerInfo';
import Payment from './ Payment';

export default class CheckoutPage extends React.Component {
  render() {
    const { shoppingCart } = this.props;
    return (

      <BuyerInfo />
      <Payment />
    )
  }
}