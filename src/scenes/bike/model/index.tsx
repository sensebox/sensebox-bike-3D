/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useRef, useState } from "react";
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

type GLTFResult = GLTF & {
  nodes: Nodes;
  materials: Materials;
};

// type ActionName = 'open lid' | 'explode tof' | 'explode hdc'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/gltf/bike/senseBox_bike.gltf",
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const [isReversed, setIsReversed] = useState(false);

  const toggleAnimation = () => {
    if (actions["open lid"]) {
      const action = actions["open lid"];

      // Configure the animation to play once and stop at the last frame
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;

      // Set the time scale based on the direction
      action.timeScale = isReversed ? -1 : 1;

      if (!action.isRunning()) {
        // Reset the animation to the beginning if the animation is not running
        action.reset();

        // Start to play the animation from the end if the animation is reversed
        if (isReversed) {
          action.time = action.getClip().duration;
        }
      }

      action.play();

      // Toggle reverse state and store the new last time after animation starts
      setIsReversed(!isReversed);
    }
  };
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Project_Name">
        <group
          name="BikeBox+Mini+S2_(1)"
          rotation={[-Math.PI, 0, 0]}
          scale={0.001}
          userData={{ name: "BikeBox+Mini+S2 (1)" }}
        >
          {/* mcu-2 */}
          <Mcu nodes={nodes} materials={materials} />

          {/* hdc1080 */}

          <Hdc1080 nodes={nodes} materials={materials} />
          {/* BLE-Bee */}
          <Ble nodes={nodes} materials={materials} />
          {/* Fan */}
          <Fan nodes={nodes} materials={materials} />
          {/* Battery */}
          <Battery nodes={nodes} materials={materials} />
          {/* Deckel */}
          <Lid
            nodes={nodes}
            materials={materials}
            onClick={() => toggleAnimation()}
          />
          {/* Level_Booster */}
          <LevelBooster nodes={nodes} materials={materials} />

          {/* Lipo_Mess_Board */}
          <LipoMeshBoard nodes={nodes} materials={materials} />
          {/* ToF */}
          <ToF nodes={nodes} materials={materials} />
          {/* Enclosure */}
          <Enclosure nodes={nodes} materials={materials} />
          {/* <group name="Enclosure" position={[-33.925, 4.025, 37.7]}>
            <mesh
              name="PC_CF_-_PowerSchalter_-_Hebel"
              castShadow
              receiveShadow
              geometry={nodes["PC_CF_-_PowerSchalter_-_Hebel"].geometry}
              material={materials["Plastic_-_Matte_(Black)"]}
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "PC CF - PowerSchalter - Hebel" }}
            />
            <mesh
              name="PC_CF_-_PowerSchalter_-_Klammer"
              castShadow
              receiveShadow
              geometry={nodes["PC_CF_-_PowerSchalter_-_Klammer"].geometry}
              material={materials["Steel_-_Satin"]}
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "PC CF - PowerSchalter - Klammer" }}
            />
            <mesh
              name="TPU_-_Boden"
              castShadow
              receiveShadow
              geometry={nodes["TPU_-_Boden"].geometry}
              material={materials["ABS_(White)_1"]}
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "TPU - Boden" }}
            />
            <mesh
              name="PP_GF_-_Schale"
              castShadow
              receiveShadow
              geometry={nodes["PP_GF_-_Schale"].geometry}
              material={materials["ABS_(White)_2"]}
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "PP GF - Schale" }}
            />
            <mesh
              name="TPU_Module_-_SD_Karte"
              castShadow
              receiveShadow
              geometry={nodes["TPU_Module_-_SD_Karte"].geometry}
              material={materials["Plastic_-_Glossy_(Black)"]}
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "TPU Module - SD Karte" }}
            />
            <mesh
              name="TPU_Module_-_USB_C"
              castShadow
              receiveShadow
              geometry={nodes["TPU_Module_-_USB_C"].geometry}
              material={materials["Plastic_-_Glossy_(Black)"]}
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "TPU Module - USB C" }}
            />
            <mesh
              name="TPU_Module_-_Distanz_Sensor_ToF_V3"
              castShadow
              receiveShadow
              geometry={nodes["TPU_Module_-_Distanz_Sensor_ToF_V3"].geometry}
              material={materials["Plastic_-_Glossy_(Black)"]}
              rotation={[Math.PI / 2, 0, 0]}
              userData={{ name: "TPU Module - Distanz Sensor ToF V3" }}
            />
          </group> */}
          {/* Fan_Encloser */}
          <FanEnclosure nodes={nodes} materials={materials} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/gltf/bike/senseBox_bike.gltf");
