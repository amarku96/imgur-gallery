import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchImages = async (params) => {
  const queryString = new URLSearchParams(params).toString();

  const response = await axios.get(
    `https://api.imgur.com/3/gallery/${params.section}/${params.sort}/${params.window}/${params.page}?${queryString}`,
    {
      params: {
        showViral: params.showViral,
        mature: false,
        album_previews: false,
      },
      headers: {
        Authorization: "Client-ID ee9d3816e898020",
      },
    }
  );

  return response.data.data;
};

const useFetchImages = (params) => {
  return useQuery({
    queryKey: ["images", params],
    queryFn: () => fetchImages(params),
  });
};
export default useFetchImages;
