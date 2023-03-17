import { useState, useRef } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber';
import {SoftShadows} from '@react-three/drei'

const SpinningMesh = ({position, args, color}) => {
  const mesh = useRef(null);
  useFrame(() => {mesh.current.rotation.x = mesh.current.rotation.y += 0.01});
  return(
    <mesh castShadow position={position} ref={mesh}>
        <boxBufferGeometry attach={'geometry'} args={args}/>
        <meshStandardMaterial attach={'material'} color={color}/>
      </mesh>
  )
}

function App() {
  return (
    <>
    <Canvas shadows colorManagement camera={{position: [0, 0, 0], fov: 60}}>
      <SoftShadows/>
      <ambientLight intensity={0.3}/>
      <directionalLight castShadow position={[0, 10,5]} intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}/>
      <pointLight position={[-10,0,-20]} intensity={0.3}/>
      <pointLight position={[0,-10,10]} intensity={0.5}/>

      <group > 
        <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0,-1,-5]}>
          <planeBufferGeometry attach={'geometry'} args={[100,100]}/>
          {/*this will need to cast a shadow */}
          <shadowMaterial attach={'material'} opacity={0.3}/>
          {/* <meshStandardMaterial attach={'material'} color={'yellow'}/> */}
        </mesh>
      </group>
      <SpinningMesh castShadow position={[-2 ,.5,-8]} args={[1,1,1]} color={'pink'}/>
      <SpinningMesh position={[2,2.5,-8]} color={'pink'}/>
      <SpinningMesh position={[0,.5,-5]} color={'lightblue'}/>
    </Canvas>  
    </>
  )
}

export default App
