import React from 'react';
import PropTypes from 'prop-types';
import BtnSubmitEvaluation from './BtnSubmitEvaluation';
import CommentBox from './CommentBox';
import Rating from './Rating';

export default class EvaluationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      rating: 0,
    };

    this.getComment = this.getComment.bind(this);
    this.getRating = this.getRating.bind(this);
  }

  getComment({ target }) {
    this.setState({ comment: target.value });
  }

  getRating({ target }) {
    this.setState({ rating: target.value });
  }

  render() {
    const { id } = this.props;

    const { comment, rating } = this.state;
    return (
      <section>
        <form>
          <Rating getRating={ this.getRating } />
          <CommentBox getComment={ this.getComment } />
          <BtnSubmitEvaluation comment={ comment } rating={ rating } id={ id } />
        </form>
      </section>
    );
  }
}

EvaluationForm.propTypes = {
  id: PropTypes.number.isRequired,
};
