import React from 'react';
import Evaluations from './Evaluations';

export default class EvaluationsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      message: '',
      rating: '',
      key: 0,
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail({ target: { value } }) {
    this.setState({
      email: value,
    });
  }

  handleMessage({ target: { value } }) {
    this.setState({
      message: value,
    });
  }

  handleRating({ target: { value } }) {
    this.setState({
      rating: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // 'key' criada para fornecer uma ID única para cada avaliação
    this.setState((prevState) => ({
      key: prevState.key + 1,
    }));
    // source: https://www.youtube.com/watch?v=De5np8phQxo&t=1198s
    const evaluations = JSON.parse(localStorage.getItem('currentState')) || [];
    evaluations.push(this.state);
    localStorage.setItem('currentState', JSON.stringify(evaluations));
    // const currentState = JSON.stringify(this.state);
    // localStorage.setItem('currentState', currentState);
  }

  render() {
    const { email, message, rating } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <h3>Avaliações</h3>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            value={ email }
            onChange={ this.handleEmail }
          />
        </div>
        <div>
          <textarea
            placeholder="Mensagem (opcional)"
            data-testid="product-detail-evaluation"
            value={ message }
            onChange={ this.handleMessage }
          />
        </div>
        <div>
           {/** source: https://felipegalvao.com.br/pt/blog/learn-react-events-and-forms/ */}
          <label>
            <input
              type="radio"
              name="rating"
              value="1"
              checked={ rating === '1' }
              onChange={ this.handleRating }
            />
              1
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="2"
              checked={ rating === '2' }
              onChange={ this.handleRating }
            />
              2
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="3"
              checked={ rating === '3' }
              onChange={ this.handleRating }
            />
              3
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="4"
              checked={ rating === '4' }
              onChange={ this.handleRating }
            />
              4
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="5"
              checked={ rating === '5' }
              onChange={ this.handleRating }
            />
              5
          </label>
        </div>

        <button type="submit">Avaliar</button>

        <hr />
        <Evaluations currentState={ this.state } />
      </form>
    );
  }
}
