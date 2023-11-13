import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../services/redux/store.js';

import App from '../App.jsx'
import Home from '../components/pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={store}>
      <Routes>

        <Route path='/' element={<App />}>

          <Route path='/' element={<Home />} />

        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>

);
