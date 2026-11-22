import logoZitounaBank from '../../assets/clients/zitouna-bank.webp';
import logoIzi from '../../assets/clients/izi.webp';
import logoScheidt from '../../assets/clients/scheidt-bachmann.webp';
import logoQuranCircle from '../../assets/clients/quran-circle.svg';
import logoEndatao from '../../assets/clients/endatao.svg';
import logoGazelec from '../../assets/clients/gazelec.svg';
import logoDatascientist from '../../assets/clients/datascientist.svg';
import logoExcelliaInk from '../../assets/clients/excellia-ink.svg';
import logoAmarisInk from '../../assets/clients/amaris-ink.webp';
import logoCodezysInk from '../../assets/clients/codezys-ink.webp';
import logoVenariInk from '../../assets/clients/venari-ink.webp';

export const PROJECTS = [
      { model: 'Consulting + Delivery', key: 'Consulting Delivery', industry: 'Banking', title: 'Zitouna Bank · Digital KYC', brand: 'Banque Zitouna', logo: logoZitounaBank, dark: false, href: '/work/zitouna-bank-kyc', desc: 'Digitising customer onboarding for one of Tunisia’s leading Islamic banks.', result: '' },
      { model: 'Consulting + Delivery', key: 'Consulting Delivery', industry: 'Payments', title: 'Zitouna Payment · IZI', brand: 'IZI', logo: logoIzi, dark: false, href: '/work/zitouna-payment-izi', desc: 'UX/UI and design system for IZI, Zitouna Payment’s web portal.', result: '' },
      { model: 'Augmentation + Consulting', key: 'Augmentation Consulting', industry: 'Fintech', title: 'Excellia Solutions', brand: 'Excellia Solutions', logo: logoExcelliaInk, dark: false, href: '/work/excellia-solutions', desc: 'A dedicated UX/UI expert on several trading and fintech products: UX research, work with the business, workshops, UI and design system.', result: '' },
      { model: 'Augmentation + Consulting', key: 'Augmentation Consulting', industry: 'Fintech', title: 'Endatao · Wallet app', brand: 'Endatao', logo: logoEndatao, dark: false, href: '/work/endatao-wallet', desc: 'A mobile wallet app designed from scratch with the Endatao team, from UX research to delivery.', result: '' },
      { model: 'Augmentation + Consulting', key: 'Augmentation Consulting', industry: 'Security', title: 'Venari Security', brand: 'Venari Security', logo: logoVenariInk, dark: false, href: '/work/venari-security', desc: 'A dedicated UX/UI expert on their security platforms, from UX research to delivery.', result: '' },
      { model: 'Consulting', key: 'Consulting', industry: 'Mobility', title: 'Scheidt & Bachmann Group', brand: 'Scheidt & Bachmann', logo: logoScheidt, dark: false, href: '/work/scheidt-bachmann', desc: 'Training and coaching for their Scrum Master, lead developer and design team to redesign their platform and its design system.', result: '' },
      { model: 'Consulting', key: 'Consulting', industry: 'Consulting', title: 'Amaris Consulting', brand: 'Amaris Consulting', logo: logoAmarisInk, dark: false, href: '', desc: 'UX expertise and consulting for Amaris Consulting’s digital projects.', result: '' },
      { model: 'Consulting', key: 'Consulting', industry: 'E-learning', title: 'Datascientist.fr', brand: 'DataScientist.fr', logo: logoDatascientist, dark: false, href: '/work/datascientist-fr', desc: 'UX/UI design for a new e-learning platform specialised in data science, from UX research to delivery.', result: '' },
      { model: 'Consulting', key: 'Consulting', industry: 'Brand', title: 'Codezys', brand: 'Codezys', logo: logoCodezysInk, dark: false, href: '', desc: 'Branding and graphic design consulting.', result: '' },
      { model: 'Delivery', key: 'Delivery', industry: 'Faith & education', title: 'Quran Circle', brand: 'Quran Circle', logo: logoQuranCircle, dark: false, href: 'https://qurancircle.net/', desc: 'Design and development of a distraction-free platform to read, memorise and complete the Quran, with personal tracking and circle goals.', result: '' },
      { model: 'Delivery', key: 'Delivery', industry: 'Energy', title: 'Gaz Elec Moins Cher', brand: 'Gaz Elec Moins Cher', logo: logoGazelec, dark: false, href: '/work/gaz-elec-moins-cher', desc: 'UX/UI for a platform helping French businesses optimise their gas and electricity contracts.', result: '' },
      { model: 'Delivery', key: 'Delivery', industry: 'E-learning', title: 'Tiki Learning', brand: 'Tiki Learning', logo: '', dark: false, href: '', desc: 'Learning management platform connecting trainees, trainers and companies in one ecosystem.', result: '' }
    ].map((c) => ({ ...c, hasResult: c.result !== '', hasShot: !!c.shot, noShot: !c.shot, hasLogo: c.logo !== '', noLogo: c.logo === '', bg: c.dark ? '#24211D' : '#F3EEE6', fg: c.dark ? '#1B1F2A' : '#0F172A', href: c.href || undefined, target: c.href && c.href.indexOf('http') === 0 ? '_blank' : undefined, rel: c.href && c.href.indexOf('http') === 0 ? 'noopener noreferrer' : undefined }));
