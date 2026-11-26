import { useEffect, useState } from 'react';
import { Admin } from './admin/Admin';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { SEO, SEOConfigs } from './components/SEO';
import { DynamicFavicons } from './components/DynamicFavicons';
import { HomePage } from './site/pages/HomePage';
import { ConsultingPage } from './site/pages/ConsultingPage';
import { DeliveryPage } from './site/pages/DeliveryPage';
import { AugmentationPage } from './site/pages/AugmentationPage';
import { WorkPage } from './site/pages/WorkPage';
import { CaseStudyPage } from './site/pages/CaseStudyPage';
import { CaseStudyIziPage } from './site/pages/CaseStudyIziPage';
import { CaseStudyExcelliaPage } from './site/pages/CaseStudyExcelliaPage';
import { CaseStudyEndataoPage } from './site/pages/CaseStudyEndataoPage';
import { CaseStudyVenariPage } from './site/pages/CaseStudyVenariPage';
import { CaseStudyGazelecPage } from './site/pages/CaseStudyGazelecPage';
import { CaseStudyScheidtPage } from './site/pages/CaseStudyScheidtPage';
import { CaseStudyDatascientistPage } from './site/pages/CaseStudyDatascientistPage';
import { AboutPage } from './site/pages/AboutPage';
import { FlashAuditPage } from './site/pages/FlashAuditPage';
import { ContactPage } from './site/pages/ContactPage';
import { AcademyPage } from './site/pages/AcademyPage';
import { ProductsPage } from './site/pages/ProductsPage';
import { ProductSlotBookingPage } from './site/pages/ProductSlotBookingPage';
import { ProductSlotBookingDocsPage } from './site/pages/ProductSlotBookingDocsPage';
import { ProductSlotBookingSupportPage } from './site/pages/ProductSlotBookingSupportPage';
import { TrainingPage } from './site/pages/TrainingPage';
import { findTraining } from './site/trainings';

const BASE = 'https://ndev.digital';

type Route = { element: JSX.Element; title: string; description: string; path: string };

function normalise(path: string) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path || '/';
}

function resolve(rawPath: string): Route | null {
  const path = normalise(rawPath);
  const r = (element: JSX.Element, title: string, description: string): Route => ({ element, title, description, path });

  switch (path) {
    case '/':
      return r(<HomePage />, 'NDev Digital | Product studio: product vision, UX and delivery',
        'NDev Digital shapes, designs and builds products people adopt. Product consulting, product delivery (web, SaaS, mobile) and team augmentation, with product vision and UX at the core. Tunis · Europe.');
    case '/consulting':
      return r(<ConsultingPage />, 'Product Consulting | NDev Digital',
        'Product vision, discovery, UX research and audit, roadmap, process improvement, AI adoption and transformation coaching.');
    case '/delivery':
      return r(<DeliveryPage />, 'Product Delivery | NDev Digital',
        'We design and build web platforms, SaaS products and mobile apps end to end, always starting from product vision and UX.');
    case '/team-augmentation':
      return r(<AugmentationPage />, 'Team Augmentation | NDev Digital',
        'Senior product managers, product designers, UX researchers and developers embedded in your teams, with the NDev method behind them.');
    case '/work':
    case '/portfolio':
      return r(<WorkPage />, 'Work | NDev Digital',
        'Products and engagements for banks, fintechs, platforms and media: Zitouna Bank, IZI by Zitouna Payment, Scheidt & Bachmann Group, Excellia Solutions and more.');
    case '/work/zitouna-bank-kyc':
      return r(<CaseStudyPage />, 'Zitouna Bank: digital KYC onboarding | NDev Digital',
        'How NDev Digital helped Zitouna Bank digitise its KYC onboarding: audit, discovery, journey design, UX/UI and design system.');
    case '/work/venari-security':
      return r(<CaseStudyVenariPage />, 'Venari Security: UX/UI for security platforms | NDev Digital',
        'A dedicated NDev UX/UI expert on Venari Security’s platforms: UX research with the team, business alignment, UX/UI, design system and design through delivery.');
    case '/work/gaz-elec-moins-cher':
      return r(<CaseStudyGazelecPage />, 'Gaz Elec Moins Cher: business energy contracts platform | NDev Digital',
        'How NDev Digital designed the Gaz Elec Moins Cher platform for French businesses: UX research, business alignment, UX/UI, design system and design through delivery.');
    case '/work/scheidt-bachmann':
      return r(<CaseStudyScheidtPage />, 'Scheidt & Bachmann: training and coaching a platform redesign | NDev Digital',
        'NDev Digital trained and coached the Scrum Master, lead developer and design team of Scheidt & Bachmann Group to redesign their platform and its design system.');
    case '/work/datascientist-fr':
      return r(<CaseStudyDatascientistPage />, 'Datascientist.fr: UX/UI for a data science e-learning platform | NDev Digital',
        'UX/UI design for Datascientist.fr, a new e-learning platform specialised in data science: UX research, business alignment, UX/UI, design system and design through delivery.');
    case '/work/endatao-wallet':
      return r(<CaseStudyEndataoPage />, 'Endatao: mobile wallet app designed from scratch | NDev Digital',
        'A dedicated NDev UX/UI expert designed the Endatao wallet app from scratch: UX research with the team, business alignment, UX/UI, design system and design through delivery.');
    case '/work/excellia-solutions':
      return r(<CaseStudyExcelliaPage />, 'Excellia Solutions: UX/UI for trading and fintech products | NDev Digital',
        'A dedicated NDev UX/UI expert on Excellia Solutions’ trading and fintech products: UX research, business alignment, UX workshops, UI design and design system.');
    case '/work/zitouna-payment-izi':
      return r(<CaseStudyIziPage />, 'Zitouna Payment IZI: payment web portal | NDev Digital',
        'How NDev Digital shaped IZI, Zitouna Payment’s payment web portal: UX research, business alignment, UX workshops, UI design and design system.');
    case '/about':
      return r(<AboutPage />, 'About | NDev Digital',
        'NDev Digital is a product studio based in Tunis bringing product management, UX and engineering together in one team.');
    case '/flash-audit':
      return r(<FlashAuditPage />, 'Product & UX Flash Audit | NDev Digital',
        'In 5 days, a prioritised plan of quick wins and structural fixes for your product and UX, presented live to your team. Fixed price.');
    case '/contact':
      return r(<ContactPage />, 'Contact | NDev Digital',
        'Tell us about your product. Email contact@ndev.digital or call +216 54 882 779. We reply within one business day.');
    case '/products':
      return r(<ProductsPage />, 'Products | NDev Digital',
        'Creative AI-augmented apps and useful tools designed and built by NDev Digital, including NDev Slot Booking.');
    case '/products/slot-booking/docs':
      return r(<ProductSlotBookingDocsPage />, 'NDev Slot Booking documentation | NDev Digital',
        'Install and configure NDev Slot Booking: opening hours, offers, extras, wording, placing the form, managing bookings, calendar sync and emails.');
    case '/products/slot-booking/support':
      return r(<ProductSlotBookingSupportPage />, 'NDev Slot Booking support | NDev Digital',
        'Get help with NDev Slot Booking: what support covers, response times and a form to open a support request.');
    case '/products/slot-booking':
      return r(<ProductSlotBookingPage />, 'NDev Slot Booking: time-slot booking for WordPress | NDev Digital',
        'Let visitors book a coworking desk, a meeting room, a studio or equipment on your WordPress site. Offers, extras, approval and calendar sync.');
    case '/academy':
      return r(<AcademyPage />, 'Sprint Academy | Product, Scrum, UX, QA, cybersecurity and AI trainings',
        'NDev Sprint Academy trains teams and professionals in product management, product ownership, Scrum, UX in Scrum teams, QA, cybersecurity and AI engineering.');
  }

  if (path.startsWith('/academy/')) {
    const slug = path.slice('/academy/'.length);
    const t = findTraining(slug);
    if (t) return r(<TrainingPage slug={slug} />, `${t.title} training | Sprint Academy`, t.desc);
  }
  if (path.startsWith('/project/') || path.startsWith('/projects/')) {
    return r(<WorkPage />, 'Work | NDev Digital', 'Products and engagements by NDev Digital.');
  }
  return null;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPop);

    // Client-side navigation for internal links
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//') || a.target || a.hasAttribute('download')) return;
      e.preventDefault();
      const url = new URL(href, window.location.origin);
      if (url.pathname + url.hash === window.location.pathname + window.location.hash) return;
      window.history.pushState({}, '', url.pathname + url.hash);
      setCurrentPath(url.pathname);
      if (!url.hash) window.scrollTo(0, 0);
    };
    document.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('click', onClick);
    };
  }, []);

  // Scroll to hash target after navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
    return () => clearTimeout(t);
  }, [currentPath]);

  const p = normalise(currentPath);

  if (p === '/admin') return <Admin />;

  if (p === '/privacy-policy' || p === '/privacy') {
    return (
      <>
        <SEO {...SEOConfigs.privacy} />
        <PrivacyPolicy />
      </>
    );
  }

  if (p === '/terms-of-service' || p === '/terms-of-services' || p === '/terms') {
    return (
      <>
        <SEO {...SEOConfigs.terms} />
        <TermsOfService />
      </>
    );
  }

  const route = resolve(p) ?? resolve('/')!;

  return (
    <>
      <SEO title={route.title} description={route.description} url={BASE + (route.path === '/' ? '/' : route.path)} />
      <DynamicFavicons />
      {route.element}
    </>
  );
}
