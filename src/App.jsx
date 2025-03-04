import { Canvas } from '@react-three/fiber';
import Experience from './Experience';

export default function App() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, 150]
                }}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <Experience />
            </Canvas>
        </div>
    );
} 