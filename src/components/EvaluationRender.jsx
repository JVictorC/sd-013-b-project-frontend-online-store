import React from 'react';
import EvaluationCard from './EvaluationCard';
import EmptyEvaluation from './EmptyEvaluation';

export default class EvaluationRender extends React.Component {
  render() {
    const { id } = this.props;
    const match = JSON.parse(localStorage.getItem('evaluations'))
      .filter((evaluation) => evaluation.id === id);
    return (
      <section>
        <div>
          { (match.length !== 0)
            ? (match.map((evaluation) => {
              const { email, comment, rating } = evaluation;
              const key = (Math.random() * 0xfffff * 1000000).toString(16);
              return (
                <EvaluationCard
                  key={ key }
                  email={ email }
                  comment={ comment }
                  rating={ rating }
                />
              );
            }))
            : <EmptyEvaluation /> }
        </div>
      </section>
    );
  }
}
