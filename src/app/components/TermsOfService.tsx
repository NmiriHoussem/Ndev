import { motion } from 'motion/react';
import { FileText, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export function TermsOfService() {
  const navigateHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Terms of Service | NdevDigital';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read NdevDigital\'s Terms of Service to understand the rules and guidelines for using our services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Read NdevDigital\'s Terms of Service to understand the rules and guidelines for using our services.';
      document.head.appendChild(meta);
    }

    // Cleanup: restore original title when component unmounts
    return () => {
      document.title = 'NdevDigital | Professional Digital Solutions';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#0F0F1A] to-[#1A1A2E]">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <motion.button
          onClick={navigateHome}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
          whileHover={{ x: -4 }}
        >
          <ArrowLeft size={20} className="group-hover:text-purple-400 transition-colors" />
          Back to Home
        </motion.button>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <FileText className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-gray-400 mt-2">Last updated: January 10, 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-purple max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using NdevDigital's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                  prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
                <p className="leading-relaxed mb-4">
                  NdevDigital provides the following services:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>UI/UX Design</li>
                  <li>Web Development</li>
                  <li>Branding and Design</li>
                  <li>Product Management</li>
                  <li>SaaS Product Development</li>
                  <li>Interactive E-learning Educational Content</li>
                  <li>Game Development</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time 
                  without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on NdevDigital's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                  and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on NdevDigital's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Project Engagement</h2>
                <p className="leading-relaxed mb-4">
                  When engaging NdevDigital for project work:
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
                <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
                <p className="leading-relaxed mb-4">
                  <strong className="text-white">Client-Owned Work:</strong> Upon full payment, clients will own the 
                  final deliverables as specified in the project agreement.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong className="text-white">NdevDigital Rights:</strong> We retain the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Display completed work in our portfolio</li>
                  <li>Use project work as case studies (with client permission)</li>
                  <li>Retain ownership of any pre-existing intellectual property, tools, or frameworks</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Payment Terms</h2>
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
                <h2 className="text-2xl font-semibold text-white mb-4">7. Confidentiality</h2>
                <p className="leading-relaxed">
                  Both parties agree to keep confidential any proprietary information shared during the course of 
                  the project. This includes business strategies, technical data, customer information, and any 
                  other information marked as confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Warranties and Disclaimers</h2>
                <p className="leading-relaxed mb-4">
                  <strong className="text-white">Limited Warranty:</strong> We warrant that services will be performed 
                  in a professional and workmanlike manner.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-white">Disclaimer:</strong> The materials on NdevDigital's website are 
                  provided on an 'as is' basis. NdevDigital makes no warranties, expressed or implied, and hereby 
                  disclaims and negates all other warranties including, without limitation, implied warranties or 
                  conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                  property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  In no event shall NdevDigital or its suppliers be liable for any damages (including, without 
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                  the use or inability to use our services, even if NdevDigital or an authorized representative has 
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
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
                <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Tunisia, 
                  and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to revise these terms of service at any time without notice. By using our 
                  services, you are agreeing to be bound by the current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Information</h2>
                <p className="leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-white">
                    <strong>Email:</strong> contact@ndev.digital<br />
                    <strong>Address:</strong> Immeuble Tamayouz 1082 Centre Urbain Nord-Tunis
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}