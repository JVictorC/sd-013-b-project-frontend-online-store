import React from 'react';

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
