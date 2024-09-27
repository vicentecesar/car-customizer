import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { useRef } from 'react';

extend({ OrbitControls });

const OrbitCamera = () => {
  const {camera, gl} = useThree();
  return (
    <orbitControls args={[camera, gl.domElement]}/>
  );
}

const Box = (props) => {
  const ref = useRef();

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta;
    // ref.current.rotation.y += delta;
  });
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry/>
      <meshBasicMaterial color='blue'/>
    </mesh>
  );
}

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
    <Canvas style={{background: 'grey'}} camera={{position: [3, 3, 3]}}>
      <OrbitCamera/>
      <Box position={[1, 1, 1]}/>
      <axesHelper args={[2]}/>
    </Canvas>
    </div>
  );
}

export default App;
