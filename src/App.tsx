import { Button, Grid } from '@mui/material';

import { Sidenav } from './components/sidenav';

function App() {
  return (
    <div className="body">
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Button fullWidth>Solid</Button>
        </Grid>
        <Grid item xs={2}>
          <Sidenav />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
