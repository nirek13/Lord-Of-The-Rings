// src/Components/RingScene.js
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const RingModel = () => {
    const ringRef = useRef();

    // Load the GLB model using useGLTF hook
    const { scene } = useGLTF('/uruk.glb'); // Adjust the path to your GLB file
    useFrame(() => {
        if (ringRef.current) {

            ringRef.current.rotation.y += 0.01;
        }
    });
    // Enable the model to cast and receive shadows
    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.emissive = new THREE.Color(0xFFD700); // Slightly emissive
            child.material.emissiveIntensity = 0.1; // Emissive brightness
        }
    });

    return <primitive ref={ringRef} object={scene} scale={[5, 5, 5]} position={[10, -2, 0]} />;
};

const CameraControls = () => {
    const controlsRef = useRef();

    // Set hard-coded camera position and rotation
    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.object.position.set(-4.93, 3.23, 17.66); // Use the x, y, z values you logged
            controlsRef.current.object.rotation.set(-2.99878, -0.19216, -3.11414); // Set the rotation values
            controlsRef.current.update(); // Update the controls to reflect these values
        }
    }, []);

    useFrame(() => {
        if (controlsRef.current) {
            console.log("Camera Position:", controlsRef.current.object.position);
            console.log("Camera Rotation:", controlsRef.current.object.rotation);
            console.log("Camera Target:", controlsRef.current.target);
            console.log("Camera Zoom:", controlsRef.current.object.zoom);
        }
    });

    return (
        <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
        />
    );
};

const RingScene = () => {
    return (
        <Canvas
            shadows // Enable shadows in the canvas
            style={{
                position: 'absolute', // Ensure the canvas takes full screen
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'black', // Set the background to black
            }}
        >
            {/* Ambient light for basic illumination */}
            <ambientLight intensity={1.0} /> {/* Increased intensity for more ambient light */}

            {/* Directional light for sunlight-like illumination */}
            <directionalLight
                position={[5, 5, 5]} // Position the directional light
                intensity={1.5} // Higher intensity for more brightness
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Spotlight to focus on the ring */}
            <spotLight
                position={[0, 10, 10]} // Position the spotlight above and in front of the ring
                angle={0.4} // Adjust the spotlight angle
                penumbra={0.5} // Softer edges for the spotlight
                intensity={2.5} // Increased brightness
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* The GLB model of the ring */}
            <RingModel />

            {/* Full Orbit controls with logging */}
            <CameraControls />
        </Canvas>
    );
};

export default RingScene;
