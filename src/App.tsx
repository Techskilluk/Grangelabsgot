import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { MainCard } from './components/MainCard';
import { AISolutionsSection } from './components/solutions/AISolutionsSection';
import { ResourcesHub } from './components/resources/ResourcesHub';
import { Footer } from './components/Footer';
import { AISolutions } from './pages/AISolutions';
import { AITemplates } from './pages/AITemplates';
import { BlogAndVideos } from './pages/BlogAndVideos';
import { Careers } from './pages/Careers';
import { LearnMore } from './pages/LearnMore';
import { Events } from './pages/Events';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <MainCard />
              <AISolutionsSection />
              <ResourcesHub />
            </main>
          } />
          <Route path="/solutions" element={<AISolutions />} />
          <Route path="/templates" element={<AITemplates />} />
          <Route path="/blog" element={<BlogAndVideos />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/learn" element={<LearnMore />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;