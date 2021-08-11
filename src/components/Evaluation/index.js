import React from 'react';
import PropTypes from 'prop-types';

class Evaluation extends React.Component {
  render() {
    let { user, comment } = this.props;
    const { rating } = this.props;
    if (user === '') {
      user = 'Anônimo';
    }
    if (comment === '') {
      comment = 'Usuário não teceu comentários';
    }
    return (
      <div>
        Usuário:
        { user }
        Avaliação:
        { rating }
        Comentário:
        { comment }
      </div>
    );
  }
}

Evaluation.propTypes = {
  user: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Evaluation;
