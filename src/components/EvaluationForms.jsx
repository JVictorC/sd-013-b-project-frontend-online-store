import React from 'react';

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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick = (event) => {
    event.preventDefault();
    /* const { title } = this.props; */
    let evaluation = [];
    /* let counter = 0; */

    if (Object.prototype.hasOwnProperty.call(localStorage, 'evaluation')) {
      evaluation = JSON.parse(localStorage.getItem('evaluation'));
    }

    /* evaluation.forEach((element) => {
      if (element.title === title) {
        counter += 1;
      }
    }); */

    evaluation.push(this.state);
    localStorage.setItem('evaluation', JSON.stringify(evaluation));
    /* if (counter === 0) localStorage.setItem('evaluation', JSON.stringify(evaluation)); */
  }

  render() {
    return (
      <form>

        <label htmlFor="email">
          <input
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
          2
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
            checked
          />
        </label>
        <button onClick={ this.handleClick } type="submit">Avaliar</button>
      </form>
    );
  }
}

export default EvaluationForms;
