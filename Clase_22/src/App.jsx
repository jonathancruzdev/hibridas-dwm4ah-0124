/* MUI */
import { theme } from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/* MUI */

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material'




function App() {
 

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>React MUI</h1>
        <Grid container spacing={3}  justifyContent="space-evenly">
          <Grid item md={10} sm={6} xs={12}>
            <h2> App con MUI</h2>

            <Card>
              <CardContent sx={{ minWidth: 200}}>
                <Typography sx={{fontSize: 18}}>
                  Producto 1
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined"> Ver mas</Button>
              </CardActions>
            </Card>

          </Grid>
          <Grid item md={2} sm={6} xs={12}>
            <Button variant="contained" color="success">  Login </Button>
            <TextField variant="outlined"></TextField>
          </Grid>
        </Grid>

      </ThemeProvider>
    </>
  )
}

export default App
