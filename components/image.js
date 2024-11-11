'use client'

import { useRef, forwardRef, Suspense } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { blurHashToDataURL } from 'lib'
import {
  ScrollScene,
  styles,
  UseCanvas,
  useImageAsTexture,
} from '@14islands/r3f-scroll-rig'
import { MeshDistortMaterial, Image as DreiImage } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { clamp } from 'three/src/math/MathUtils'

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: inherit;
  overflow: hidden;
  border-radius: inherit;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: inherit;
    object-fit: cover;
    overflow: hidden;
  }
`

function WebGLImage({ imgRef, scrollState, dir, ...props }) {
  const texture = useImageAsTexture(imgRef)
  const distortMat = useRef()

  useFrame(() => {
    if (distortMat.current) {
      // Apply dynamic changes only if the reference to the material exists
      distortMat.current.opacity = clamp(scrollState.viewport * 3, 0, 1) // Adjust opacity
    }
  })

  return (
    <mesh {...props}>
      <planeGeometry args={[1, 1]} />{' '}
      {/* Geometry representing the image plane */}
      <MeshDistortMaterial
        ref={distortMat}
        map={texture} // Apply the texture from imgRef
        transparent
        distort={0.3} // Base distortion factor
        speed={3} // Speed of distortion animation
      />
    </mesh>
  )
}

const CustomImage = forwardRef(
  (
    { src, alt, sizes, blur, speed = 1, priority = false },
    ref, // Forwarded ref from the parent component
  ) => {
    const el = useRef()
    const img = useRef()

    return (
      <>
        <ImageWrapper ref={el}>
          <Image
            src={src}
            alt={alt}
            sizes={sizes}
            placeholder={blur ? 'blur' : 'empty'}
            blurDataURL={blur ? blurHashToDataURL(blur) : null}
            fill
            style={{ transform: 'scale(1.2)' }}
            quality={100}
            priority={priority}
            ref={img}
            className={styles.hiddenWhenSmooth}
          />

          <UseCanvas>
            <ScrollScene track={el} debug={false}>
              {(props) => (
                <Suspense fallback={null} {...props}>
                  <WebGLImage imgRef={img} {...props} />
                </Suspense>
              )}
            </ScrollScene>
          </UseCanvas>
        </ImageWrapper>
      </>
    )
  },
)

export default CustomImage
