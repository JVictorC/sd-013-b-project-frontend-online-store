import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <form>

        <h2>Avaliação</h2>
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            data-testid="product-detail-evaluation"
            placeholder="Deixe seu comentário (opcional)"
          />
        </label>
        <label htmlFor="avaliacao">
          <input type="number" min="1" max="5" required />
        </label>
        <button type="submit">Avaliar</button>
      </form>
    );
  }
}

export default Rating;
