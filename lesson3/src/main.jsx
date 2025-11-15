import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MyCardContainer from './lesson3_bai1.jsx'
import  MyToDoCards  from './Lesson3_bai2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyToDoCards />
  </StrictMode>
)
