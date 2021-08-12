import React from 'react';

class Evaluete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: 1,
      evaluete: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      star: 1,
      evaluete: '',
    });
  }

  render() {
    const { star, evaluete } = this.state;
    return (
      <div>
        <h4>Avaliações:</h4>
        <form>
          <label htmlFor="star">
            Nota
            <input
              type="number"
              name="star"
              id="star"
              min="1"
              max="5"
              value={ star }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="evaluete">
            Deixe um comentário:
            <textarea
              id="evaluete"
              name="evaluete"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
              value={ evaluete }
              onChange={ this.handleChange }
            />
          </label>
          <button type="submit" onClick={ this.handleSubmit }>Enviar</button>
        </form>
      </div>

    );
  }
}
export default Evaluete;
