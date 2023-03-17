import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Ground } from './components/Ground'
import { Player } from './components/Player'



function App() {
  return (
    <div id="container" className="App" >
      <Canvas>  
        <Sky sunPosition={ [50,50,50]}></Sky>
        <ambientLight intensity={0.5} />
        <Physics>
          <Player/>
          <Ground/>
        </Physics>
      </Canvas>
    </div>
  )
}

export default App
