import React from 'react';
import PropTypes from 'prop-types';

class BackButton extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    return (
      <button
        type="button"
        className="back-button"
        onClick={ this.goBack }
      >
        Voltar
      </button>
    );
  }
}

BackButton.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BackButton;
