import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { useState, useRef } from 'react'
import gsap from 'gsap'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App() {
    const [isHovered, setIsHovered] = useState(false);
    const textRef = useRef(null);

    const handleHoverChange = (hovered) => {
        setIsHovered(hovered);
        if (textRef.current) {
            gsap.to(textRef.current, {
                y: hovered ? 100 : 0,
                opacity: hovered ? 0 : 1,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <Canvas className="r3f"
                camera={{
                    fov: 45,
                    near: 0.5,
                    far: 2000,
                    position: [0, 0, 150]  
                }}
            >
                <Experience onHoverChange={handleHoverChange} />
            </Canvas>
            <div 
                ref={textRef}
                style={{
                    position: 'fixed',
                    bottom: '120px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'white',
                    fontSize: '20px',
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 400,
                    textAlign: 'center',
                    textShadow: '2px 2px 4px rgba(196, 196, 196, 0.5)',
                    pointerEvents: 'none',
                    zIndex: 1000
                }}
            >
                hover on video
            </div>
        </div>
    );
}

root.render(<App />)