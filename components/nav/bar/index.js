'use client'

import { useRef } from 'react'
import { Container, NormalText, normalTheme } from 'styles'
import { FixedHeader, InnerNav, LinkWrapper } from './styles'
import { CustomButton, CustomLink } from 'components'
import { useScrollbar } from '@14islands/r3f-scroll-rig'
import { usePathname, useRouter } from 'next/navigation'

const Nav = () => {
  const headerEl = useRef()
  const { scroll, onScroll, scrollTo } = useScrollbar()
  const pathname = usePathname()
  const router = useRouter()

  onScroll(() => {
    if (headerEl.current) {
      if (scroll.direction === -1) {
        headerEl.current.style.transform = `translateY(0%)`
      } else {
        headerEl.current.style.transform = `translateY(-100%)`
      }

      if (scroll.y > 10) {
        headerEl.current.style.backgroundColor = `rgb(${normalTheme.white})`
      } else {
        headerEl.current.style.backgroundColor = `transparent`
        headerEl.current.style.transform = `translateY(0%)`
      }
    }
  })

  return (
    <FixedHeader id="page-header" ref={headerEl}>
      <Container>
        <InnerNav>
          <CustomLink
            to={'/'}
            onClick={(e) => {
              e.preventDefault()
              if (pathname === '/') {
                scrollTo(0)
              } else {
                router.push('/')
              }
            }}
          >
            Mancer Robotics
          </CustomLink>
          <LinkWrapper>
            <CustomLink to={'/#work'}>Work</CustomLink>
            <CustomLink to={'/about'}>About</CustomLink>
            <CustomLink to={'/research'}>Research</CustomLink>
            <CustomLink to={'/contact'}>Contact</CustomLink>
          </LinkWrapper>
          <CustomButton to={'/contact'} nav>
            Let's talk
          </CustomButton>
        </InnerNav>
      </Container>
    </FixedHeader>
  )
}

export default Nav
