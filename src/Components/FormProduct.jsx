import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0,
      email: '',
      text: '',
    };
  }

  sendState = () => {
    const { avaliateProduct } = this.props;
    const { rate, email, text } = this.state;
    avaliateProduct(rate, email, text);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { rate } = this.state;
    return (
      <div>
        <form action="SUBMIT">
          <label htmlFor="product-evaluator">
            Avalie nosso Produto
            <input
              value={ rate }
              onChange={ this.handleChange }
              name="rate"
              type="number"
              id="product-evaluator"
              min="1"
              max="5"
              required
            />
          </label>
          <label htmlFor="email-input">
            Email:
            <input
              placeholder="name@email.com"
              name="email"
              type="email"
              id="email-input"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="product-detail">
            Deixe um Comentário
            <textarea
              onChange={ this.handleChange }
              name="text"
              data-testid="product-detail-evaluation"
              id="product-detail"
              placeholder="Comente sobre nosso Produto(Opcional)"
              cols="30"
              rows="10"
            />
          </label>
          <input type="button" value="Avaliar" onClick={ this.sendState } />
        </form>
      </div>
    );
  }
}

FormProduct.propTypes = {
  avaliateProduct: PropTypes.func.isRequired,
};
