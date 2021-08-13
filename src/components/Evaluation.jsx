import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluationRating: 0,
      evaluationContent: '',
    };
  }

  onChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  sendEvaluation = () => {
    const { evaluateProduct } = this.props;
    const { evaluationContent, evaluationRating } = this.state;
    evaluateProduct(evaluationContent, evaluationRating);
  }

  render() {
    const { evaluations } = this.props;
    const { evaluationRating } = this.state;
    return (
      <form action="SUBMIT">
        <h2>Avalie esse Produto</h2>
        <div>
          Insira a nota:
          <input
            type="number"
            name="evaluationRating"
            value={ evaluationRating }
            onChange={ this.onChange }
            min="1"
            max="5"
            required
          />
        </div>
        <textarea
          type="text"
          name="evaluationContent"
          data-testid="product-detail-evaluation"
          onChange={ this.onChange }
          placeholder="Na sua opinião, quais prós e contras?"
        />
        <button type="button" onClick={ this.sendEvaluation }>
          Enviar
        </button>
        {evaluations === null ? <div>Seja o primeiro a avaliar esse produto!</div>
          : evaluations.forEach(({ contents, ratings }) => (
            <div key={ contents }>
              <div>{` ${ratings} `}</div>
              <div>{` ${contents} `}</div>
            </div>
          ))}
      </form>
    );
  }
}

Evaluation.propTypes = {
  evaluateProduct: PropTypes.func.isRequired,
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
