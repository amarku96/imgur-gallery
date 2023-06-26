import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'

// import { Navbar } from './app/Navbar'

import { ImagesList } from './features/imagesList/imagesList'
import { SingleImagePage } from './features/imagesList/SingleImagePage'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Navbar from './features/navBar/NavBar'
function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route

              path="/"
              element={<ImagesList />}
            />
            <Route path="/images/:imageId" element={<SingleImagePage />} />

            {/* <Redirect to="/" /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>

  )
}

export default App