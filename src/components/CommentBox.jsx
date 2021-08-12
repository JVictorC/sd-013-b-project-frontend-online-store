import React from 'react';
import PropTypes from 'prop-types';

export default class CommentBox extends React.Component {
  render() {
    const { getComment } = this.props;

    return (
      <label htmlFor="product-detail-evaluation">
        <textarea
          id="product-detail-evaluation"
          data-testid="product-detail-evaluation"
          cols="10"
          rows="4"
          placeholder="Mensagem (opcional)"
          onChange={ getComment }
        />
      </label>
    );
  }
}

CommentBox.propTypes = {
  getComment: PropTypes.func.isRequired,
};
