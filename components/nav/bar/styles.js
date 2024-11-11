'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const FixedHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.nav};
  padding: var(--space-2xs-xs) 0;
  transition:
    transform 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99),
    background-color 0.5s cubic-bezier(0.62, 0.05, 0.01, 0.99);
  border-bottom: 1px solid ${({ theme }) => `rgb(${theme.gray}, 0.3)`};
`
export const InnerNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LinkWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: var(--space-xs);
`
