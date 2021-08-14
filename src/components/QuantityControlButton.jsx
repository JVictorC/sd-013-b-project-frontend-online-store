import React from 'react';
import PropTypes from 'prop-types';

class QuantityControlButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
    const { onClick, title } = this.props;
    onClick(title);
  }

  render() {
    const { testid, symbol } = this.props;
    return (
      <button
        onClick={ this.handleClick }
        data-testid={ testid }
        type="button"
      >
        { symbol }
      </button>
    );
  }
}

QuantityControlButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
export default QuantityControlButton;
