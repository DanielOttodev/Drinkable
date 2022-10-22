import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
function DrinkFocused(props) {
  let id = useParams().drinkid;
  let url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

  const [drink, setDrink] = useState([]);

  function checkValue(e) {
    alert(search);
  }

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  useEffect(() => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        //setDrink(result.drinks);
        console.log(result.drinks);
        setDrink(result.drinks[0]);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function check() {
    // console.log(props);
  }

  return (
    <div>
      <Grid
        mt={5}
        p={5}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item lg={6}>
          <img
            src={drink.strDrinkThumb}
            style={{ borderRadius: 20, maxHeight: 500 }}
            alt=""
          />
        </Grid>
        <Grid className="focusedDrink" item lg={6}>
          <h1>{drink.strDrink}</h1>
          <Divider />
          <p>{drink.strCategory}</p>

          <p style={{ fontStyle: "italic" }}>{drink.strInstructions}</p>
          <h3>Ingredients</h3>
          <List>
            <ListItem>- {drink.strIngredient1}</ListItem>
            <ListItem>- {drink.strIngredient2}</ListItem>
            <ListItem>- {drink.strIngredient3}</ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default DrinkFocused;
