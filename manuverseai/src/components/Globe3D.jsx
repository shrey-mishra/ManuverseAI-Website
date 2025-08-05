import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

const Globe3D = ({ className = "w-96 h-96" }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  // Create scene, camera, and renderer
  const { scene, camera, renderer } = useMemo(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(500, 500);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    
    return { scene, camera, renderer };
  }, []);

  // Create wireframe globe
  const createGlobe = () => {
    // Remove existing globe if any
    const existingGlobe = scene.getObjectByName('globe');
    if (existingGlobe) {
      scene.remove(existingGlobe);
    }

    const globeGroup = new THREE.Group();
    globeGroup.name = 'globe';

    // Create low-poly sphere geometry
    const geometry = new THREE.IcosahedronGeometry(2.5, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00D9FF,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const wireframe = new THREE.Mesh(geometry, material);
    globeGroup.add(wireframe);

    // Add connection lines between vertices
    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x00D9FF,
      transparent: true,
      opacity: 0.6
    });

    const vertices = geometry.attributes.position.array;
    const connectionLines = [];
    
    // Create connections between nearby vertices
    for (let i = 0; i < vertices.length; i += 3) {
      for (let j = i + 3; j < vertices.length; j += 3) {
        const distance = Math.sqrt(
          Math.pow(vertices[i] - vertices[j], 2) +
          Math.pow(vertices[i + 1] - vertices[j + 1], 2) +
          Math.pow(vertices[i + 2] - vertices[j + 2], 2)
        );
        
        if (distance < 2.0 && Math.random() > 0.85) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]),
            new THREE.Vector3(vertices[j], vertices[j + 1], vertices[j + 2])
          ]);
          
          const line = new THREE.Line(geometry, connectionMaterial);
          connectionLines.push(line);
          globeGroup.add(line);
        }
      }
    }

    // Add automation nodes
    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00D9FF,
      transparent: true,
      opacity: 0.8
    });

    // Create nodes at strategic positions
    const nodePositions = [
      { x: 1.5, y: 0.8, z: 1.2 },
      { x: -1.2, y: 1.5, z: 0.8 },
      { x: 0.8, y: -1.5, z: 1.2 },
      { x: -1.5, y: -0.8, z: 1.0 },
      { x: 1.0, y: 1.2, z: -1.5 },
      { x: -0.8, y: 1.0, z: -1.8 },
      { x: 1.8, y: -1.0, z: -0.8 },
      { x: -1.0, y: -1.8, z: -0.6 },
      { x: 0.6, y: 0.6, z: 1.8 },
      { x: -0.6, y: 0.8, z: 1.9 },
      { x: 1.9, y: -0.6, z: 0.6 },
      { x: -1.8, y: -0.6, z: 0.8 }
    ];

    nodePositions.forEach((pos, index) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(pos.x, pos.y, pos.z);
      node.name = `node-${index}`;
      globeGroup.add(node);
    });

    // Add ambient glow
    const glowGeometry = new THREE.SphereGeometry(2.7, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x00D9FF,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    globeGroup.add(glow);

    scene.add(globeGroup);
    return globeGroup;
  };

  // Mouse interaction handlers
  const handleMouseMove = (event) => {
    if (!mountRef.current) return;
    
    const rect = mountRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    mouseRef.current.x = ((event.clientX - rect.left) - centerX) / centerX;
    mouseRef.current.y = ((event.clientY - rect.top) - centerY) / centerY;
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
  };

  // Animation loop
  const animate = () => {
    animationIdRef.current = requestAnimationFrame(animate);
    
    const globe = scene.getObjectByName('globe');
    if (globe) {
      // Base rotation
      globe.rotation.x += 0.002;
      globe.rotation.y += 0.003;
      
      // Mouse interaction rotation
      if (isHoveringRef.current) {
        const targetRotationX = mouseRef.current.y * 0.5;
        const targetRotationY = mouseRef.current.x * 0.5;
        
        // Smooth interpolation for mouse movement
        globe.rotation.x += (targetRotationX - globe.rotation.x) * 0.05;
        globe.rotation.y += (targetRotationY - globe.rotation.y) * 0.05;
      }
      
      // Animate connection lines
      globe.children.forEach((child, index) => {
        if (child.type === 'Line') {
          child.material.opacity = 0.3 + 0.4 * Math.sin(Date.now() * 0.001 + index * 0.5);
        }
        if (child.name && child.name.startsWith('node-')) {
          // Pulse nodes
          const scale = 1 + 0.3 * Math.sin(Date.now() * 0.002 + index * 0.3);
          child.scale.setScalar(scale);
          child.material.opacity = 0.6 + 0.4 * Math.sin(Date.now() * 0.003 + index * 0.4);
        }
      });
    }
    
    renderer.render(scene, camera);
  };

  useEffect(() => {
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      
      // Set camera position
      camera.position.z = 5;
      
      // Create globe
      createGlobe();
      
      // Start animation
      animate();
      
      // Store references
      sceneRef.current = scene;
      rendererRef.current = renderer;
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [scene, camera, renderer]);

  // Add mouse event listeners
  useEffect(() => {
    const element = mountRef.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const size = Math.min(window.innerWidth * 0.5, 500);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
      renderer.setSize(size, size);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [camera, renderer]);

  return (
    <div 
      ref={mountRef} 
      className={`relative ${className} cursor-pointer`}
      style={{ 
        background: 'radial-gradient(circle, rgba(0, 217, 255, 0.05) 0%, transparent 70%)',
        borderRadius: '50%'
      }}
    >
      {/* Subtle cream shadow */}
      <div 
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[480px] h-12 rounded-full blur-2xl opacity-30"
        style={{
          background: 'radial-gradient(ellipse, rgba(255, 248, 220, 0.4) 0%, rgba(255, 248, 220, 0.1) 50%, transparent 100%)'
        }}
      />
    </div>
  );
};

export default Globe3D; 