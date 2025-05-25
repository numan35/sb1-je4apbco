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
import AlpharettaServicePage from './components/AlpharettaServicePage';
import MiltonServicePage from './components/MiltonServicePage';
import SuwaneeServicePage from './components/SuwaneeServicePage';
import SuwaneeSubZeroPage from './components/subzero/SuwaneeSubZeroPage';
import AvondaleEstatesServicePage from './components/AvondaleEstatesServicePage';
import ScottdaleServicePage from './components/ScottdaleServicePage';
import BelvedareParkServicePage from './components/BelvedareParkServicePage';
import BuckheadServicePage from './components/BuckheadServicePage';
import SuwaneeVikingPage from './components/viking/SuwaneeVikingPage';
import JohnsCreekServicePage from './components/JohnsCreekServicePage';
import DecaturServicePage from './components/DecaturServicePage';
import DuluthServicePage from './components/DuluthServicePage';
import SuwaneeWolfPage from './components/wolf/SuwaneeWolfPage';
import DuluthWolfPage from './components/wolf/DuluthWolfPage';
import DuluthSubZeroPage from './components/subzero/DuluthSubZeroPage';
import DuluthVikingPage from './components/viking/DuluthVikingPage';
import JohnsCreekWolfPage from './components/wolf/JohnsCreekWolfPage';
import JohnsCreekSubZeroPage from './components/subzero/JohnsCreekSubZeroPage';
import ChambleeWolfPage from './components/wolf/ChambleeWolfPage';
import ChambleeSubZeroPage from './components/subzero/ChambleeSubZeroPage';
import ChambleeVikingPage from './components/viking/ChambleeVikingPage';
import PeachtreeCornersWolfPage from './components/wolf/PeachtreeCornersWolfPage';
import PeachtreeCornersSubZeroPage from './components/subzero/PeachtreeCornersSubZeroPage';
import PeachtreeCornersVikingPage from './components/viking/PeachtreeCornersVikingPage';
import DecaturWolfPage from './components/wolf/DecaturWolfPage';
import DecaturSubZeroPage from './components/subzero/DecaturSubZeroPage';
import DecaturVikingPage from './components/viking/DecaturVikingPage'; 
import AvondaleEstatesWolfPage from './components/wolf/AvondaleEstatesWolfPage';
import AvondaleEstatesSubZeroPage from './components/subzero/AvondaleEstatesSubZeroPage';
import AvondaleEstatesVikingPage from './components/viking/AvondaleEstatesVikingPage';
import BelvedareParkWolfPage from './components/wolf/BelvedareParkWolfPage';
import BelvedareParkSubZeroPage from './components/subzero/BelvedareParkSubZeroPage';
import BelvedareParkVikingPage from './components/viking/BelvedareParkVikingPage';
import BuckheadWolfPage from './components/wolf/BuckheadWolfPage';
import BuckheadSubZeroPage from './components/subzero/BuckheadSubZeroPage';
import BuckheadVikingPage from './components/viking/BuckheadVikingPage';
import JohnsCreekVikingPage from './components/viking/JohnsCreekVikingPage';
import CummingSubZeroPage from './components/subzero/CummingSubZeroPage';
import CummingVikingPage from './components/viking/CummingVikingPage';
import CummingWolfPage from './components/wolf/CummingWolfPage';
import AlpharettaWolfPage from './components/wolf/AlpharettaWolfPage';
import AlpharettaSubZeroPage from './components/subzero/AlpharettaSubZeroPage';
import AlpharettaVikingPage from './components/viking/AlpharettaVikingPage';
import CummingServicePage from './components/CummingServicePage';
import BrookhavenServicePage from './components/BrookhavenServicePage';
import KennesawServicePage from './components/KennesawServicePage';
import MariettaServicePage from './components/MariettaServicePage';
import SmyrnaServicePage from './components/SmyrnaServicePage';
import ViningsServicePage from './components/ViningsServicePage';
import SugarHillServicePage from './components/SugarHillServicePage';
import CantonServicePage from './components/CantonServicePage';
import WoodstockServicePage from './components/WoodstockServicePage';
import RoswellServicePage from './components/RoswellServicePage';
import BufordServicePage from './components/BufordServicePage';
import LawrancevilleServicePage from './components/LawrancevilleServicePage';
import SandySpringsServicePage from './components/SandySpringsServicePage';
import MiltonWolfPage from './components/wolf/MiltonWolfPage';
import MiltonSubZeroPage from './components/subzero/MiltonSubZeroPage';
import MiltonVikingPage from './components/viking/MiltonVikingPage';
import SandySpringsWolfPage from './components/wolf/SandySpringsWolfPage';
import SandySpringsSubZeroPage from './components/subzero/SandySpringsSubZeroPage';
import SandySpringsVikingPage from './components/viking/SandySpringsVikingPage';
import DunwoodyWolfPage from './components/wolf/DunwoodyWolfPage';
import DunwoodySubZeroPage from './components/subzero/DunwoodySubZeroPage';
import DunwoodyVikingPage from './components/viking/DunwoodyVikingPage';
import GraysonWolfPage from './components/wolf/GraysonWolfPage';
import GraysonSubZeroPage from './components/subzero/GraysonSubZeroPage';
import GraysonVikingPage from './components/viking/GraysonVikingPage';
import LilburnWolfPage from './components/wolf/LilburnWolfPage';
import LilburnSubZeroPage from './components/subzero/LilburnSubZeroPage';
import LilburnVikingPage from './components/viking/LilburnVikingPage';
import NorcrossWolfPage from './components/wolf/NorcrossWolfPage';
import NorcrossSubZeroPage from './components/subzero/NorcrossSubZeroPage';
import NorcrossVikingPage from './components/viking/NorcrossVikingPage';
import ScottdaleWolfPage from './components/wolf/ScottdaleWolfPage';
import ScottdaleSubZeroPage from './components/subzero/ScottdaleSubZeroPage';
import ScottdaleVikingPage from './components/viking/ScottdaleVikingPage';
import StoneMountainWolfPage from './components/wolf/StoneMountainWolfPage';
import StoneMountainSubZeroPage from './components/subzero/StoneMountainSubZeroPage';
import StoneMountainVikingPage from './components/viking/StoneMountainVikingPage';
import TuckerWolfPage from './components/wolf/TuckerWolfPage';
import TuckerSubZeroPage from './components/subzero/TuckerSubZeroPage';
import TuckerVikingPage from './components/viking/TuckerVikingPage';
import DunwoodyServicePage from './components/DunwoodyServicePage';
import ChambleeServicePage from './components/ChambleeServicePage';
import GraysonServicePage from './components/GraysonServicePage';
import LilburnServicePage from './components/LilburnServicePage';
import NorcrossServicePage from './components/NorcrossServicePage';
import PeachtreeCornersServicePage from './components/PeachtreeCornersServicePage';
import StoneMountainServicePage from './components/StoneMountainServicePage';
import TuckerServicePage from './components/TuckerServicePage';
import DoravilleServicePage from './components/DoravilleServicePage';
import ThankYouPage from './components/ThankYouPage';
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
            <Route path="/atlanta" element={<AtlantaServicePage />} />
            <Route path="/alpharetta" element={<AlpharettaServicePage />} />
            <Route path="/milton" element={<MiltonServicePage />} />
            <Route path="/suwanee" element={<SuwaneeServicePage />} />
            <Route path="/suwanee/wolf-repair" element={<SuwaneeWolfPage />} />
            <Route path="/suwanee/subzero-repair" element={<SuwaneeSubZeroPage />} />
            <Route path="/suwanee/viking-repair" element={<SuwaneeVikingPage />} />
            <Route path="/alpharetta/wolf-repair" element={<AlpharettaWolfPage />} />
            <Route path="/alpharetta/subzero-repair" element={<AlpharettaSubZeroPage />} />
            <Route path="/alpharetta/viking-repair" element={<AlpharettaVikingPage />} />
            <Route path="/milton/wolf-repair" element={<MiltonWolfPage />} />
            <Route path="/milton/subzero-repair" element={<MiltonSubZeroPage />} />
            <Route path="/milton/viking-repair" element={<MiltonVikingPage />} />
            <Route path="/sandy-springs/wolf-repair" element={<SandySpringsWolfPage />} />
            <Route path="/sandy-springs/subzero-repair" element={<SandySpringsSubZeroPage />} />
            <Route path="/sandy-springs/viking-repair" element={<SandySpringsVikingPage />} />
            <Route path="/dunwoody/wolf-repair" element={<DunwoodyWolfPage />} />
            <Route path="/dunwoody/subzero-repair" element={<DunwoodySubZeroPage />} />
            <Route path="/dunwoody/viking-repair" element={<DunwoodyVikingPage />} />
            <Route path="/grayson/wolf-repair" element={<GraysonWolfPage />} />
            <Route path="/grayson/subzero-repair" element={<GraysonSubZeroPage />} />
            <Route path="/grayson/viking-repair" element={<GraysonVikingPage />} />
            <Route path="/lilburn/wolf-repair" element={<LilburnWolfPage />} />
            <Route path="/lilburn/subzero-repair" element={<LilburnSubZeroPage />} />
            <Route path="/lilburn/viking-repair" element={<LilburnVikingPage />} />
            <Route path="/norcross/wolf-repair" element={<NorcrossWolfPage />} />
            <Route path="/norcross/subzero-repair" element={<NorcrossSubZeroPage />} />
            <Route path="/norcross/viking-repair" element={<NorcrossVikingPage />} />
            <Route path="/scottdale/wolf-repair" element={<ScottdaleWolfPage />} />
            <Route path="/scottdale/subzero-repair" element={<ScottdaleSubZeroPage />} />
            <Route path="/scottdale/viking-repair" element={<ScottdaleVikingPage />} />
            <Route path="/stone-mountain/wolf-repair" element={<StoneMountainWolfPage />} />
            <Route path="/stone-mountain/subzero-repair" element={<StoneMountainSubZeroPage />} />
            <Route path="/stone-mountain/viking-repair" element={<StoneMountainVikingPage />} />
            <Route path="/tucker/wolf-repair" element={<TuckerWolfPage />} />
            <Route path="/tucker/subzero-repair" element={<TuckerSubZeroPage />} />
            <Route path="/tucker/viking-repair" element={<TuckerVikingPage />} />
            <Route path="/duluth/wolf-repair" element={<DuluthWolfPage />} />
            <Route path="/duluth/subzero-repair" element={<DuluthSubZeroPage />} />
            <Route path="/duluth/viking-repair" element={<DuluthVikingPage />} />
            <Route path="/chamblee/wolf-repair" element={<ChambleeWolfPage />} />
            <Route path="/chamblee/subzero-repair" element={<ChambleeSubZeroPage />} />
            <Route path="/chamblee/viking-repair" element={<ChambleeVikingPage />} />
            <Route path="/peachtree-corners/wolf-repair" element={<PeachtreeCornersWolfPage />} />
            <Route path="/peachtree-corners/subzero-repair" element={<PeachtreeCornersSubZeroPage />} />
            <Route path="/peachtree-corners/viking-repair" element={<PeachtreeCornersVikingPage />} />
            <Route path="/avondale-estates/wolf-repair" element={<AvondaleEstatesWolfPage />} />
            <Route path="/avondale-estates/subzero-repair" element={<AvondaleEstatesSubZeroPage />} />
            <Route path="/avondale-estates/viking-repair" element={<AvondaleEstatesVikingPage />} />
            <Route path="/belvedere-park/wolf-repair" element={<BelvedareParkWolfPage />} />
            <Route path="/belvedere-park/subzero-repair" element={<BelvedareParkSubZeroPage />} />
            <Route path="/belvedere-park/viking-repair" element={<BelvedareParkVikingPage />} />
            <Route path="/buckhead/wolf-repair" element={<BuckheadWolfPage />} />
            <Route path="/buckhead/subzero-repair" element={<BuckheadSubZeroPage />} />
            <Route path="/buckhead/viking-repair" element={<BuckheadVikingPage />} />
            <Route path="/decatur/wolf-repair" element={<DecaturWolfPage />} />
            <Route path="/decatur/subzero-repair" element={<DecaturSubZeroPage />} />
            <Route path="/decatur/viking-repair" element={<DecaturVikingPage />} />
            <Route path="/johns-creek" element={<JohnsCreekServicePage />} />
            <Route path="/duluth" element={<DuluthServicePage />} />
            <Route path="/cumming" element={<CummingServicePage />} />
            <Route path="/brookhaven" element={<BrookhavenServicePage />} />
            <Route path="/kennesaw" element={<KennesawServicePage />} />
            <Route path="/marietta" element={<MariettaServicePage />} />
            <Route path="/smyrna" element={<SmyrnaServicePage />} />
            <Route path="/vinings" element={<ViningsServicePage />} />
            <Route path="/sugar-hill" element={<SugarHillServicePage />} />
            <Route path="/canton" element={<CantonServicePage />} />
            <Route path="/woodstock" element={<WoodstockServicePage />} />
            <Route path="/roswell" element={<RoswellServicePage />} />
            <Route path="/buford" element={<BufordServicePage />} />
            <Route path="/lawranceville" element={<LawrancevilleServicePage />} />
            <Route path="/sandy-springs" element={<SandySpringsServicePage />} />
            <Route path="/dunwoody" element={<DunwoodyServicePage />} />
            <Route path="/chamblee" element={<ChambleeServicePage />} />
            <Route path="/grayson" element={<GraysonServicePage />} />
            <Route path="/lilburn" element={<LilburnServicePage />} />
            <Route path="/norcross" element={<NorcrossServicePage />} />
            <Route path="/peachtree-corners" element={<PeachtreeCornersServicePage />} />
            <Route path="/stone-mountain" element={<StoneMountainServicePage />} />
            <Route path="/decatur" element={<DecaturServicePage />} />
            <Route path="/tucker" element={<TuckerServicePage />} />
            <Route path="/doraville" element={<DoravilleServicePage />} />
            <Route path="/avondale-estates" element={<AvondaleEstatesServicePage />} />
            <Route path="/scottdale" element={<ScottdaleServicePage />} />
            <Route path="/belvedere-park" element={<BelvedareParkServicePage />} />
            <Route path="/buckhead" element={<BuckheadServicePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;