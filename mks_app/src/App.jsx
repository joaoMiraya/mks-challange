import { Outlet } from 'react-router-dom'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/partials/Footer'
import Header from './components/partials/Header'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Header />
      <ToastContainer />
      <Outlet />

      <Footer />
    </>
  )
}

export default App
