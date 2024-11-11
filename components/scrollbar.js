'use client'

import { useEffect, useRef } from 'react'
import { useRect } from 'hooks'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { mapRange } from 'lib/maths'
import styled from 'styled-components'
import { Z_INDEX } from 'styles'

const ScrollbarWrapper = styled.div`
  position: fixed;
  right: calc(1vw - 0.5vw / 2);
  top: 50%;
  transform: translateY(-50%);
  height: 200px;
  width: 0.5vw;
  z-index: ${Z_INDEX.scrollbar};
  background-color: ${({ theme }) => `rgba(${theme.white}, 0.4)`};
  border-radius: 10px;

  .inner {
    height: 100%;
    position: relative;
  }

  .thumb {
    min-height: 50px;
    width: 100%;
    background-color: ${({ theme }) => `rgb(${theme.gray})`};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    cursor: grab;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

function Scrollbar() {
  const thumbRef = useRef(null)
  const { scroll, onScroll, scrollTo } = useScrollbar()
  const [innerMeasureRef, { height: innerHeight }] = useRect()
  const [thumbMeasureRef, { height: thumbHeight }] = useRect()

  onScroll(() => {
    if (thumbRef.current) {
      const progress = scroll.y / scroll.limit
      thumbRef.current.style.transform = `translate3d(-50%, ${
        progress * (innerHeight - thumbHeight)
      }px, 0)`
    }
  }, [innerHeight, thumbHeight])

  useEffect(() => {
    let start = null
    let startScroll = null

    function onPointerMove(e) {
      if (start === null || startScroll === null) return
      e.preventDefault()

      const deltaY = e.clientY - start
      const newScroll =
        startScroll +
        mapRange(0, innerHeight - thumbHeight, deltaY, 0, scroll.limit)
      scrollTo(newScroll)
    }

    function onPointerDown(e) {
      start = e.clientY
      startScroll = scroll.y
      window.addEventListener('pointermove', onPointerMove, false)
      window.addEventListener('pointerup', onPointerUp, false)
    }

    function onPointerUp() {
      start = null
      startScroll = null
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }

    if (thumbRef.current) {
      thumbRef.current.addEventListener('pointerdown', onPointerDown, false)
    }

    return () => {
      if (thumbRef.current) {
        thumbRef.current.removeEventListener(
          'pointerdown',
          onPointerDown,
          false,
        )
      }
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }
  }, [scroll, innerHeight, thumbHeight])

  return (
    <ScrollbarWrapper>
      <div ref={innerMeasureRef} className="inner">
        <div
          className="thumb"
          ref={(node) => {
            thumbRef.current = node
            thumbMeasureRef(node)
          }}
        />
      </div>
    </ScrollbarWrapper>
  )
}

export default Scrollbar
