'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, normalTheme } from 'styles'
import { Cursor, Lines, Nav, Scrollbar } from 'components'
import { useIsTouchDevice } from 'hooks'
import { GlobalCanvas, SmoothScrollbar } from '@14islands/r3f-scroll-rig'
import { Environment } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Template({ children }) {
  const touchDevice = useIsTouchDevice()

  // useGSAP(() => {
  //   const el = document.querySelector('body')

  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: el,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       scrub: 0.5,
  //     },
  //   })

  //   tl.to(
  //     el,
  //     {
  //       backgroundColor: 'rgb(255,251,251)',
  //     },
  //     0,
  //   )
  //     .to(
  //       el,
  //       {
  //         backgroundColor: 'rgb(245,228,255)',
  //       },
  //       0.2,
  //     )
  //     .to(
  //       el,
  //       {
  //         backgroundColor: 'rgb(250,240,253)',
  //       },
  //       0.4,
  //     )
  //     .to(
  //       el,
  //       {
  //         backgroundColor: 'rgb(245,228,255)',
  //       },
  //       0.6,
  //     )
  //     .to(
  //       el,
  //       {
  //         backgroundColor: 'rgb(229,223,255)',
  //       },
  //       0.8,
  //     )
  //     .to(
  //       el,
  //       {
  //         backgroundColor: 'rgb(253,246,252)',
  //       },
  //       1,
  //     )
  // })

  return (
    <ThemeProvider theme={normalTheme}>
      <GlobalStyle />
      <GlobalCanvas
        eventPrefix="client"
        scaleMultiplier={0.01}
        camera={{ fov: 33 }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight />
        <spotLight
          position={[14, 14, 14]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={[512, 512]}
          castShadow
        />
        <Environment preset="city" />
      </GlobalCanvas>

      <SmoothScrollbar>
        {(bind) => (
          <main {...bind}>
            <Nav />
            <Lines />

            {children}
          </main>
        )}
      </SmoothScrollbar>
      {touchDevice ? null : <Scrollbar />}
      {/* <Nav /> */}
      <Cursor />
    </ThemeProvider>
  )
}
