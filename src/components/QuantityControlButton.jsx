import React from 'react';
import PropTypes from 'prop-types';

class QuantityControlButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
    const { onClick, id } = this.props;
    onClick(id);
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
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};
export default QuantityControlButton;
