import React from 'react';
import PropTypes from 'prop-types';

class CounterCart extends React.Component {
  componentDidUpdate() {
    const { query } = this.props;
    if (query !== '') {
      localStorage.setItem('count', JSON.stringify(query));
    }
  }

  render() {
    const { query } = this.props;
    return (
      <p data-testid="shopping-cart-size">{query.length}</p>
    );
  }
}

CounterCart.propTypes = {
  query: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]).isRequired,
};

export default CounterCart;
