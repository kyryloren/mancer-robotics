'use client'

import styled from 'styled-components'
import { CONTAINER_VALUES, Z_INDEX } from 'styles'

const LinesWrapper = styled.div`
  position: static;
`
const LineContainer = styled.div`
  position: absolute;
  pointer-events: none;
  height: 100%;
  z-index: ${Z_INDEX.lines};
  left: ${(props) => props.left && CONTAINER_VALUES.desktop.left};
  right: ${(props) => props.right && CONTAINER_VALUES.desktop.right};
`
const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => `rgba(${theme.gray}, 0.3)`};
`

const Lines = () => {
  return (
    <LinesWrapper>
      <LineContainer left>
        <Line />
      </LineContainer>
      <LineContainer right>
        <Line />
      </LineContainer>
    </LinesWrapper>
  )
}

export default Lines
