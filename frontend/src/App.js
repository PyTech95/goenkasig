import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import JuniorSchool from "./components/JuniorSchool";
import Difference from "./components/Difference";
import Pillars from "./components/Pillars";
import Infrastructure from "./components/Infrastructure";
import Admissions from "./components/Admissions";
import EventsSection from "./components/EventsSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import EnquiryDialog from "./components/EnquiryDialog";
import TopBar from "./components/TopBar";
import WhatsAppButton from "./components/WhatsAppButton";
import AIAssistant from "./components/AIAssistant";
import { Toaster } from "./components/ui/sonner";

import JuniorSchoolPage from "./components/JuniorSchoolPage";

const Home = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const openEnquire = () => setEnquireOpen(true);

  return (
    <div className="bg-white">
      <TopBar onEnquire={openEnquire} />
      <Header onEnquire={openEnquire} />
      <main>
        <Hero onEnquire={openEnquire} />
        <About />
        <JuniorSchool />
        <Difference />
        <Pillars />
        <Infrastructure />
        <Admissions onEnquire={openEnquire} />
        <EventsSection />
        <Gallery />
      </main>
      <Footer onEnquire={openEnquire} />
      <WhatsAppButton />
      <AIAssistant />
      <EnquiryDialog open={enquireOpen} onOpenChange={setEnquireOpen} />
      <Toaster position="top-center" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/junior-school" element={<JuniorSchoolPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
