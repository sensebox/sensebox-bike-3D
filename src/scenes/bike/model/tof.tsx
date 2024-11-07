import ModuleGroupProps from "./types/module";

export function ToF({ nodes, materials, ...props }: ModuleGroupProps) {
  return (
    <group name="ToF_V53L8CX" userData={{ name: "ToF V53L8CX" }} {...props}>
      <mesh
        name="Buffer_Object_226"
        castShadow
        receiveShadow
        geometry={nodes.Buffer_Object_226.geometry}
        material={materials["Opaque(50,50,50)"]}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: "Buffer Object" }}
      />
      <mesh
        name="Buffer_Object_227"
        castShadow
        receiveShadow
        geometry={nodes.Buffer_Object_227.geometry}
        material={materials["Opaque(0,128,0)"]}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: "Buffer Object" }}
      />
      <mesh
        name="Buffer_Object_228"
        castShadow
        receiveShadow
        geometry={nodes.Buffer_Object_228.geometry}
        material={materials["Opaque(226,210,195)"]}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: "Buffer Object" }}
      />
      <mesh
        name="Buffer_Object_229"
        castShadow
        receiveShadow
        geometry={nodes.Buffer_Object_229.geometry}
        material={materials["ABS_(White)"]}
        rotation={[Math.PI / 2, 0, 0]}
        userData={{ name: "Buffer Object" }}
      />
    </group>
  );
}
