import { useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";
import DrinkCard from "./components/DrinkCard";

function App() {
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState([]);

  function checkValue(e) {
    alert(search);
  }

  function searchDrink() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setDrinks(result.drinks);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="App">
      <h1>Find A Drink</h1>
      <Grid container>
        <Grid item spacing={2} xs={12}>
          <TextField
            value={search}
            variant="outlined"
            label="Search"
            onChange={(e) => setSearch(e.target.value)}
          ></TextField>
        </Grid>
      </Grid>
      <Grid mt={5} mb={5} container>
        {drinks.map((d) => (
          <Grid mt={3} item lg={6} xs={4} key={d.idDrink}>
            {" "}
            <DrinkCard
              blurb={d.strInstructions.substr(0, 50) + "..."}
              title={d.strDrink}
              thumbnail={d.strDrinkThumb}
            ></DrinkCard>
          </Grid>
        ))}
      </Grid>
      <Button onClick={searchDrink} variant="contained">
        Search
      </Button>
    </div>
  );
}
export default App;
