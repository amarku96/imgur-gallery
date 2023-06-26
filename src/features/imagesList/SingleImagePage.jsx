import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchImagesQuery } from "../../api/imagesApiSlice";
import { Box, Chip, Typography } from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

export const SingleImagePage = () => {
  const imageId = useParams();
  const { data } = useFetchImagesQuery(
    useSelector((state) => state.gallery.filters)
  );
  const nestedArray = Object.values(data?.data || {}).map((a) => a);
  const image = nestedArray.find((image) => image.id === imageId.imageId);

  if (!image) {
    return (
      <section>
        <h2>Image not found!</h2>
      </section>
    );
  }

  return (
    <Box display="flex" alignItems="top" gap={4} padding={4}>
      <Box
        component="img"
        sx={{
          height: 250,
          width: 400,
        }}
        src="https://cdn.digitbin.com/wp-content/uploads/iMGUR-740x493.png"
      />

      <Box>
        <Typography variant="h6" color="text.secondary" fontWeight="bold">
          {image.title}
        </Typography>
        <Box marginTop={2}>
          {image.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag.name}
              style={{ marginRight: 8 }}
              color="primary"
            />
          ))}
        </Box>
        <Box marginTop={2}>
          <Box display="flex" alignItems="center" marginTop={1}>
            <ThumbUp sx={{ marginRight: 1 }} />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginRight: 2 }}
            >
              {image.ups}
            </Typography>
            <ThumbDown sx={{ marginRight: 1 }} />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ marginRight: 2 }}
            >
              {image.downs}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              fontWeight="bold"
            >
              Points: {image.points}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
