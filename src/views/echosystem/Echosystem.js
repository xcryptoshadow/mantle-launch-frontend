import React, { useState } from 'react';

import data from './data';
import Echolist from './Echolist';

import { Grid } from '@material-ui/core';

function Echosystem() {
  const [projects, setprojects] = useState(data);
  return (
    <Grid container spacing={2}>
      <Echolist projects={projects} />;
    </Grid>
  );
}

export default Echosystem;
