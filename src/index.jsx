import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { useState } from 'react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App() {
    const [isHovered, setIsHovered] = useState(false);

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
                <Experience onHoverChange={setIsHovered} />
            </Canvas>
            {!isHovered && (
                <div style={{
                    position: 'fixed',
                    bottom: '120px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'white',
                    fontSize: '24px',
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontWeight: 500,
                    textAlign: 'center',
                    
                    pointerEvents: 'none',
                    zIndex: 1000
                }}>
                    Hover to see
                </div>
            )}
        </div>
    );
}

root.render(<App />)