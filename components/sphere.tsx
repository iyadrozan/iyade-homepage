import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function AnimatedSphere() {
    return (
        <Sphere visible args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#5f7161"
                attach="material"
                distort={0.5}
                speed={1.5}
                roughness={0}
            />
        </Sphere>
    );
}