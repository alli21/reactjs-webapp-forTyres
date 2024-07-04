import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Slideshow from "./components/carousel/carousel"
import React from "react"
import MapData from "./components/cards/MapData"

function App() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <MapData />
    </div>
  )
}

export default App
