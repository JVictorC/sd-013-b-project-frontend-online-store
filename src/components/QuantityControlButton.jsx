import React from 'react';

class QuantityControlButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = () => {
    const { onClick, title  } = this.props;
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

export default QuantityControlButton;
