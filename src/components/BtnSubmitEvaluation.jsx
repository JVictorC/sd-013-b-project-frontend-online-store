import React from 'react';

export default class BtnSubmitEvaluation extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { comment, rating, id, email } = this.props;
    const prevsEvaluations = localStorage.getItem('evaluations');
    let evaluations = [];
    if (prevsEvaluations) {
      evaluations = JSON.parse(prevsEvaluations);
    }
    const newEvaluations = [...evaluations, { id, comment, rating, email }];
    localStorage.setItem('evaluations', JSON.stringify(newEvaluations));
  }

  render() {
    return (
      <button
        id="submit"
        type="submit"
        onClick={ this.handleClick }
      >
        Avaliar
      </button>
    );
  }
}
