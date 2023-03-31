import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Box(props) {
  const texture = useLoader(TextureLoader, "/textures/first.jpg");

  return (
    <>
      <mesh {...props} recieveShadow>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="teal" map={texture} />
      </mesh>
    </>
  );
}
