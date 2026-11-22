import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { Nav } from '../site/Nav';
import { Footer } from '../site/Footer';
import { useEffect } from 'react';

export function PrivacyPolicy() {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Privacy Policy | NDev Digital';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read NDev Digital\'s Privacy Policy to understand how we collect, use, and protect your personal information.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read NDev Digital\'s Privacy Policy to understand how we collect, use, and protect your personal information.';
      document.head.appendChild(meta);
    }

    // Cleanup: restore original title when component unmounts
    return () => {
      document.title = 'NDev Digital | Professional Digital Solutions';
    };
  }, []);

  return (
    <div className="nd-page" style={{ fontFamily: "Inter, system-ui, sans-serif", background: "#F7F3EC", color: "#1B1F2A", minHeight: "100vh" }}>
      <Nav />

      {/* Main Content */}
      <div className="mx-auto px-6 py-16 md:py-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-[#E4DCCF]"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#FBEFD9] border border-[#EEDDBF] flex items-center justify-center shrink-0">
              <Shield className="text-[#B45309]" size={26} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl text-[#1B1F2A]" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, letterSpacing: '-0.8px' }}>
                Privacy Policy
              </h1>
              <p className="text-[#6B7180] mt-2">Last updated: January 10, 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-none">
            <div className="space-y-8 text-[#4A5160]">
              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>1. Introduction</h2>
                <p className="leading-relaxed">
                  Welcome to NDev Digital. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our 
                  website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>2. Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We may collect, use, store and transfer different kinds of personal data about you which we have 
                  grouped together as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-[#1B1F2A]">Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong className="text-[#1B1F2A]">Contact Data:</strong> includes billing address, email address and telephone numbers.</li>
                  <li><strong className="text-[#1B1F2A]">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                  <li><strong className="text-[#1B1F2A]">Usage Data:</strong> includes information about how you use our website, products and services.</li>
                  <li><strong className="text-[#1B1F2A]">Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and your communication preferences.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your 
                  personal data in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To provide you with news, special offers and general information about other services which we offer</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>4. Data Security</h2>
                <p className="leading-relaxed">
                  We have put in place appropriate security measures to prevent your personal data from being 
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
                  we limit access to your personal data to those employees, agents, contractors and other third 
                  parties who have a business need to know.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>5. Data Retention</h2>
                <p className="leading-relaxed">
                  We will only retain your personal data for as long as necessary to fulfil the purposes we 
                  collected it for, including for the purposes of satisfying any legal, accounting, or reporting 
                  requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>6. Your Legal Rights</h2>
                <p className="leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your 
                  personal data, including the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>7. Cookies</h2>
                <p className="leading-relaxed">
                  Our website uses cookies to distinguish you from other users of our website. This helps us to 
                  provide you with a good experience when you browse our website and also allows us to improve our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>8. Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our website may include links to third-party websites, plug-ins and applications. Clicking on 
                  those links or enabling those connections may allow third parties to collect or share data about 
                  you. We do not control these third-party websites and are not responsible for their privacy statements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>9. Changes to This Privacy Policy</h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>10. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="mt-4 p-4 bg-[#FBF5EA] rounded-lg border border-[#EEDDBF]">
                  <p className="text-[#1B1F2A]">
                    <strong>Email:</strong> contact@ndev.digital<br />
                    <strong>Address:</strong> Immeuble Tamayouz 1082 Centre Urbain Nord-Tunis
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}