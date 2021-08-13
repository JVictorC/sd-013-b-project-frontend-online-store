import React from 'react';
import PropTypes from 'prop-types';

class FormsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      star: '',
      comment: '',
    };
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStar = this.handleStar.bind(this);
  }

  handleStar({ target }) {
    const rate = target.id.split('-');
    this.setState({
      star: rate[0],
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  onClick(event) {
    event.preventDefault();
    const { productId } = this.props;
    const submitedReview = 'submited-review';
    if (localStorage.key(submitedReview)) {
      const parse = JSON.parse(localStorage.getItem(submitedReview));
      parse.push({ ...this.state, productId });
      localStorage.setItem(submitedReview, JSON.stringify(parse));
    } else {
      localStorage.setItem(submitedReview,
        JSON.stringify([{ ...this.state, productId }]));
    }
  }

  render() {
    return (
      <form>
        <h3>
          Avaliações
        </h3>
        <section className="email-stars">
          <label htmlFor="input-email">
            <input
              type="text"
              name="email"
              id="input-email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
          </label>
          <section className="stars">
            <label htmlFor="1-star">
              1
              <input
                name="product-star"
                className="product-star"
                type="radio"
                id="1-star"
                onChange={ this.handleStar }
              />
            </label>
            <label htmlFor="2-star">
              2
              <input
                name="product-star"
                className="product-star"
                type="radio"
                id="2-star"
                onChange={ this.handleStar }
              />
            </label>
            <label htmlFor="3-star">
              3
              <input
                name="product-star"
                className="product-star"
                type="radio"
                id="3-star"
                onChange={ this.handleStar }
              />
            </label>
            <label htmlFor="4-star">
              4
              <input
                name="product-star"
                className="product-star"
                type="radio"
                id="4-star"
                onChange={ this.handleStar }
              />
            </label>
            <label htmlFor="5-star">
              5
              <input
                name="product-star"
                className="product-star"
                type="radio"
                id="5-star"
                onChange={ this.handleStar }
              />
            </label>
          </section>
        </section>
        <textarea
          cols="30"
          id="product-comment"
          name="comment"
          placeholder="Comentário(opcional)"
          data-testid="product-detail-evaluation"
          onChange={ this.handleChange }
        />
        <button type="submit" id="submit-review" onClick={ this.onClick }>
          Avaliar
        </button>
      </form>
    );
  }
}

FormsDetails.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default FormsDetails;
