import { About } from '@/components/about'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { PageTransition } from '@/components/page-transition'
import { ScrollAnimation } from '@/components/scroll-animation'

export default function Home() {
  return (
    <PageTransition>
      <main>
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>

        <ScrollAnimation delay={0.1} direction="up">
          <Services />
        </ScrollAnimation>

        <ScrollAnimation delay={0.2} direction="up">
          <Projects />
        </ScrollAnimation>

        <ScrollAnimation delay={0.3} direction="up">
          <About />
        </ScrollAnimation>
      </main>
    </PageTransition>
  )
}
