import React from 'react';
import PropTypes from 'prop-types';

export default class EvaluationCard extends React.Component {
  render() {
    const { email, comment, rating } = this.props;
    return (
      <div>
        <h5>{ email }</h5>
        <p>{ comment }</p>
        <p>{ rating }</p>
      </div>
    );
  }
}

EvaluationCard.propTypes = {
  email: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};
