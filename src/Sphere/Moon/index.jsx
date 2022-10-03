import React, { useRef } from "react";
import MoonMap from './moontTexture4k.jpg'
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import {OrbitControls, Stars} from '@react-three/drei'

export function Moon(props){

    const [normalMap] = useLoader(TextureLoader, [MoonMap]);
    const moonRef = useRef();
    const coordinate1 = useRef();
    /*
    useFrame(({clock})=>{
        const elapsedTime = clock.getElapsedTime()
        moonRef.current.rotation.y = elapsedTime / 6
        coordinate1.current.rotation.y = elapsedTime / 6

    })*/

    return(<>
    {<ambientLight  intensity={1}/>}
    {/*<pointLight color="white" position={[2,0,5]} intensity={1.2}/>*/}
    <Stars 
    radius ={300} 
    depth ={60} 
    count={5000} 
    factor ={7} 
    saturation={0} 
    fade={true} 
    />
    <mesh  position={[0, 0, 0]}>
        <sphereGeometry args ={[1, 32, 32]} />
        <meshPhongMaterial specularMap={normalMap} />
        <meshStandardMaterial 
        map={normalMap}
         metalness ={0.4} 
         roughness={0.7
         }/>
       { <OrbitControls 
            enableZoom={true} 
            enablePan={true} 
            enableRotate={true} 
            zoomSpeed={0.6}
             panSpeed={0.5} 
             rotateSpeed={0.4} 
        />}
    </mesh>
    <mesh  position={[0.927, -0.36,  -0.068]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'orange'} />
    </mesh>
    <mesh  position={[0.88, -0.46, -0.04]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'red'} />
    </mesh>
    <mesh  position={[0.937, -0.33,  -0.059]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'white'} />
    </mesh>
    <mesh  position={[0.974, -0.204,  -0.0263]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'#C30BFF'} />
    </mesh>
    <mesh  position={[0.89, 0.0039, 0.4440]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'#04FFBB'} />
    </mesh>
    <mesh  position={[0.965, -0.21262, -0.07341]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'#3A0AFF'} />
    </mesh>
    <mesh  position={[0.956, -0.283, 0.02094]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'#72FD05'} />
    </mesh>
    <mesh  position={[0.910, 0.11548, 0.3974]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'#FD9405'} />
    </mesh>
    <mesh  position={[0.87972, -0.33690, -0.3080208]}>
    <sphereGeometry args ={[0.01]} />
    <meshStandardMaterial color={'#FFB0B0'} />
    </mesh>
    </>)
};