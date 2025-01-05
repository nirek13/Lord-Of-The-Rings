import React, { useRef, useState, useEffect } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { OrbitControls } from "@react-three/drei";
import "./landing.css";

extend({ TextGeometry });

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Canvas
                className="three-canvas"
                style={{ background: "#000000" }}
                camera={{ position: [0, 2, 8], fov: 75 }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={1.5} color="#ffd700" />
                <directionalLight position={[-5, 5, 5]} intensity={0.4} color="#ffd700" />

                {/* Heading with enhanced effects */}
                <ParticleText text="Lord of the Rings" fontSize={2} position={[0, 2, 0]} />

                {/* Subheading */}
                <ParticleText text="2025 ISU by Nirek Shetty" fontSize={1.5} position={[0, -3, 0]} />

                {/* Lorenz Attractor in the background */}
                <LorenzAttractor position={[0, 0, -30]} scale={0.5} />

                {/* Orbit Controls for interactive camera movement */}
                <OrbitControls />
            </Canvas>
        </div>
    );
};

const LorenzAttractor = ({ position, scale }) => {
    const pointsRef = useRef();
    const [points, setPoints] = useState([]);

    useEffect(() => {
        // Lorenz system parameters
        const sigma = 10;
        const rho = 28;
        const beta = 8 / 3;

        // Initial state
        let x = 1;
        let y = 1;
        let z = 1;

        const dt = 0.01;
        const newPoints = [];

        // Calculate the Lorenz attractor trajectory over time
        for (let i = 0; i < 10000; i+=.1) {
            const dx = sigma * (y - x);
            const dy = x * (rho - z) - y;
            const dz = x * y - beta * z;

            x += dx * dt;
            y += dy * dt;
            z += dz * dt;

            newPoints.push(x, y, z);
        }

        setPoints(newPoints);
    }, []);

    useFrame(({ clock }) => {
        if (pointsRef.current) {
            const positions = pointsRef.current.geometry.attributes.position.array;
            const timeFactor = Math.sin(clock.getElapsedTime() * 0.05); // Time oscillation for variation

            // Apply time-based variation to attractor's color
            const color = new THREE.Color();
            color.setHSL(timeFactor * 0.5 + 0.5, 0.8, 0.5);
            pointsRef.current.material.color = color;
        }
    });

    return points.length ? (
        <points ref={pointsRef} position={position} scale={scale}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={new Float32Array(points)}
                    itemSize={3}
                    count={points.length / 3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffd700"
                size={0.05} // Adjust size of points
                sizeAttenuation
                transparent
                opacity={0.8}
                depthWrite={false}
                blending={THREE.AdditiveBlending} // Glowing effect
            />
        </points>
    ) : null;
};

const ParticleText = ({ text, fontSize, position = [0, 0, 0] }) => {
    const particleRef = useRef();
    const [particles, setParticles] = useState(null);
    const [boundingBox, setBoundingBox] = useState([0, 0]);
    const mousePosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const loader = new FontLoader();
        loader.load(
            "https://threejs.org/examples/fonts/optimer_regular.typeface.json",
            (font) => {
                const textGeometry = new TextGeometry(text, {
                    font: font,
                    size: fontSize,
                    height: 0.1,
                });
                textGeometry.computeBoundingBox();
                const centerOffsetX =
                    -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
                const centerOffsetY =
                    -0.5 * (textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y);

                const positions = [];
                const vertices = textGeometry.attributes.position.array;

                for (let i = 0; i < vertices.length; i += 3) {
                    positions.push(
                        vertices[i] + centerOffsetX,
                        vertices[i + 1] + centerOffsetY,
                        vertices[i + 2]
                    );
                }

                setBoundingBox([centerOffsetX, centerOffsetY]);
                setParticles(new Float32Array(positions));
            }
        );
    }, [text, fontSize]);

    useFrame(({ clock, camera }) => {
        if (particleRef.current && particles) {
            const positions = particleRef.current.geometry.attributes.position.array;
            const glowIntensity = Math.sin(clock.getElapsedTime() * 0.1) * 0.5 + 0.5;

            // Particle behavior updates for glowing and oscillation
            for (let i = 0; i < particles.length; i += 3) {
                positions[i] += Math.sin(clock.getElapsedTime() + i * 0.1) * 0.01;
                positions[i + 1] += Math.cos(clock.getElapsedTime() + i * 0.1) * 0.01;
            }

            particleRef.current.geometry.attributes.position.needsUpdate = true;

            const color = new THREE.Color();
            color.setHSL(glowIntensity, 0.8, 0.5);
            particleRef.current.material.color = color;

            camera.fov = 75;
            camera.updateProjectionMatrix();
        }
    });

    return particles ? (
        <points ref={particleRef} position={position}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particles}
                    itemSize={3}
                    count={particles.length / 3}
                />
            </bufferGeometry>
            <pointsMaterial
                color="#ffd700"
                size={0.03}
                sizeAttenuation
                transparent
                opacity={0.8}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    ) : null;
};

export default LandingPage;
