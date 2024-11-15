import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExportToPDF from './exportToPdf'

function App() {
  const items = {
    left: [
      { name: 'Your Item', price: 13 },
      { name: 'Your Item', price: 7 },
      { name: 'Your Item', price: 9 },
    ],
    right: [
      { name: 'Your Item', price: 11 },
      { name: 'Your Item', price: 16 },
      { name: 'Your Item', price: 16 },
    ],
  };

  return (
    <>
       <ExportToPDF items={items}/>
    </>
  )
}

export default App
