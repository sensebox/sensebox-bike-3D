
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from './model'

export default function BikeScene() {
  const ref = useRef(null)
  return (
    <Canvas ref={ref} shadows dpr={[1, 2]} camera={{
      fov: 50,
      position: [1, 1.5, 2],
    }}>
      <Suspense fallback={null}>
        <Stage preset="soft" intensity={0} environment="city">
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls
        autoRotate
        ref={ref}
      />
    </Canvas>
  )
}