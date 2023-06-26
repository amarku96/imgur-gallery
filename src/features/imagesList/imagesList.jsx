import { useSelector } from "react-redux";
import { useFetchImagesQuery } from "../../api/imagesApiSlice";
import { Box, CircularProgress, Grid, Pagination } from "@mui/material";
import ImageContent from "./ImagesContent";
import Filters from "../filters/Filters";
import { useState } from "react";

export const ImagesList = () => {
  const filters = useSelector((state) => state.gallery);
  const { data, isLoading } = useFetchImagesQuery(filters.filters);
  const nestedArray = Object.values(data?.data || {}).map((a) => a);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  // Calculate the indexes of the items to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nestedArray.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Filters />
      <Box sx={{ flexGrow: 1, margin: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {currentItems?.map((item) => (
            <Grid item xs={2} sm={4} md={3} key={item.id}>
              <ImageContent
                title={item.title}
                id={item.id}
                description={item.description}
                date={item.datetime}
                ups={item.ups}
                downs={item.downs}
                imageURL="https://cdn.digitbin.com/wp-content/uploads/iMGUR-740x493.png"
              ></ImageContent>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Pagination
            count={Math.ceil(nestedArray.length / itemsPerPage)}
            color="primary"
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </>
  );
};
