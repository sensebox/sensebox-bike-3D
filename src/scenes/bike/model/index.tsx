// path: src/scenes/bike/model/index.tsx
import * as THREE from "three";
import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Nodes } from "./types/nodes";
import { Materials } from "./types/materials";
import { Lid } from "./lid";
import { Mcu } from "./mcu";
import { Hdc1080 } from "./hdc1080";
import { Ble } from "./ble";
import { Fan } from "./fan";
import { Battery } from "./battery";
import { LevelBooster } from "./levelBooster";
import { LipoMeshBoard } from "./lipoMeshBoard";
import { ToF } from "./tof";
import { FanEnclosure } from "./fanEnclosure";
import { Enclosure } from "./enclosure";
import { useToggleAnimation } from "./hooks/useToggleAnimation";

type GLTFResult = GLTF & {
  nodes: Nodes;
  materials: Materials;
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/gltf/bike/senseBox_bike.gltf",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  // Verwende den Hook für die "open lid"-Animation
  const toggleLidAnimation = useToggleAnimation(actions["open lid"]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Project_Name">
        <group
          name="BikeBox+Mini+S2_(1)"
          rotation={[-Math.PI, 0, 0]}
          scale={0.001}
          userData={{ name: "BikeBox+Mini+S2 (1)" }}
        >
          <Mcu nodes={nodes} materials={materials} />
          <Hdc1080 nodes={nodes} materials={materials} />
          <Ble nodes={nodes} materials={materials} />
          <Fan nodes={nodes} materials={materials} />
          <Battery nodes={nodes} materials={materials} />
          <Lid
            nodes={nodes}
            materials={materials}
            onClick={() => toggleLidAnimation()}
          />
          <LevelBooster nodes={nodes} materials={materials} />
          <LipoMeshBoard nodes={nodes} materials={materials} />
          <ToF nodes={nodes} materials={materials} />
          <Enclosure nodes={nodes} materials={materials} />
          <FanEnclosure nodes={nodes} materials={materials} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/gltf/bike/senseBox_bike.gltf");
