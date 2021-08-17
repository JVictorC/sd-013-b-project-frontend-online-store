import React from 'react';
import PropTypes from 'prop-types';

class EvaluationForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      assessment: 0,
      title: props.title,
    };
  }

  // CAPTURA OS VALORES DOS INPUT
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // ARMAZENA OS DADOS DA AVALIÇÃO NO LOCAL STORAGE
  handleSubmit = (event) => {
    event.preventDefault();
    let evaluation = [];
    // REFERÊNCIA - https://abre.ai/c9iQ
    // Object.prototype.hasOwnProperty.call - VERIFICA SE JÁ EXISTE A PROPRIEDADE NO LOCAL STORAGE
    if (Object.prototype.hasOwnProperty.call(localStorage, 'evaluation')) {
      evaluation = JSON.parse(localStorage.getItem('evaluation'));
    }

    evaluation.push(this.state);
    localStorage.setItem('evaluation', JSON.stringify(evaluation));
  }

  render() {
    return (
      <fieldset>

        <form onSubmit={ this.handleSubmit }>

          <label htmlFor="email">
            <input
              required
              placeholder="Email"
              id="email"
              onChange={ this.handleChange }
              name="email"
              type="email"
            />
          </label>

          <label htmlFor="message">
            <textarea
              placeholder="Mensagem (opcional)"
              data-testid="product-detail-evaluation"
              id="message"
              name="message"
              onChange={ this.handleChange }
            />
          </label>
          1
          <label htmlFor="assessment_1">
            <input
              type="radio"
              id="assessment_1"
              value={ 1 }
              name="assessment"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="assessment_2">
            2
            <input
              type="radio"
              id="assessment_2"
              value={ 2 }
              name="assessment"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="assessment_3">
            3
            <input
              type="radio"
              id="assessment_3"
              value={ 3 }
              name="assessment"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="assessment_4">
            4
            <input
              type="radio"
              id="assessment_4"
              value={ 4 }
              name="assessment"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="assessment_5">
            5
            <input
              type="radio"
              id="assessment_5"
              value={ 5 }
              name="assessment"
              onChange={ this.handleChange }
            />
          </label>
          <button type="submit">Avaliar</button>
        </form>
      </fieldset>
    );
  }
}

EvaluationForms.propTypes = {
  title: PropTypes.string.isRequired,
};
export default EvaluationForms;
