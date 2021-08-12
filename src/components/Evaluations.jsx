import React from 'react';

export default class Evaluations extends React.Component {

  render() {

    const object = JSON.parse(localStorage.getItem('currentState'));

    return(
      <div>
        <div>
          <h4>Recuperando do Localstorage</h4>
          {
            localStorage.length === 0 ? '' :
            <div>
              <p>E-mail: { object.email }</p>
              <p>Nota: { object.rating } </p>
              <p>Mensagem: { object.message }</p>
            </div>
          }
        </div>
        <hr />
      </div>
    );
  }
}