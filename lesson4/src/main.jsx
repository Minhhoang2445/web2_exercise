import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lesson4_bai1 from './Lesson4_bai1.jsx'
import Lesson4_bai2 from './Lesson4_bai2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lesson4_bai2 />
  </StrictMode>,
)
