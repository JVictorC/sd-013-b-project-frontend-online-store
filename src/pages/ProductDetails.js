import React from 'react';
import EvaluationsForm from '../components/EvaluationsForm';

export default class ProductDetails extends React.Component {
  render() {
    return(
      <div>
        <h1>Página de detalhes do produto</h1>
        <hr />
        <EvaluationsForm />
      </div>
    );
  }
}