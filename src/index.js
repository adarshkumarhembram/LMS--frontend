
import './index.css';

import App from './App.js';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store.js';  // Correct path here (without 'slices')



createRoot(document.getElementById('root')).render(
  <Provider store={store }>
    <BrowserRouter>
        <App />
        <Toaster/>
    </BrowserRouter>
  </Provider>  
)
