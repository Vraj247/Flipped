import React, { Suspense } from 'react';
import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF } from '@react-three/drei'

export default function Experience() {

    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
    console.log(computer)

    return <>

        <Environment preset="city" />
        <color args={['#FFA500']} attach="background" />
        <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
        // config={{ mass: 10, tension: 500 }}
        // snap={{ mass: 4, tension: 400 }}
        >
            <Float rotationIntensity={0.4}>
                <primitive
                    object={computer.scene}
                    position-y={-1.3}
                >
                    {/* <rectAreaLight
                        width={2.5}
                        height={1.4}
                        intensity={20}
                        color={'#fa4f01'}
                        rotation={[0.1, Math.PI, 0]}
                        position={[0, 0.5, -1.5]}

                    /> */}

                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0, 1.56, -1.4]}
                        rotation-x={-0.256}
                    >
                        <iframe src="https://vry.works/"></iframe>
                    </Html>
                </primitive>

            </Float>
        </PresentationControls>
        {/* <Text
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            fontSize={10}
            maxWidth={2}
        >Hello World</Text> */}

        <ContactShadows
            position-y={-1.2}
            opacity={0.3}
            blur={0.3}
            scale={13}
        />

    </>
}