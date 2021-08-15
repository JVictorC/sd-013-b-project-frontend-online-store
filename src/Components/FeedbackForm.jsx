import React, { Component } from 'react';

export default class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      feedback: '',
    };
    this.handleRatingChange = this.handleRatingChange.bind(this);
  }

  handleRatingChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { rating, feedback } = this.state;
    return (
      <form>
        <input
          type="number"
          value={ rating }
          min={ 0 }
          max={ 5 }
          onChange={ this.handleRatingChange }
          isRequired
        />
        <br />
        <textarea
          name="feedback"
          cols="30"
          rows="10"
          value={ feedback }
          onChange={ this.handleRatingChange }
          data-testid="product-detail-evaluation"
        />
      </form>
    );
  }
}
