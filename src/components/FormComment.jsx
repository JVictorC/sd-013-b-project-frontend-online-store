import React from 'react';
import PropTypes from 'prop-types';
// import Button from './Button';

export default class FormComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      id: props.location.id,
    });
    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderStarInput = this.renderStarInput.bind(this);
    this.renderCommentInput = this.renderCommentInput.bind(this);
  }

  handleUpdateRating = (key, newValue) => {
    this.setState({
      [key]: newValue,
    });
  }

  handleSessionStorage = () => {
    const array = JSON.parse(sessionStorage.getItem('comment'));
    array.push(this.state);
    sessionStorage.setItem('comment', JSON.stringify(array));
  }

  renderEmailInput() {
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            placeholder="email"
            type="email"
            required="required"
            onChange={ (event) => this.handleUpdateRating('email', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStarInput() {
    return (
      <div>
        <label htmlFor="1">
          1★
          <input
            name="star"
            type="radio"
            id="1"
            required="required"
            value="1"
            onClick={ (event) => this.handleUpdateRating('star', event.target.value) }
          />
        </label>
        <label htmlFor="2">
          2★
          <input
            name="star"
            type="radio"
            id="2"
            value="2"
            onClick={ (event) => this.handleUpdateRating('star', event.target.value) }
          />
        </label>

        <label htmlFor="3">
          3★
          <input
            name="star"
            type="radio"
            id="3"
            value="3"
            onClick={ (event) => this.handleUpdateRating('star', event.target.value) }
          />
        </label>

        <label htmlFor="4">
          4★
          <input
            name="star"
            type="radio"
            id="4"
            value="4"
            onClick={ (event) => this.handleUpdateRating('star', event.target.value) }
          />
        </label>

        <label htmlFor="5">
          5★
          <input
            name="star"
            type="radio"
            id="5"
            value="5"
            onClick={ (event) => this.handleUpdateRating('star', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderCommentInput() {
    return (
      <div>
        <label htmlFor="comment">
          Comment:
          <textarea
            data-testid="product-detail-evaluation"
            id="comment"
            placeholder="leave a comment"
            type="text"
            onChange={ (event) => this.handleUpdateRating('comment', event.target.value) }
          />
        </label>
      </div>
    );
  }

  render() {
    if (!sessionStorage.getItem('comment')) sessionStorage.setItem('comment', '[]');
    return (
      <div>
        <form id="form1">
          { this.renderEmailInput() }
          { this.renderStarInput() }
          { this.renderCommentInput() }
          <button
            type="button"
            form="form1"
            onClick={ this.handleSessionStorage }
          >
            button
          </button>
        </form>
      </div>
    );
  }
}

FormComment.propTypes = {
  location: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};
