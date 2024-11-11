import { DisplayText } from 'styles'
import { About, Blog, Expertise, Hero, Projects, Robot, Team } from './home'

async function Home() {
  return (
    <>
      <Hero />
      <Robot />
      <About />
      <Projects />
      <Team />
      <Expertise />
      <Blog />
      <DisplayText>hello</DisplayText>
      <DisplayText>hello</DisplayText>
      <DisplayText>hello</DisplayText>
      <DisplayText>hello</DisplayText>
      <DisplayText>hello</DisplayText>
    </>
  )
}

export default Home
