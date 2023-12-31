import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Router>
    <AuthProvider>
      <App />
    </AuthProvider>
</Router>
);

reportWebVitals();