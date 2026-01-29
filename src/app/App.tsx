import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { PortfolioPage } from './components/PortfolioPage';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Admin } from './admin/Admin';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { SEO, SEOConfigs } from './components/SEO';
import { DynamicFavicons } from './components/DynamicFavicons';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation helper
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Check routes - SEO-friendly URLs with multiple variations
  const isAdminRoute = currentPath === '/admin' || currentPath === '/admin/';
  
  // Privacy Policy - support multiple SEO-friendly variations
  const isPrivacyRoute = 
    currentPath === '/privacy-policy' || currentPath === '/privacy-policy/' ||
    currentPath === '/privacy' || currentPath === '/privacy/';
  
  // Terms of Service - support multiple SEO-friendly variations
  const isTermsRoute = 
    currentPath === '/terms-of-service' || currentPath === '/terms-of-service/' ||
    currentPath === '/terms-of-services' || currentPath === '/terms-of-services/' ||
    currentPath === '/terms' || currentPath === '/terms/';

  // Portfolio page route - /portfolio
  const isPortfolioRoute = currentPath === '/portfolio' || currentPath === '/portfolio/';

  // Project detail route - matches /project/:id or /projects/:id
  const projectMatch = currentPath.match(/^\/(project|projects)\/([^\\/]+)\/?$/);
  const projectId = projectMatch ? projectMatch[2] : null;

  if (isAdminRoute) {
    return <Admin />;
  }

  if (isPrivacyRoute) {
    return (
      <>
        <SEO {...SEOConfigs.privacy} />
        <PrivacyPolicy />
      </>
    );
  }

  if (isTermsRoute) {
    return (
      <>
        <SEO {...SEOConfigs.terms} />
        <TermsOfService />
      </>
    );
  }

  if (isPortfolioRoute) {
    return (
      <>
        <SEO 
          title="Portfolio - NdevDigital | Our Projects & Case Studies"
          description="Explore our portfolio of successful projects including web development, mobile apps, UI/UX design, and SaaS products."
        />
        <DynamicFavicons />
        <PortfolioPage />
      </>
    );
  }

  if (projectId) {
    return (
      <>
        <SEO 
          title={`Project Details - NdevDigital`}
          description="Explore our project case study and learn about our development process, challenges, and solutions."
        />
        <DynamicFavicons />
        <ProjectDetail 
          projectId={projectId}
          onBack={() => navigateTo('/portfolio')}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO {...SEOConfigs.home} />
      <DynamicFavicons />
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <About />
        <Portfolio onViewAll={() => navigateTo('/portfolio')} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}