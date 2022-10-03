import React from "react"
import './bottominformation.css';
import {Stars} from '@react-three/drei'
import { Canvas } from "@react-three/fiber";

function BottomInformation(){
    return(
        <div className="bottomsection">
            <div className="canvascontainerbottom">
                <Canvas classname="stars">
                    <Stars 
                        radius ={300} 
                        depth ={60} 
                        count={800} 
                        factor ={7} 
                        saturation={0} 
                        fade={true} 
                    />
                </Canvas>
            </div>
            <div className="logobottom">
                <div className="sloganbottom">
                    <p>The seismometers on these devices detected moonquakes as well as meteorite and artificial impacts, and transmitted their data to Earth where it is still available for use today.</p>
                    <p>Below you can see the Moon 3d model where we plot some of the moonquake locations. Each location is represented in a different color. You have the option to:  <span className="resaltado">rotate the moon, zoom in, or zoom out the moon.</span>  So you could see the different moonquakes. Enjoy!</p>
                    <p>We use as reference <span className="resaltado">the gagnepian_2006_catalog.</span> </p>
                </div>
            </div>
        </div>
    )
}

export default BottomInformation