"use client";
import Header from "../../components/Header";
import ContentSection from "./components/ContentSection";
import CuriositySection from "./components/CuriositiesSection";
import Footer from "./components/Footer";
import HowSolarEnergyWorks from "./components/HowSolarEnergyWorks";
import NewsSection from "./components/NewsSection";
import PresentationSection from "./components/PresentationSection";
import SimulationSection from "./components/SimulationSection";

export default function HomePage() {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div>
        <PresentationSection />
      </div>
      <div>
        <SimulationSection />
      </div>
      <div>
        <HowSolarEnergyWorks />
      </div>
      <div>
        <CuriositySection />
      </div>
      <div>
        <ContentSection />
      </div>
      <div>
        <NewsSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
