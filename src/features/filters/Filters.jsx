import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGalleryState } from "../../app/imagesSelect";
import { galleryActions } from "../../api/gallerySlice";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const Filters = () => {
  const dispatch = useDispatch();
  const gallery = useSelector(selectGalleryState);

  const handleFilterTags = useCallback(
    (type, value) => {
      dispatch(
        galleryActions.setFilters({
          ...gallery.filters,
          [type]: value,
        })
      );
    },
    [dispatch, gallery.filters]
  );

  const handleFilterToggle = useCallback(
    (name, value) => {
      dispatch(
        galleryActions.setFilters({
          ...gallery.filters,
          [name]: value,
        })
      );
    },
    [dispatch, gallery.filters]
  );

  return (
    <Box
      sx={{
        minWidth: 400,
        display: "flex",
        padding: "30px",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel>Section</InputLabel>
          <Select
            defaultValue="hot"
            label="Section"
            onChange={(e) => {
              handleFilterTags("section", e.target.value);
            }}
          >
            <MenuItem value="hot">hot</MenuItem>
            <MenuItem value="top">top</MenuItem>
            <MenuItem value="user">user</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel>Sort</InputLabel>
          <Select
            defaultValue="rising"
            label="Sort"
            onChange={(e) => {
              handleFilterTags("sort", e.target.value);
            }}
          >
            <MenuItem value="viral">Viral</MenuItem>
            <MenuItem value="top">Top</MenuItem>
            <MenuItem value="time">Time</MenuItem>
            <MenuItem value="rising">Rising</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {gallery.filters.section === "top" && (
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel>Window</InputLabel>
            <Select
              defaultValue="day"
              label="Window"
              onChange={(e) => {
                handleFilterTags("sort", e.target.value);
              }}
            >
              <MenuItem value="day">Day</MenuItem>
              <MenuItem value="week">Week</MenuItem>
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="all">All</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

      <FormControl>
        <FormControlLabel
          onChange={(e) => handleFilterToggle("showViral", e.target.checked)}
          checked={gallery.filters.showViral}
          control={<Checkbox />}
          label="Show Viral"
        />
        <FormControlLabel
          checked={gallery.filters.showMature}
          onChange={(e) => handleFilterToggle("showMature", e.target.checked)}
          control={<Checkbox />}
          label="Show mature"
        />
      </FormControl>
    </Box>
  );
};

export default Filters;
