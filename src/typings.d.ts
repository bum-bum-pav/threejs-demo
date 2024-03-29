import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export type HumanGLTF = GLTF & {
	nodes: {
		Object_2: THREE.Mesh;
		Object_3: THREE.Mesh;
		Object_4: THREE.Mesh;
		temp_lOBJcleanergles: THREE.Mesh;

		// all undefined
		// RootNode: THREE.Mesh;
		// Sketchfab_Scene: THREE.Mesh;
		// Sketchfab_model: THREE.Mesh;
		// d8deb8ca54d7411c8d14a56540e715c4fbx: THREE.Mesh;
		// shoe: THREE.Mesh;
		// shoelace: THREE.Mesh;
	};
	materials: {
		blinn1SG: THREE.MeshStandardMaterial;
		temp_ldefault1: THREE.MeshStandardMaterial;
	};
};