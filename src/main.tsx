import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouteConfig from "./components/RouteConfig.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteConfig />
  </StrictMode>,
)
