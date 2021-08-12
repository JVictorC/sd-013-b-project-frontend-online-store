import React from 'react';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { getComment } = this.props;
    return (
      <label htmlFor="product-detail-evaluation">
        <textarea
          id="product-detail-evaluation"
          data-testid="product-detail-evaluation"
          cols="10"
          rows="4"
          onChange={ getComment }
        />
      </label>
    );
  }
}
