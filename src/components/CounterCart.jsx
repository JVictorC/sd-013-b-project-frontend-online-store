import React from 'react';
import PropTypes from 'prop-types';

class CounterCart extends React.Component {
  constructor(props) {
    super(props);
    this.getCount = this.getCount.bind(this);
  }

  componentDidUpdate() {
    const { itemQuantity, query } = this.props;
    const count = this.getCount();
    if (count !== 0) {
      localStorage.setItem('itemQuantity', JSON.stringify(itemQuantity));
      localStorage.setItem('query', JSON.stringify(query));
    }
  }

  getCount() {
    const { itemQuantity } = this.props;
    const count = Object.values(itemQuantity);
    if (count.length !== 0) {
      const result = count.reduce((acc, value) => {
        acc += value;
        return acc;
      });
      return result;
    } return 0;
  }

  render() {
    return (
      <p data-testid="shopping-cart-size">{this.getCount()}</p>
    );
  }
}

CounterCart.defaultProps = {
  itemQuantity: {},
};

CounterCart.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
  itemQuantity: PropTypes.objectOf(PropTypes.number),
};

export default CounterCart;
