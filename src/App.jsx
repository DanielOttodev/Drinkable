import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";
// Custom Components
import DrinkCard from "./components/DrinkCard";
import Logo from "./assets/drinkable.svg";
import Header from "./components/Header";

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
      <Header></Header>
      <img src={Logo} alt="" height="250px" />

      <Grid container>
        <Grid item spacing={2} xs={12}>
          <TextField
            value={search}
            variant="outlined"
            label="Search"
            onChange={(e) => setSearch(e.target.value)}
          ></TextField>
          <Grid mt={3} item>
            <Button onClick={searchDrink} variant="contained">
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        mt={5}
        mb={5}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        className="mygrid"
        container
      >
        {drinks.map((d) => (
          <Grid
            align="center"
            mt={3}
            item
            lg={3}
            xs={12}
            md={4}
            key={d.idDrink}
          >
            {" "}
            <DrinkCard
              blurb={d.strInstructions.substr(0, 50) + "..."}
              title={d.strDrink}
              thumbnail={d.strDrinkThumb}
            ></DrinkCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default App;
