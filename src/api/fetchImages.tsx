import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
type FetchParams = {
  section: string;
  sort: string;
  window: string;
  page: number;
  showViral: boolean;
};

const fetchImages = async (params: FetchParams): Promise<any> => {
  const response = await axios.get<AxiosResponse>(
    `https://api.imgur.com/3/gallery/${params.section}/${params.sort}/${params.window}/${params.page}`,
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

const useFetchImages = (params: FetchParams) => {
  return useQuery({
    queryKey: ["images", params],
    queryFn: () => fetchImages(params),
  });
};
export default useFetchImages;
