import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from "react-redux";
import { store } from "./Day47/25-05-2026/store";

import App from './App_Day47Task.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

