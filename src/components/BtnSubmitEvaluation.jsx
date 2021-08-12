import React from 'react';

export default class BtnSubmitEvaluation extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { comment, rating, id } = this.props;
    return (
      <button
        id="submit"
        type="submit"
      >
        ENVIAR
      </button>
    );
  }
}
