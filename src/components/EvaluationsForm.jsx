import React from 'react';
import Evaluations from './Evaluations';

export default class EvaluationsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      message: '',
      rating: 0,
      submitted: false,
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail({ target : { value } }) {
    this.setState({
      email: value,
    }); 
  }

  handleMessage({ target: { value } }) {
    this.setState({
      message: value,
    });
  }

  handleRating({ target: { value }}) { 
    this.setState({
      rating: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, message, rating } = this.state;

    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    localStorage.setItem('rating', rating);

    const currentState = JSON.stringify(this.state);
    localStorage.setItem('currentState', currentState);

    this.setState({
      submitted: true,
    });
  }

  render() {
    const { email, message, rating, submitted } = this.state;

    return(
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
              checked={ rating === 1 }
              onChange={ this.handleRating }
            />
              1
          </label>

          <label>
            <input
              type="radio"
              name="rating"
              value="2"
              checked={ rating === 2 }
              onChange={ this.handleRating }
            />
              2
          </label>

        </div>

        <button type="submit">Avaliar</button>
        { submitted && <Evaluations currentState={ this.state } /> }
      </form>
    )
  }
}
