import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import BookingPage from './components/BookingPage';
import VikingPage from './components/VikingPage';
import SubZeroPage from './components/SubZeroPage';
import WolfPage from './components/WolfPage';
import ServiceAreaPage from './components/ServiceAreaPage';
import AtlantaServicePage from './components/AtlantaServicePage';
import AtlantaWolfPage from './components/wolf/AtlantaWolfPage';
import AtlantaSubZeroPage from './components/subzero/AtlantaSubZeroPage';
import AtlantaVikingPage from './components/viking/AtlantaVikingPage';
import AlpharettaServicePage from './components/AlpharettaServicePage';
import AvondaleEstatesServicePage from './components/AvondaleEstatesServicePage';
import AvondaleEstatesWolfPage from './components/wolf/AvondaleEstatesWolfPage';
import AvondaleEstatesSubZeroPage from './components/subzero/AvondaleEstatesSubZeroPage';
import AvondaleEstatesVikingPage from './components/viking/AvondaleEstatesVikingPage';
import AlpharettaWolfPage from './components/wolf/AlpharettaWolfPage';
import AlpharettaSubZeroPage from './components/subzero/AlpharettaSubZeroPage';
import AlpharettaVikingPage from './components/viking/AlpharettaVikingPage';
import ThankYouPage from './components/ThankYouPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import BlogCategoryPage from './components/BlogCategoryPage';
import BlogEditor from './components/BlogEditor';
import BuiltInRefrigeratorPage from './components/subzero/BuiltInRefrigeratorPage';
import WineStoragePage from './components/subzero/WineStoragePage';
import UnderCounterPage from './components/subzero/UnderCounterPage';
import RangePage from './components/wolf/RangePage';
import CooktopPage from './components/wolf/CooktopPage';
import OvenPage from './components/wolf/OvenPage';
import WolfOutdoorGrillPage from './components/wolf/OutdoorGrillPage';
import VentilationPage from './components/wolf/VentilationPage';
import MicrowaveDrawerPage from './components/wolf/MicrowaveDrawerPage';
import RefrigeratorPage from './components/viking/RefrigeratorPage';
import DishwasherPage from './components/viking/DishwasherPage';
import VikingOutdoorGrillPage from './components/viking/OutdoorGrillPage';
import AnimatedSection from './components/AnimatedSection';
import useScrollToTop from './utils/useScrollToTop';
import ScheduleButton from './components/ScheduleButton';
import MariettaWolfPage from './components/wolf/MariettaWolfPage';
import MariettaSubZeroPage from './components/subzero/MariettaSubZeroPage';
import MariettaVikingPage from './components/viking/MariettaVikingPage';
import BrookhavenWolfPage from './components/wolf/BrookhavenWolfPage';
import BrookhavenSubZeroPage from './components/subzero/BrookhavenSubZeroPage';
import BrookhavenVikingPage from './components/viking/BrookhavenVikingPage';
import KennesawWolfPage from './components/wolf/KennesawWolfPage';
import KennesawSubZeroPage from './components/subzero/KennesawSubZeroPage';
import KennesawVikingPage from './components/viking/KennesawVikingPage';
import RoswellWolfPage from './components/wolf/RoswellWolfPage';
import RoswellSubZeroPage from './components/subzero/RoswellSubZeroPage';
import RoswellVikingPage from './components/viking/RoswellVikingPage';
import SugarHillWolfPage from './components/wolf/SugarHillWolfPage';
import SugarHillSubZeroPage from './components/subzero/SugarHillSubZeroPage';
import SugarHillVikingPage from './components/viking/SugarHillVikingPage';
import CantonWolfPage from './components/wolf/CantonWolfPage';
import CantonSubZeroPage from './components/subzero/CantonSubZeroPage';
import CantonVikingPage from './components/viking/CantonVikingPage';
import WoodstockWolfPage from './components/wolf/WoodstockWolfPage';
import WoodstockSubZeroPage from './components/subzero/WoodstockSubZeroPage';
import WoodstockVikingPage from './components/viking/WoodstockVikingPage';
import ViningsWolfPage from './components/wolf/ViningsWolfPage';
import ViningsSubZeroPage from './components/subzero/ViningsSubZeroPage';
import ViningsVikingPage from './components/viking/ViningsVikingPage';
import SmyrnaWolfPage from './components/wolf/SmyrnaWolfPage';
import SmyrnaSubZeroPage from './components/subzero/SmyrnaSubZeroPage';
import SmyrnaVikingPage from './components/viking/SmyrnaVikingPage';
import BufordWolfPage from './components/wolf/BufordWolfPage';
import BufordSubZeroPage from './components/subzero/BufordSubZeroPage';
import BufordVikingPage from './components/viking/BufordVikingPage';
import LawrancevilleWolfPage from './components/wolf/LawrancevilleWolfPage';
import LawrancevilleSubZeroPage from './components/subzero/LawrancevilleSubZeroPage';
import LawrancevilleVikingPage from './components/viking/LawrancevilleVikingPage';
import JohnsCreekWolfPage from './components/wolf/JohnsCreekWolfPage';
import JohnsCreekSubZeroPage from './components/subzero/JohnsCreekSubZeroPage';
import JohnsCreekVikingPage from './components/viking/JohnsCreekVikingPage';
import CummingWolfPage from './components/wolf/CummingWolfPage';
import CummingSubZeroPage from './components/subzero/CummingSubZeroPage';
import CummingVikingPage from './components/viking/CummingVikingPage';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <AnimatedSection>
        <BrandsSection />
      </AnimatedSection>
      <AnimatedSection delay={200}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection delay={200} direction="left">
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection delay={300}>
        <TestimonialsSection />
      </AnimatedSection>
      <ScheduleButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/viking" element={<VikingPage />} />
            <Route path="/viking/refrigerator" element={<RefrigeratorPage />} />
            <Route path="/viking/dishwasher" element={<DishwasherPage />} />
            <Route path="/viking/microwave-drawer" element={<MicrowaveDrawerPage />} />
            <Route path="/viking/outdoor-grill" element={<VikingOutdoorGrillPage />} />
            <Route path="/subzero" element={<SubZeroPage />} />
            <Route path="/subzero/built-in-refrigerator" element={<BuiltInRefrigeratorPage />} />
            <Route path="/subzero/wine-storage" element={<WineStoragePage />} />
            <Route path="/subzero/under-counter" element={<UnderCounterPage />} />
            <Route path="/atlanta/wolf-repair" element={<AtlantaWolfPage />} />
            <Route path="/atlanta/subzero-repair" element={<AtlantaSubZeroPage />} />
            <Route path="/atlanta/viking-repair" element={<AtlantaVikingPage />} />
            <Route path="/marietta/wolf-repair" element={<MariettaWolfPage />} />
            <Route path="/marietta/subzero-repair" element={<MariettaSubZeroPage />} />
            <Route path="/marietta/viking-repair" element={<MariettaVikingPage />} />
            <Route path="/brookhaven/wolf-repair" element={<BrookhavenWolfPage />} />
            <Route path="/brookhaven/subzero-repair" element={<BrookhavenSubZeroPage />} />
            <Route path="/brookhaven/viking-repair" element={<BrookhavenVikingPage />} />
            <Route path="/kennesaw/wolf-repair" element={<KennesawWolfPage />} />
            <Route path="/kennesaw/subzero-repair" element={<KennesawSubZeroPage />} />
            <Route path="/kennesaw/viking-repair" element={<KennesawVikingPage />} />
            <Route path="/roswell/wolf-repair" element={<RoswellWolfPage />} />
            <Route path="/roswell/subzero-repair" element={<RoswellSubZeroPage />} />
            <Route path="/roswell/viking-repair" element={<RoswellVikingPage />} />
            <Route path="/sugar-hill/wolf-repair" element={<SugarHillWolfPage />} />
            <Route path="/sugar-hill/subzero-repair" element={<SugarHillSubZeroPage />} />
            <Route path="/sugar-hill/viking-repair" element={<SugarHillVikingPage />} />
            <Route path="/canton/wolf-repair" element={<CantonWolfPage />} />
            <Route path="/canton/subzero-repair" element={<CantonSubZeroPage />} />
            <Route path="/canton/viking-repair" element={<CantonVikingPage />} />
            <Route path="/woodstock/wolf-repair" element={<WoodstockWolfPage />} />
            <Route path="/woodstock/subzero-repair" element={<WoodstockSubZeroPage />} />
            <Route path="/woodstock/viking-repair" element={<WoodstockVikingPage />} />
            <Route path="/vinings/wolf-repair" element={<ViningsWolfPage />} />
            <Route path="/vinings/subzero-repair" element={<ViningsSubZeroPage />} />
            <Route path="/vinings/viking-repair" element={<ViningsVikingPage />} />
            <Route path="/smyrna/wolf-repair" element={<SmyrnaWolfPage />} />
            <Route path="/smyrna/subzero-repair" element={<SmyrnaSubZeroPage />} />
            <Route path="/smyrna/viking-repair" element={<SmyrnaVikingPage />} />
            <Route path="/buford/wolf-repair" element={<BufordWolfPage />} />
            <Route path="/buford/subzero-repair" element={<BufordSubZeroPage />} />
            <Route path="/buford/viking-repair" element={<BufordVikingPage />} />
            <Route path="/lawranceville/wolf-repair" element={<LawrancevilleWolfPage />} />
            <Route path="/lawranceville/subzero-repair" element={<LawrancevilleSubZeroPage />} />
            <Route path="/lawranceville/viking-repair" element={<LawrancevilleVikingPage />} />
            <Route path="/wolf" element={<WolfPage />} />
            <Route path="/wolf/range" element={<RangePage />} />
            <Route path="/wolf/cooktop" element={<CooktopPage />} />
            <Route path="/wolf/oven" element={<OvenPage />} />
            <Route path="/wolf/outdoor-grill" element={<WolfOutdoorGrillPage />} />
            <Route path="/johns-creek/wolf-repair" element={<JohnsCreekWolfPage />} />
            <Route path="/johns-creek/subzero-repair" element={<JohnsCreekSubZeroPage />} />
            <Route path="/johns-creek/viking-repair" element={<JohnsCreekVikingPage />} />
            <Route path="/cumming/wolf-repair" element={<CummingWolfPage />} />
            <Route path="/cumming/subzero-repair" element={<CummingSubZeroPage />} />
            <Route path="/cumming/viking-repair" element={<CummingVikingPage />} />
            <Route path="/wolf/ventilation" element={<VentilationPage />} />
            <Route path="/wolf/microwave-drawer" element={<MicrowaveDrawerPage />} />
            <Route path="/service-area" element={<ServiceAreaPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/atlanta" element={<AtlantaServicePage />} />
            <Route path="/alpharetta" element={<AlpharettaServicePage />} />
            <Route path="/alpharetta/wolf-repair" element={<AlpharettaWolfPage />} />
            <Route path="/alpharetta/subzero-repair" element={<AlpharettaSubZeroPage />} />
            <Route path="/alpharetta/viking-repair" element={<AlpharettaVikingPage />} />
            <Route path="/avondale-estates/wolf-repair" element={<AvondaleEstatesWolfPage />} />
            <Route path="/avondale-estates/subzero-repair" element={<AvondaleEstatesSubZeroPage />} />
            <Route path="/avondale-estates/viking-repair" element={<AvondaleEstatesVikingPage />} />
            <Route path="/avondale-estates" element={<AvondaleEstatesServicePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/blog/category/:category" element={<BlogCategoryPage />} />
            <Route path="/blog/editor" element={<BlogEditor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;