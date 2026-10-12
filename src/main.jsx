import ReactDOM from 'react-dom';
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { useNavigate } from "react-router-dom";
import {HashRouter as Router} from 'react-router-dom';
import { Route, Routes } from "react-router-dom"
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
      <Router>
            <App />
      </Router>
)