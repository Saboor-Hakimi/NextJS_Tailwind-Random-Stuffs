import { Canvas } from "@react-three/fiber";
import Floor from "../../components/Three/Floor";
import Box from "../../components/Three/Box";
import LightBulb from "../../components/Three/LightBulb";
import Controls from "../../components/Three/OrbitControls";
import Draggable from "../../components/Three/Draggable";

import { Suspense } from "react";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        shadows={true}
        className="bg-gray-300 w-screen h-screen"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <Controls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
