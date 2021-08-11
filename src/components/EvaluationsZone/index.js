import React from 'react';
import PropTypes from 'prop-types';
import Evaluation from '../Evaluation';

class EvaluationsZone extends React.Component {
  constructor() {
    super();

    this.state = {
      evaluations: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getEvaluationsById(id);
  }

  getEvaluationsById = (id) => {
    const evaluationsById = localStorage.getItem('evaluations');
    let parsedEvaluations = JSON.parse(evaluationsById);
    if (evaluationsById === null) {
      parsedEvaluations = [];
    }
    const filteredEvaluations = parsedEvaluations.filter((element) => (
      element.id === id
    ));
    this.setState({
      evaluations: filteredEvaluations,
    });
  }

  render() {
    const { evaluations } = this.state;
    return (
      <div>
        { evaluations.map((element) => (
          <Evaluation
            key={ element.user }
            user={ element.user }
            rating={ element.rating }
            comment={ element.comment }
          />
        ))}
      </div>
    );
  }
}

EvaluationsZone.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EvaluationsZone;
