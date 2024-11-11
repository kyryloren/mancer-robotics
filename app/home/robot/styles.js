'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const RobotObjectWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: ${Z_INDEX.robot};
`
export const RobotObject = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -120%);
  /* background-color: white; */
`
