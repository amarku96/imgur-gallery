import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Navbar from "./components/NavBar/Navbar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      // cacheTime: Infinity,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <ImageGallery></ImageGallery>
    </QueryClientProvider>
  );
}

export default App;
