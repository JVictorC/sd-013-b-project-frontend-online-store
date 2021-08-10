import React, { Component } from 'react';

export default class FormProduct extends Component {
  render() {
    return (
      <div>
        <form action="GET">
          <label htmlFor="product-evaluator">
            Avalie nosso Produto
            <input
              type="number"
              id="product-evaluator"
              min="1"
              max="5"
              required
            />
          </label>
          <label htmlFor="product-detail">
            Deixe um Comentário
            <textarea
              data-testid="product-detail-evaluation"
              id="product-detail"
              placeholder="Comente sobre nosso Produto"
              cols="30"
              rows="10"
            />
          </label>
        </form>
      </div>
    );
  }
}
