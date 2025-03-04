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
                volume: 0.7,
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
                polar={[0.0, 1.0]}
                azimuth={[-0.5, 0.5]}
                config={{ mass: 3, tension: 200 }}
                snap={{ mass: 4, tension: 1500 }}
            >
                <Float rotationIntensity={isHovered ? 0 : 0.7}>
                    <primitive
                        object={computer.scene}
                        position-y ={0.0}
                    >
                        <Html
                            transform
                            wrapperClass='htmlScreen'
                            distanceFactor={12}
                            position={[0, 6.2, 10]}
                            rotation-x={0}
                            scale={[1.0, 1.0, 1]}
                            style={{
                                transform: 'scale(0.75)',
                                transformOrigin: 'center center',
                                pointerEvents: 'auto',
                                width: '1080px',
                                height: '640px',
                                overflow: 'hidden',
                                backgroundColor: 'rgba(18, 18, 18, 0.98)'
                            }}
                        >
                            <div 
                                style={{ 
                                    position: 'relative', 
                                    width: '1080px', 
                                    height: '768px',
                                    transform: 'scale(1.0)',
                                    transformOrigin: 'center center',
                                    cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'white\'><path d=\'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z\'/></svg>") 12 12, auto'
                                }}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <iframe
                                    src="https://vry.works/"
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        border: 'none',
                                        borderRadius: '0px',
                                        backgroundColor: '#000000',
                                        filter: 'brightness(1.1) contrast(1.1) saturate(1.1)',
                                        position: 'relative'
                                    }}
                                    title="Vikas Raj Yadav Portfolio"
                                ></iframe>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
                                    pointerEvents: 'none',
                                    mixBlendMode: 'overlay'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
                                    pointerEvents: 'none',
                                    mixBlendMode: 'multiply'
                                }} />
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
