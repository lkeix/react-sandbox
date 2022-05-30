import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Card from './components/card/Card'
import Carousel from './components/carousel/Carousel'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const width = 400
const height = 300
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card" element={<Card 
            src="https://placehold.jp/640x360.png" 
            width={width}
            height={height}
            title='hello'
            content='react-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandboxreact-sandbox'
            date='2022/05/28' />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
