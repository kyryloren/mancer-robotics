'use client'

import { useEffect, useRef } from 'react'
import WebGLFluidEnhanced from 'webgl-fluid-enhanced'

const Cursor = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const simulation = new WebGLFluidEnhanced(canvasRef.current)
    simulation.setConfig({
      pressure: 0.2,
      sunrays: false,
      splatForce: 1500,
      densityDissipation: 1,
      curl: 0,
      backgroundColor: '#FFFBFB',
      colorPalette: ['#615D72'],
      transparent: true,
    })
    simulation.start()

    return () => {
      simulation.stop()
    }
  }, [])

  return (
    <div
      id="canvas"
      ref={canvasRef}
      style={{ position: 'fixed', width: '100vw', height: '100vh' }}
    />
  )
}

export default Cursor
