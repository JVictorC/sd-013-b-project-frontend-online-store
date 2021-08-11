import React from 'react';

export default class Evaluations extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      message: '',
      rating: 0,
    }

    this.handleEmail = this.handleEmail.bind(this);
  }

  handleEmail({ target : { value } }) {
  }

  render() {
    return(
      <form>
        <h3>Avaliações</h3>
        <p>
          <input type="email" placeholder="E-mail"/>
        </p>
        <p>
          <textarea
            placeholder="Mensagem (opcional)"
            data-testid="product-detail-evaluation"
          />
        </p>
        <p>
          <input type="radio" name="rating" id="" value="1" />1
          <input type="radio" name="rating" id="" value="2" />2
          <input type="radio" name="rating" id="" value="3" />3
          <input type="radio" name="rating" id="" value="4" />4
          <input type="radio" name="rating" id="" value="5" />5
        </p>

        <button type="submit">Avaliar</button>
      </form>
    )
  }
}
