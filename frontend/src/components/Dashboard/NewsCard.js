import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function NewsCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.img?.length > 1 ? props.img[2].url : "/default.jpg"}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.headline}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={props.url} target="_blank">
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
