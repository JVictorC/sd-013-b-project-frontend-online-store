import React from 'react';

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
