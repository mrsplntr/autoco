import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import DATA from './dummyDB';

const Autoco = () => {
  
  const handleChange = (e, value) => {
    console.log(value);
  }

  return (
    <Autocomplete
      onChange={handleChange}
      id='combo-box-demo'
      options={DATA}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search for a course...'
          variant='outlined'
        />
      )}
    />
  );
}

export default Autoco
