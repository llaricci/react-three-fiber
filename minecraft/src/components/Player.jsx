import { useFrame, useThree } from "@react-three/fiber"
import { useParticle, useSphere } from "@react-three/cannon"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"

export const Player = () => {
    const {camera} = useThree()
    const [ref, api] = useSphere(() =>  ({
        mass : 1,
        type : 'Dynamic',
        position : [0,1.5,0 ] 
    }))

    const vel  = useRef([0,0,0])
    useEffect(() => { 
        api.velocity.subscribe((v) => vel.current = v)},  [api.velocity])
    
    const pos = useRef([0,0,0])
    useEffect(() => { 
        api.position.subscribe((p) => pos.current = p)},  [api.position])
        
    useFrame(() => {
        camera.position.copy(new Vector3( pos.current[0], pos.current[1], pos.current[2]))
        api.velocity.set(0,0,0)
    })

    return ( 
        <mesh ref={ref}>   </mesh>
    ) 
}