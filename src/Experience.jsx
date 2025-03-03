import React, { useRef, useState } from 'react';
import { Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

export default function Experience({ onHoverChange }) {
    const computer = useGLTF('/scene.gltf');
    const videoRef = useRef(null);
    const { camera } = useThree();
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
        setIsHovered(true);
        onHoverChange(true);
        gsap.to(camera.position, {
            z: 80,
            duration: 0.5,
            ease: "power2.out"
        });
        if (videoRef.current) {
            gsap.to(videoRef.current, {
                volume: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        onHoverChange(false);
        gsap.to(camera.position, {
            z: 150,
            duration: 0.5,
            ease: "power2.out"
        });
        if (videoRef.current) {
            gsap.to(videoRef.current, {
                volume: 0.01,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    };
  
    return (
        <>
            <Environment preset="studio" background backgroundBlurriness={0.6} />
            <color args={['#01010']} attach="background" />
            <PresentationControls
                global
                rotation={[0, 0, 0]}
                polar={[-0.0, 0.0]}
                azimuth={[-1, 0.75]}
                config={{ mass: 1, tension: 50 }}
                snap={{ mass: 1, tension: 40 }}
            >
                <Float rotationIntensity={0.4}>
                    <primitive
                        object={computer.scene}
                        position-y={1.0}
                    >
                        <Html
                            transform
                            wrapperClass='htmlScreen'
                            distanceFactor={20}
                            position={[0, 6.2, 10]}
                            rotation-x={0}
                            scale={[0.77 , 0.8, 1]}
                        >
                            <div 
                                style={{ position: 'relative', width: '100%', height: '100%' }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <video
                                    ref={videoRef}
                                    src="/steve.mp4"
                                    autoPlay
                                    loop
                                    volume={0.1}
                                    style={{ width: '100%', height: '100%', borderRadius: '0px', opacity:'1' }}
                                ></video>
                            </div>
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
