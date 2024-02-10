import { useGLTF } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef } from "react";
import { HumanGLTF } from "../typings";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { folder, useControls } from "leva";

gsap.registerPlugin(ScrollTrigger);

const SuperHuman = ({ region }: { region: string }) => {
  const gltf = useGLTF("/super_human.glb") as HumanGLTF;
  const human = useRef(null!);
  const tl = gsap.timeline();
  const { scene, camera } = useThree();

  // const {
  //   cameraPositionX,
  //   cameraPositionY,
  //   cameraPositionZ,
  //   scenePositionX,
  //   scenePositionY,
  //   scenePositionZ,
  //   sceneRotationX,
  //   sceneRotationY,
  //   sceneRotationZ,
  //   // objectPositionX,
  //   // objectPositionY,
  //   // objectPositionZ,
  //   // objectRotationX,
  //   // objectRotationY,
  //   // objectRotationZ,
  // } = useControls("Box", {
  //   cameraPosition: folder({
  //     cameraPositionX: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
  //     cameraPositionY: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
  //     cameraPositionZ: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
  //   }),
  //   scenePosition: folder({
  //     scenePositionX: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
  //     scenePositionY: { value: -0.3, min: -5, max: Math.PI * 2, step: 0.01 },
  //     scenePositionZ: { value: -2.1, min: -5, max: Math.PI * 2, step: 0.01 },
  //   }),
  //   sceneRotation: folder({
  //     sceneRotationX: {
  //       value: 0,
  //       min: -Math.PI * 2,
  //       max: Math.PI * 2,
  //       step: 0.01,
  //     },
  //     sceneRotationY: {
  //       value: 0,
  //       min: -Math.PI * 2,
  //       max: Math.PI * 2,
  //       step: 0.01,
  //     },
  //     sceneRotationZ: {
  //       value: 0,
  //       min: -Math.PI * 2,
  //       max: Math.PI * 2,
  //       step: 0.01,
  //     },
  //   }),

  // objectPosition: folder({
  //   objectPositionX: { value: 2.1, min: -5, max: Math.PI * 2, step: 0.01 },
  //   objectPositionY: { value: 0.7, min: -5, max: Math.PI * 2, step: 0.01 },
  //   objectPositionZ: { value: 0, min: -5, max: Math.PI * 2, step: 0.01 },
  // }),
  // objectRotation: folder({
  //   objectRotationX: { value: -Math.PI / 2, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  //   objectRotationY: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  //   objectRotationZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
  // }),
  // });

  // useFrame(() => {
  //   camera.position.x = cameraPositionX;
  //   camera.position.y = cameraPositionY;
  //   camera.position.z = cameraPositionZ;
  //   scene.position.x = scenePositionX;
  //   scene.position.y = scenePositionY;
  //   scene.position.z = scenePositionZ;
  //   scene.rotation.x = sceneRotationX;
  //   scene.rotation.y = sceneRotationY;
  //   scene.rotation.z = sceneRotationZ;

  //   // human.current.position.x = objectPositionX;
  //   // human.current.position.y = objectPositionY;
  //   // human.current.position.z = objectPositionZ;

  //   // human.current.rotation.x = objectRotationX;
  //   // human.current.rotation.y = objectRotationY;
  //   // human.current.rotation.z = objectRotationZ;
  // });

  useEffect(() => {
    if (region === "shoulder") {
      tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
      })
        .to(scene.position, {
          x: 0,
          y: -0.3,
          z: -2.1,
          duration: 1,
        })
        .to(scene.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
        });
    } else if (region === "knee") {
      tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
      })
        .to(scene.position, {
          x: 0,
          y: -0.35,
          z: -0.43,
          duration: 0.5,
        })
        .to(scene.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
        });
    } else if (region === "origin") {
      tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
      })
        .to(scene.position, {
          x: 0,
          y: -0.3,
          z: -2.1,
          duration: 1,
        })
        .to(scene.rotation, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
        });
    }
  }, [region]);

  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(camera.position, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: ".first-section",
        scrub: true,
        immediateRender: false,
        // markers: true,
        // toggleActions: "play reverse play reverse",
      },
    })
      .to(scene.position, {
        x: 0,
        y: -0.3,
        z: -2.1,
        scrollTrigger: {
          trigger: ".first-section",
          scrub: true,
          immediateRender: false,
          // markers: true,
          // toggleActions: "play reverse play reverse",
        },
      })

      .to(scene.rotation, {
        x: 0.35,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".first-section",
          scrub: true,
          immediateRender: false,
          // markers: true,
          // toggleActions: "play reverse play reverse",
        },
      })
      .to(camera.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.1,
        scrollTrigger: {
          trigger: ".second-section",
          scrub: true,
          immediateRender: false,
          // markers: true,
          // toggleActions: "play reverse play reverse",
        },
      })

      .to(scene.position, {
        x: 0,
        y: -0.3,
        z: -2.1,
        duration: 0.1,
        scrollTrigger: {
          trigger: ".second-section",
          scrub: true,
          immediateRender: false,
          // markers: true,
          // toggleActions: "play reverse play reverse",
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.1,
        scrollTrigger: {
          trigger: ".second-section",
          scrub: true,
          immediateRender: false,
          // markers: true,
          // toggleActions: "play reverse play reverse",
        },
      });

    // .to(camera.position, {
    //   x: 0,
    //   y: 0,
    //   z: 2.26,
    //   scrollTrigger: {
    //     trigger: ".third-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //     // markers: true,
    //     // toggleActions: "play reverse play reverse",
    //   },
    // })
    // .to(scene.position, {
    //   x: 0,
    //   y: -0.2,
    //   z: 1.53,
    //   scrollTrigger: {
    //     trigger: ".third-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //     // markers: true,
    //     // toggleActions: "play reverse play reverse",
    //   },
    // })
    // .to(scene.rotation, {
    //   x: 0,
    //   y: 0,
    //   z: 0,
    //   scrollTrigger: {
    //     trigger: ".third-section",
    //     scrub: true,
    //     immediateRender: false,
    //     // markers: true,
    //     // toggleActions: "play reverse play reverse",
    //   },
    // });
    // .to(scene.position, {
    //   x: 0,
    //   y: -2,
    //   z: -2,
    //   scrollTrigger: {
    //     trigger: ".target",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //     // markers: true,
    //     // toggleActions: "play reverse play reverse",
    //   },
    // });
    //   .to(camera.position, {
    //     x: 0,
    //     y: 0,
    //     z: 0,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: ".target",
    //       start: "top bottom",
    //       end: "top top",
    //       scrub: true,
    //       immediateRender: false,
    //       // markers: true,
    //       // toggleActions: "play reverse play reverse",
    //     },
    //   })

    //   .to(scene.position, {
    //     x: 0,
    //     y: -0.3,
    //     z: -2.1,
    //     duration: 2,
    //     scrollTrigger: {
    //       trigger: ".target",
    //       start: "top bottom",
    //       end: "top top",
    //       scrub: true,
    //       immediateRender: false,
    //       // markers: true,
    //       // toggleActions: "play reverse play reverse",
    //     },
    //   })

    // .to(scene.rotation, {
    //   x: 0,
    //   y: 0.02,
    //   z: 0,
    //   scrollTrigger: {
    //     trigger: ".third-section",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: true,
    //     immediateRender: false,
    //     // markers: true,
    //     // toggleActions: "play reverse play reverse",
    //   },
    // });

    // const tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".third-section",
    //     start: 20,
    //     end: "100%",
    //     scrub: false,
    //     immediateRender: false,
    //   },
    // });
    // tl2
    //   .to(camera.position, {
    //     x: 0,
    //     y: 0,
    //     z: 2.26,
    //   })
    //   .to(scene.position, {
    //     x: 0,
    //     y: -0.2,
    //     z: 1.53,
    //   })

    //   .to(scene.rotation, {
    //     x: 0,
    //     y: 0.02,
    //     z: 0,
    //   });
  });

  return (
    <>
      <group
        ref={human}
        scale={0.01}
        rotation-x={[-Math.PI / 2]}
        position={[0, 0, 0]}
        name="myGroup"
      >
        {/* <primitive ref={modelRef} object={gltf.scene} /> */}
        <mesh
          geometry={gltf.nodes.Object_4.geometry}
          material={gltf.materials.temp_ldefault1}
        />
        <mesh
          geometry={gltf.nodes.Object_3.geometry}
          material={gltf.materials.blinn1SG}
        />
        <mesh
          geometry={gltf.nodes.Object_2.geometry}
          material={gltf.materials.blinn1SG}
        />
      </group>
    </>
  );
};

export default SuperHuman;
