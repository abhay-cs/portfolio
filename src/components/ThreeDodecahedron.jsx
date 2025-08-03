import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeDodecahedron = () => {
    const mountRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const targetRotation = useRef({ x: 0, y: 0 });
    const cameraZ = useRef(5);
    const hovering = useRef(false); // Track hover state

    useEffect(() => {
        const width = 300;
        const height = 300;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = cameraZ.current;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(3, 3, 3, 10, 10, 10);
        const wireframe = new THREE.WireframeGeometry(geometry);
        const material = new THREE.LineBasicMaterial({ color: 0x047857 });
        const line = new THREE.LineSegments(wireframe, material);
        scene.add(line);

        let floatDirection = 1;
        let floatOffset = 0;

        const onMouseMove = (event) => {
            if (!hovering.current) return;
            const rect = mountRef.current.getBoundingClientRect();
            mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        };

        const onWheel = (event) => {
            event.preventDefault();
            cameraZ.current += event.deltaY * 0.005;
            cameraZ.current = Math.min(Math.max(cameraZ.current, 2), 10);
            camera.position.z = cameraZ.current;
        };

        const onEnter = () => (hovering.current = true);
        const onLeave = () => (hovering.current = false);

        window.addEventListener("mousemove", onMouseMove);
        mountRef.current.addEventListener("mouseenter", onEnter);
        mountRef.current.addEventListener("mouseleave", onLeave);
        mountRef.current.addEventListener("wheel", onWheel, { passive: false });

        const animate = () => {
            requestAnimationFrame(animate);

            floatOffset += floatDirection * 0.002;
            if (floatOffset > 0.2 || floatOffset < -0.2) floatDirection *= -1;

            if (hovering.current) {
                targetRotation.current.x += (mouse.current.y * 0.3 - targetRotation.current.x) * 0.05;
                targetRotation.current.y += (mouse.current.x * 0.5 - targetRotation.current.y) * 0.05;
            }

            line.rotation.x = targetRotation.current.x;
            line.rotation.y = targetRotation.current.y;
            line.position.y = floatOffset;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            mountRef.current?.removeEventListener("wheel", onWheel);
            mountRef.current?.removeEventListener("mouseenter", onEnter);
            mountRef.current?.removeEventListener("mouseleave", onLeave);
            if (mountRef.current?.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            wireframe.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{ width: "300px", height: "300px", overflow: "hidden", cursor: "grab" }}
        />
    );
};

export default ThreeDodecahedron;