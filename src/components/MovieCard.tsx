import { Movie } from "../types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type Props = { movie: Movie };

const MovieCard = ({ movie }: Props) => {
  const imagePoster =
    movie.Poster === "N/A"
      ? process.env.PUBLIC_URL + "/images/posterPlaceholder.png"
      : movie.Poster;

  return (
    <Card>
      <CardMedia
        component="img"
        height="350"
        image={imagePoster}
        alt={`A poster for ${movie.Title} movie or placeholder if no image found.`}
      />
      <CardContent>
        <Typography gutterBottom sx={{ minHeight: 60 }}>
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Button with a label</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
