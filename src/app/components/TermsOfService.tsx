import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { Nav } from '../site/Nav';
import { Footer } from '../site/Footer';
import { useEffect } from 'react';

export function TermsOfService() {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Terms of Service | NDev Digital';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read NDev Digital\'s Terms of Service to understand the rules and guidelines for using our services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read NDev Digital\'s Terms of Service to understand the rules and guidelines for using our services.';
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
              <FileText className="text-[#B45309]" size={26} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl text-[#1B1F2A]" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500, letterSpacing: '-0.8px' }}>
                Terms of Service
              </h1>
              <p className="text-[#6B7180] mt-2">Last updated: January 10, 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-none">
            <div className="space-y-8 text-[#4A5160]">
              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using NDev Digital’s services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                  prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>2. Services Description</h2>
                <p className="leading-relaxed mb-4">
                  NDev Digital provides the following services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Product Consulting: product vision, discovery, roadmap, UX audits and AI adoption coaching</li>
                  <li>Product Delivery: design and development of web platforms, SaaS products and mobile apps</li>
                  <li>Team Augmentation: product managers, designers and developers joining client teams</li>
                  <li>Training through NDev Sprint Academy</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time 
                  without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>3. Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on NDev Digital’s website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on NDev Digital’s website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>4. Project Engagement</h2>
                <p className="leading-relaxed mb-4">
                  When engaging NDev Digital for project work:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All projects require a signed agreement or statement of work</li>
                  <li>Payment terms will be outlined in the project agreement</li>
                  <li>Project timelines are estimates and may be subject to change</li>
                  <li>Client must provide necessary materials and feedback in a timely manner</li>
                  <li>Scope changes may result in additional fees and timeline adjustments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>5. Intellectual Property</h2>
                <p className="leading-relaxed mb-4">
                  <strong className="text-[#1B1F2A]">Client-Owned Work:</strong> Upon full payment, clients will own the 
                  final deliverables as specified in the project agreement.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong className="text-[#1B1F2A]">NDev Digital Rights:</strong> We retain the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Display completed work in our portfolio</li>
                  <li>Use project work as case studies (with client permission)</li>
                  <li>Retain ownership of any pre-existing intellectual property, tools, or frameworks</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>6. Payment Terms</h2>
                <p className="leading-relaxed mb-4">
                  Unless otherwise specified in the project agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment schedules will be outlined in project agreements</li>
                  <li>Late payments may incur additional fees</li>
                  <li>Work may be suspended for non-payment</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>7. Confidentiality</h2>
                <p className="leading-relaxed">
                  Both parties agree to keep confidential any proprietary information shared during the course of 
                  the project. This includes business strategies, technical data, customer information, and any 
                  other information marked as confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>8. Warranties and Disclaimers</h2>
                <p className="leading-relaxed mb-4">
                  <strong className="text-[#1B1F2A]">Limited Warranty:</strong> We warrant that services will be performed 
                  in a professional and workmanlike manner.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[#1B1F2A]">Disclaimer:</strong> The materials on NDev Digital’s website are 
                  provided on an 'as is' basis. NDev Digital makes no warranties, expressed or implied, and hereby 
                  disclaims and negates all other warranties including, without limitation, implied warranties or 
                  conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                  property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>9. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  In no event shall NDev Digital or its suppliers be liable for any damages (including, without 
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                  the use or inability to use our services, even if NDev Digital or an authorized representative has 
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>10. Termination</h2>
                <p className="leading-relaxed mb-4">
                  Either party may terminate a project engagement:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With written notice as specified in the project agreement</li>
                  <li>Immediately for material breach of these terms</li>
                  <li>Upon completion of the project deliverables</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Upon termination, client shall pay for all work completed up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>11. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Tunisia, 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>12. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to revise these terms of service at any time without notice. By using our 
                  services, you are agreeing to be bound by the current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl text-[#1B1F2A] mb-4" style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}>13. Contact Information</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
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