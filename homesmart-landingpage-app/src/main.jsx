import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click',() => {
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expand', !isExpanded);
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
