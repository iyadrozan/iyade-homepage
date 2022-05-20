import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import AnimatedSphere from './sphere'
import styles from '../styles/index.module.css'

export default function controlBox() {

    return (
        <>
            <Canvas className={styles.Canvas}>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} />
                <Suspense fallback={null}>
                    <AnimatedSphere />
                </Suspense>
            </Canvas>
        </>
    )
}

