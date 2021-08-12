import React from 'react';
import PropTypes from 'prop-types';

export default class BtnSubmitEvaluation extends React.Component {
  render() {
    const { comment, rating, id } = this.props;

    return (
      <button
        id="submit"
        type="submit"
      >
        ENVIAR
      </button>
    );
  }
}

BtnSubmitEvaluation.propTypes = {
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
