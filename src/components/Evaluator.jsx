import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
  const [value, setValue] = React.useState(2);

  return (
    // componente criado através do material-ui disponível em :https://material-ui.com/pt/components/rating/
    <div>
      <Box component="fieldset" mb={ 3 } borderColor="transparent">
        <Typography component="legend" />
        <Rating
          name="simple-controlled"
          value={ value }
          onChange={ (event, newValue) => {
            setValue(newValue);
          } }
        />
      </Box>
    </div>
  );
}
