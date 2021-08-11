import React from 'react';

class EvaluatingForm extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      comment: '',
      user: '',
    };
  }

  getItemsFromLocalStorage = () => {
    const items = localStorage.getItem('evaluations');

    if (items) {
      return JSON.parse(items);
    }

    return [];
  };

  handleClick = () => {
    const items = this.getItemsFromLocalStorage();

    const newItems = [...items, { ...this.state, ...this.props }];

    localStorage.setItem('evaluations', JSON.stringify(newItems));

    this.setState({
      rating: 0,
      comment: '',
      user: '',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { rating, comment, user } = this.state;
    return (
      <div>
        <form>
          <input
            name="user"
            type="text"
            value={ user }
            onChange={ this.handleChange }
          />
          <input
            required
            name="rating"
            type="number"
            step={ 1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            onChange={ this.handleChange }
          />
          <input
            name="comment"
            type="textarea"
            value={ comment }
            onChange={ this.handleChange }
            data-testid="product-detail-evaluation"
          />
          <button
            type="submit"
            onClick={ this.handleClick }
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default EvaluatingForm;
