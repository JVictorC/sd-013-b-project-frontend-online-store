import React from 'react';
import PropTypes from 'prop-types';
import states from '../states';

export default class SelectState extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <select name="state" value={ value } onChange={ onChange }>
        { states.map((state) => {
          const [sigla] = Object.keys(state);
          const [nome] = Object.values(state);
          return (
            <option
              key={ sigla }
              value={ nome }
            >
              {sigla}
            </option>
          );
        }) }
      </select>
    );
  }
}

SelectState.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
