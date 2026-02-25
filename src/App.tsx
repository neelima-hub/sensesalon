import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SignatureTreatments from './components/SignatureTreatments';
import ParallaxDivider from './components/ParallaxDivider';
import BeautyMenu from './components/BeautyMenu';
import BookAppointment from './components/BookAppointment';
import BentoGallery from './components/BentoGallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <SignatureTreatments />
        <ParallaxDivider />
        <BeautyMenu />
        <BookAppointment />
        <BentoGallery />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
