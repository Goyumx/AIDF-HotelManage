import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from "./pages/home.page";
import SignInPage from './pages/sign-in.page'
import SignUpPage from './pages/sign-up.page'
import RootLayout from "./layouts/root-layout.layout";
import MainLayout from './layouts/main.layout'
import HotelPage from './pages/hotel.page'
import HotelsPage from './pages/hotels.page'
import CreateHotelPage from "./pages/create-hotel.page";
import { store } from "./lib/store";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
      <Route element={<RootLayout/>}>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:id" element={<HotelPage />} />
          <Route path="/hotels/create" element={<CreateHotelPage />} />
        </Route>
      </Route>
    </Routes>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
