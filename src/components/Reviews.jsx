import React from 'react';
import PropTypes from 'prop-types';

class FormsDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: null,
    };
  }

  componentDidMount() {
    this.requestLocalStorage();
  }

  requestLocalStorage() {
    const { productId } = this.props;
    const submitedReview = 'submited-review';
    if (localStorage.key(submitedReview)) {
      const reviews = JSON.parse(localStorage.getItem(submitedReview));
      console.log(reviews);
      const x = reviews.filter((review) => review.productId === productId);
      console.log(x);
      this.setState({
        reviews: x,
      });
    }
  }

  render() {
    return (
      <div>
        oi
      </div>
    );
  }
}

FormsDetails.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default FormsDetails;
