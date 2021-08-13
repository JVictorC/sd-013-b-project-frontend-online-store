import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      review: {
        email: '',
        message: '',
        rating: 'rating1',
      },
      reviews: [],
    });

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  handleClick = () => {
    // event.preventDefault();
    const { review } = this.state;
    // const { title } = this.props;
    const item = JSON.parse(localStorage.getItem('product'));
    const itemId = item.id;
    if (itemId) {
      localStorage.setItem(itemId, JSON.stringify([review]));
      this.setState({
        reviews: [...itemId, review],
      });
    } else {
      localStorage.setItem('product', JSON.stringify([review]));
      this.setState({
        reviews: [review],
      });
    }
    this.setState({
      review: {
        email: '',
        message: '',
        rating: 'rating1',
      },
    });

    // event.preventDefault();
    // const { reviews, email, message, rating } = this.state;
    // const review = {
    //   email,
    //   message,
    //   rating,
    // };
    // const item = JSON.parse(localStorage.getItem('product'));
    // const itemId = item.id;
    // this.setState((prevState) => ({
    //   review: [...prevState.reviews, review],
    // }));
    // localStorage.setItem(itemId, JSON.stringify(reviews));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      review: {
        ...prevState.review,
        [name]: value,
      },
    }));
  }

  getLocalStorage() {
    const item = JSON.parse(localStorage.getItem('product'));
    if (item) {
      this.setState({
        review: item,
      });
    }
  }

  render() {
    const { review, reviews } = this.state;
    const { email, message, rating } = review;
    const productStr = localStorage.getItem('product');
    const product = JSON.parse(productStr);
    // const productReviewsStr = localStorage.getItem(product.id);
    // const productReviews = JSON.parse(productReviewsStr);
    // const { message, email, rating } = this.state;
    return (
      <div className="card">
        <h2 data-testid="product-detail-name">
          { product.title }
        </h2>
        <div>
          <img
            src={ product.thumbnail }
            alt={ product.title }
          />
        </div>
        <div>
          <h3>Descrição:</h3>
          {product.attributes.map((attribute) => (
            <div key={ attribute.name }>
              <p>
                {`${attribute.name}: ${attribute.value_name}`}
              </p>
            </div>
          ))}
        </div>
        <p>{ `Valor: R$${product.price}` }</p>
        <form>
          <input
            type="text"
            name="email"
            value={ email }
            id={ product.id }
            onChange={ this.handleChange }
            placeholder="Email"
          />
          <textarea
            name="message"
            id=""
            value={ message }
            onChange={ this.handleChange }
            cols="30"
            rows="10"
            placeholder="Mensagem (Opcional)"
            data-testid="product-detail-evaluation"
          />
          <label htmlFor="rating">
            <select
              name="rating"
              value={ rating }
              id="rating"
              onChange={ this.handleChange }
            >
              <option value="rating1">1</option>
              <option value="rating2">2</option>
              <option value="rating3">3</option>
              <option value="rating4">4</option>
              <option value="rating5">5</option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Enviar Avaliação
          </button>
        </form>
        <div className="reviews">
          { reviews ? reviews.map((attribute, index) => (
            <div key={ index }>
              <p>
                {`${attribute.name}: ${attribute.value_name}`}
              </p>

            </div>
          )) : null}
        </div>
      </div>
    );
  }
}

export default ProductDetails;
