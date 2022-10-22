import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

function DrinkCard(props) {
  let drinkRoute = props.idDrink;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={props.thumbnail}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.blurb}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/drink/${props.data.idDrink}`}>
          <Button size="small" color="primary">
            RECIPE
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
export default DrinkCard;
