import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheets/index.css'
import RouteConfig from "./components/config/RouteConfig.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteConfig />
  </StrictMode>
)
