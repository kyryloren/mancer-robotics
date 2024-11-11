'use client'

import { useRef, useEffect, Suspense } from 'react'
import { RobotObject, RobotObjectWrapper } from './styles'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollScene, UseCanvas } from '@14islands/r3f-scroll-rig'
import { Float, useGLTF } from '@react-three/drei'
import { Center } from '@react-three/drei' // Import the Center helper

gsap.registerPlugin(ScrollTrigger)

const Model = () => {
  const gltf = useGLTF('/robot_compressed.glb', true)
  return (
    <Center>
      <primitive object={gltf.scene} dispose={null} />
    </Center>
  )
}

const SpinningMesh = ({ gsapRef, roboObject }) => {
  const meshRef = useRef()

  // Effect to handle scaling based on the roboObject size
  useEffect(() => {
    if (meshRef.current && roboObject.current) {
      // Get the initial dimensions of the roboObject
      const boundingRect = roboObject.current.getBoundingClientRect()
      const initialWidth = boundingRect.width

      // Determine a reasonable scale factor
      const scaleFactor = initialWidth / 50 // Adjust this value for appropriate scaling

      // Set the initial scale of the mesh using the calculated scale factor
      meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor)
    }
  }, [roboObject]) // Runs when roboObject changes or when the component mounts

  useGSAP(() => {
    if (meshRef.current && gsapRef.current) {
      // GSAP animation controlling y-position and rotation
      gsap.timeline({
        scrollTrigger: {
          trigger: gsapRef.current,
          start: 'top top',
          end: 'bottom+=100% top',
          scrub: 1,
          pin: true,
          pinSpacer: false,
          pinSpacing: false,
          onUpdate: (self) => {
            const progress = self.progress

            // Directly modifying the mesh's y-position and rotation based on scroll progress
            meshRef.current.position.y = gsap.utils.interpolate(
              0,
              -12,
              progress,
            )
            meshRef.current.rotation.y = gsap.utils.interpolate(
              0,
              -2 * Math.PI,
              progress,
            )
          },
        },
      })
    }
  })

  return (
    <group position={[0, 0, 0]} ref={meshRef}>
      <Float speed={2}>
        <mesh>
          <Model />
        </mesh>
      </Float>
    </group>
  )
}

const Robot = () => {
  const robotEl = useRef()
  const roboObject = useRef()

  return (
    <>
      <RobotObjectWrapper ref={robotEl}>
        <RobotObject ref={roboObject} />
      </RobotObjectWrapper>

      <UseCanvas>
        <ScrollScene track={roboObject}>
          {(props) => (
            <Suspense fallback={null} {...props}>
              <SpinningMesh
                {...props}
                gsapRef={robotEl}
                roboObject={roboObject}
              />
            </Suspense>
          )}
        </ScrollScene>
      </UseCanvas>
    </>
  )
}

export default Robot
