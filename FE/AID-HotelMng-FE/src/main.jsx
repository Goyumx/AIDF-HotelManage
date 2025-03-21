import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from "./pages/home.page";
import SignInPage from './pages/sign-in.page'
import SignUpPage from './pages/sign-up.page'
import RootLayout from "./layouts/root-layout.layout";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
