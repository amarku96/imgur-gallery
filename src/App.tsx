import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ImageGallery from './components/imageGallery/ImageGallery';
import Navbar from './components/navBar/Navbar';

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
