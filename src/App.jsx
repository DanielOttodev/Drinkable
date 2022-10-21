import { useState } from 'react'
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import './App.css'



function App() {

  return (
    <div className="App">
       <h1>Find A Drink</h1>
      <Grid container>
     
      <Grid item>
      <TextField variant="outlined" label="Search"></TextField>
      </Grid>
     

      </Grid>

    </div>
  )
}

export default App
