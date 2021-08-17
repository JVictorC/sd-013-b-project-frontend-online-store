import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShippingFree extends Component {
  render() {
    const { products } = this.props;
    const { ...shipping } = products;
    const { ...freeShipping } = shipping;
    return (
      <div data-testid="free-shipping">
        {((Object.keys(freeShipping).values(true)))}
      </div>
    );
  }
}

ShippingFree.propTypes = ({
  products: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}).isRequired;
