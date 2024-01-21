import Hero from '@/components/Hero';
import About from '@/components/About';
import Discovery from '@/components/Discovery';
import AppTypes from '@/components/AppTypes';
import FullStack from '@/components/FullStack';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';

export default function Home() {
  return <main>
    <Hero />
    <About />
    <Discovery />
    <FullStack />
    <AppTypes />
    <Work />
    <Reviews />
    <Cta />
  </main>
  
}
