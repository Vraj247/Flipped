import React, { useRef } from 'react';
import { Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei';

export default function Experience() {
    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf');
    const videoRef = useRef(null); // Reference to the video element
  
    return (
        <>
            <Environment preset="studio" background backgroundBlurriness={0.6} />
            <color args={['#01010']} attach="background" />
            <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[-0.0, 0.0]}
                azimuth={[-1, 0.75]}
                config={{ mass: 10, tension: 500 }}
                snap={{ mass: 4, tension: 400 }}
            >
                <Float rotationIntensity={0.4}>
                    <primitive
                        object={computer.scene}
                        position-y={-1.0}
                    >
                        <Html
                            transform
                            wrapperClass='htmlScreen'
                            distanceFactor={1.17}
                            position={[0, 1.56, -1.4]}
                            rotation-x={-0.256}
                        >
                            <video
                                ref={videoRef} // Attach ref to video element
                                src="steve.mp4"
                                autoPlay
                                loop
                                 // Ensure to mute the video to prevent audio conflicts
                                controls // Temporarily add controls for testing
                                style={{ width: '100%', height: '100%', borderRadius: '0px', opacity:'0.8' }}
                            ></video>
                        </Html>
                    </primitive>
                </Float>
            </PresentationControls>
            <ContactShadows
                position-y={-2.2}
                opacity={0.2}
                blur={1.2}
                scale={24}
            />
        </>
    );
}
