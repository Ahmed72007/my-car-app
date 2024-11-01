
// app/page.tsx
import HeroSection from './components/HeroSection';
import FeaturedCars from './components/FeaturedNewCar';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedCars />
    </div>
  );
}
