import React from 'react';
import Evaluator from './Evaluator';

export default class EvaluationForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      message: '',
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value });
  }

  render() {
    const { email, message } = this.state;
    return (
      <div>
        <h4>Avaliações: </h4>
        <div>
          <form>
            <div>
              <input
                type="text"
                name="email"
                value={ email }
                onChange={ this.updateState }
                placeholder="Email"
                required
              />
            </div>
            <div>
              <textarea
                data-testid="product-detail-evaluation"
                name="message"
                value={ message }
                onChange={ this.updateState }
                placeholder="Mensagem (opcional)"
              />
            </div>
            <div>
              <Evaluator />
            </div>
            <div>
              <button
                type="submit"
              >
                Avaliar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
