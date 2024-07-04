import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MobileProvider } from "./context/MobileContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MobileProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MobileProvider>
);
