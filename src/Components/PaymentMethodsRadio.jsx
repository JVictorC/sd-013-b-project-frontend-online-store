import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentMethodsRadio extends Component {
  render() {
    const { id, name, title, children } = this.props;
    return (
      <label htmlFor={ id }>
        <input type="radio" name={ name } id={ id } />
        <div className="colum-display">
          {children}
          <span>{title}</span>
        </div>
      </label>
    );
  }
}

PaymentMethodsRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PaymentMethodsRadio;
