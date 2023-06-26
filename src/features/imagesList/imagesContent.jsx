import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { ThumbDown } from "@mui/icons-material";

export default function ImageContent({
  imageURL,
  title,
  id,
  date,
  ups,
  downs,
}) {
  const date2 = new Date(date * 1000);
  const formattedDate = date2.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link to={`/images/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader subheader={formattedDate} />

        <CardMedia component="img" height="194" image={imageURL} />
        <CardContent>
          <Typography variant="body2" color="text.secondary" noWrap={true}>
            {title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <ThumbUpIcon color="info" fontSize="small" />{" "}
            <Typography variant="body2" color="text.secondary">
              {ups}
            </Typography>
          </IconButton>
          <IconButton>
            <ThumbDown sx={{ marginRight: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {downs}
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    </Link>
  );
}
