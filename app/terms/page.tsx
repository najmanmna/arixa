import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | 10QRX",
  description: "Terms of Service and legally binding agreement for the 10QRX platform.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      {/* ── HEADER ── */}
      <div className="bg-[#01021C] pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-2">
            10Q HOLDINGS LIMITED (Trading as 10QRX)
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-slate-400 text-sm">
            <span>Effective Date: 9 March 2026</span>
            <span className="hidden sm:block">•</span>
            <span>Governing Law: England and Wales</span>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 md:p-16 text-slate-700 leading-relaxed space-y-8">
          
          {/* PREAMBLE */}
          <section className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h2 className="text-lg font-bold text-navy uppercase tracking-wider mb-2">IMPORTANT — READ CAREFULLY</h2>
            <p className="text-sm">
              These Terms constitute a legally binding agreement between you and 10Q Holdings Limited. By accessing or using the Platform, you confirm that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree, you must not use the Platform. These Terms contain limitations of liability, disclaimers, and indemnification obligations that materially affect your rights.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">1. Definitions and Interpretation</h2>
            <p className="mb-4">In these Terms, unless the context requires otherwise:</p>
            <ul className="space-y-3 pl-4 border-l-2 border-teal/20">
              <li><strong>"Company", "we", "us", "our"</strong> means 10Q Holdings Limited (company number 15342137), a private limited company registered in England and Wales, with its registered office at 1 Beauchamp Place, 10 Victors Way, Barnet, United Kingdom, EN5 5TZ, trading as 10QRX. References to the Company include its officers, directors, employees, agents, and affiliates.</li>
              <li><strong>"Platform"</strong> means the 10QRX web application, APIs, mobile applications (where available), dashboards, governance workflows, documentation tools, and all related software, services, and infrastructure provided by the Company, however accessed.</li>
              <li><strong>"Customer", "you", "your"</strong> means any legal entity, pharmacy, clinic, healthcare provider, or individual that accesses or uses the Platform, whether under a paid subscription, trial, demo, or otherwise.</li>
              <li><strong>"Services"</strong> means the workflow orchestration, documentation infrastructure, governance support tools, clinical summary structuring, revenue analytics, and related capabilities provided through the Platform.</li>
              <li><strong>"Clinical Services"</strong> means any clinical activity including but not limited to diagnosing, prescribing, dispensing, treating, advising patients, or making clinical or treatment decisions, all of which are performed exclusively by the Customer or their authorised healthcare professionals and are not provided by the Company.</li>
              <li><strong>"Patient Data"</strong> means any data relating to an identified or identifiable living individual who is a patient or prospective patient of the Customer, including special category data as defined in UK GDPR.</li>
              <li><strong>"Third-Party Services"</strong> means any products, services, or integrations provided by entities other than the Company, including but not limited to London Medical Laboratory (LML), payment processors, telehealth providers, supplement partners, and any other integrated service.</li>
              <li><strong>"Applicable Law"</strong> means all applicable laws, regulations, rules, orders, and guidance of England and Wales and the United Kingdom, including but not limited to UK GDPR, the Data Protection Act 2018, and the Consumer Protection from Unfair Trading Regulations 2008.</li>
              <li><strong>"Regulatory Bodies"</strong> means the General Pharmaceutical Council (GPhC), Care Quality Commission (CQC), Medicines and Healthcare products Regulatory Agency (MHRA), National Institute for Health and Care Excellence (NICE), the Information Commissioner’s Office (ICO), and any other relevant regulatory authority.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">2. Nature of the Platform — Critical Disclaimers</h2>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">2.1 Workflow Infrastructure Only</h3>
            <p className="mb-4">The Platform is a workflow and documentation infrastructure tool. It is designed to support the administrative and operational aspects of regulated clinical environments. The Platform structures data, generates documentation, and provides governance support tools. It does not provide, and must not be construed as providing, any Clinical Services whatsoever.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">2.2 Not a Medical Device</h3>
            <p className="mb-4">The Platform is not a medical device as defined by the Medical Devices Regulations 2002 (SI 2002/618), the EU Medical Devices Regulation (EU 2017/745), or any successor legislation. It is not intended to be used for the diagnosis, prevention, monitoring, prediction, prognosis, treatment, or alleviation of disease. The Platform does not perform any clinical analysis, does not generate clinical recommendations, and does not make or influence clinical decisions. Any structured summaries, data presentations, or workflow outputs generated by the Platform are administrative tools only and do not constitute clinical advice, diagnosis, or treatment recommendations.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">2.3 No Clinical Decision-Making</h3>
            <p className="mb-4">The Platform may present patient data in structured formats to support prescriber review. This structuring is purely administrative. All clinical decisions, including but not limited to eligibility determinations, prescribing decisions, treatment plans, dose adjustments, and patient management, remain the sole and exclusive responsibility of the Customer’s qualified healthcare professionals. The Company does not make, influence, recommend, or endorse any clinical decision. The Customer acknowledges that prescriber autonomy is 100% retained at all times.</p>
            
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 my-6">
              <h3 className="text-lg font-bold text-red-900 mb-2 uppercase tracking-wide">2.4 No Guarantee of Compliance — CRITICAL DISCLAIMER</h3>
              <p className="text-red-800">The Platform provides documentation and workflow tools that are designed to support regulatory alignment. The Platform does not, and cannot, guarantee compliance with any law, regulation, guideline, or requirement of any Regulatory Body. Regulatory compliance is, and remains at all times, the sole and exclusive responsibility of the Customer and its Responsible Pharmacist, Superintendent Pharmacist, Accountable Officer, or equivalent. If a Regulatory Body takes enforcement action, issues sanctions, suspends, restricts, or revokes any licence, registration, or accreditation of the Customer or any of the Customer’s healthcare professionals, the Company shall bear no liability whatsoever for such action, whether or not the Customer was using the Platform at the relevant time.</p>
            </div>

            <h3 className="text-lg font-bold text-navy mt-6 mb-2">2.5 Regulatory Responsibility</h3>
            <p className="mb-4">The Customer is solely responsible for ensuring that its use of the Platform, and all Clinical Services delivered using or in connection with the Platform, comply with all requirements of GPhC, CQC, MHRA, NICE, UK GDPR, the Medicines Act 1968, the Human Medicines Regulations 2012, the Health and Social Care Act 2008 (Regulated Activities) Regulations 2014, and all other Applicable Law. The Company is a technology provider and does not fall within the definition of a regulated healthcare provider for the purposes of direct clinical liability.</p>

            <h3 className="text-lg font-bold text-navy mt-6 mb-2">2.6 No Liability for Regulatory Enforcement</h3>
            <p>Without limiting any other provision of these Terms, the Company shall have no liability whatsoever in respect of any regulatory investigation, enforcement action, prosecution, fine, penalty, sanction, licence suspension, licence revocation, improvement notice, warning notice, or any other regulatory measure taken against the Customer or any of the Customer’s healthcare professionals by any Regulatory Body, government authority, or other body, arising from or in connection with the Customer’s Clinical Services, whether or not the Platform was used in connection with such Clinical Services.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">3. Customer Obligations and Warranties</h2>
            <p className="mb-4">The Customer warrants, represents, and undertakes that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>It is duly registered with all applicable Regulatory Bodies and holds all licences, permits, and accreditations required to operate the Clinical Services it delivers using or in connection with the Platform.</li>
              <li>It employs or contracts with suitably qualified, registered, and insured healthcare professionals who are responsible for all clinical decisions.</li>
              <li>It has appointed a Responsible Pharmacist, Superintendent Pharmacist, or Accountable Officer (as applicable) who retains full statutory responsibility for all Clinical Services.</li>
              <li>It shall not rely on the Platform as a substitute for independent clinical judgement, regulatory compliance assessment, or professional legal advice.</li>
              <li>It shall maintain its own professional indemnity insurance, public liability insurance, and any other insurance required by law or by the relevant Regulatory Bodies, at adequate levels throughout the term of its use of the Platform.</li>
              <li>All Patient Data entered into the Platform is accurate, complete, and lawfully obtained, and that appropriate patient consent has been obtained in accordance with UK GDPR and all Applicable Law.</li>
              <li>It shall comply with all Applicable Law in its use of the Platform, including but not limited to advertising standards, distance selling regulations, and consumer protection legislation.</li>
              <li>It shall conduct its own independent due diligence and regulatory assessment before launching any clinical service, and shall not rely on the Platform’s features or documentation as evidence of regulatory compliance.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">4. Third-Party Services and Integrations</h2>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">4.1 London Medical Laboratory (LML)</h3>
            <p className="mb-4">The Platform may integrate with London Medical Laboratory (“LML”) for blood test ordering and results processing. The Company is not a laboratory, does not conduct any laboratory analysis, and does not guarantee the accuracy, timeliness, or completeness of any laboratory results. LML is an independent third-party provider. Any contractual relationship for laboratory services is between the Customer (or the patient, as applicable) and LML directly. The Company shall have no liability for any errors, omissions, delays, or failures in laboratory services provided by LML, including but not limited to incorrect test results, delayed results, sample handling issues, or any clinical consequences arising therefrom.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">4.2 Payment Processing</h3>
            <p className="mb-4">Payment processing is handled by independent third-party payment processors. The Company is not responsible for payment failures, declined transactions, chargebacks, fraud, data breaches at the payment processor, or any other issues arising from the payment processing services.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">4.3 General Third-Party Disclaimer</h3>
            <p>The Platform may integrate with or reference Third-Party Services. The Company does not control, endorse, or assume responsibility for any Third-Party Services. The Customer’s use of any Third-Party Service is at the Customer’s own risk and is subject to the terms and conditions of the relevant third party. The Company shall have no liability for the acts, omissions, failures, errors, or interruptions of any Third-Party Service.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">5. Performance Metrics, Projections, and Illustrative Figures</h2>
            <p className="mb-4">Any statistics, performance metrics, case studies, projections, revenue calculators, or illustrative figures presented on the Platform, the Website, or in any marketing materials (including but not limited to patient retention rates, clinical review times, operational efficiency gains, revenue projections, and EBITDA uplift models) are:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provided for illustrative purposes only and do not constitute guarantees, warranties, or representations of future performance.</li>
              <li>Based on specific assumptions, conditions, and contexts that may not apply to the Customer’s circumstances.</li>
              <li>Subject to variation based on the Customer’s patient volume, pricing, clinical capacity, staff competency, marketing effectiveness, local market conditions, and numerous other factors outside the Company’s control.</li>
              <li>Not to be construed as financial advice. The Customer should obtain independent financial and business advice before making any commercial decisions based on such figures.</li>
            </ul>
            <p>The Company expressly disclaims any warranty or representation that the Customer will achieve any particular financial result, patient volume, retention rate, or operational outcome.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 & 7 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">6. Intellectual Property</h2>
            <p className="mb-8">All intellectual property rights in the Platform, including but not limited to software, source code, algorithms, workflows, protocol logic, data structures, documentation, training materials, branding, trademarks, trade names (including 10QRX and 10Q Holdings), and all related materials, are and shall remain the exclusive property of the Company. No intellectual property rights are transferred to the Customer under these Terms. The Customer is granted a limited, non-exclusive, non-transferable, revocable licence to use the Platform solely for its internal business purposes during the term of the agreement, subject to these Terms.</p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4">7. Data Protection and Processing</h2>
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">7.1 Controller and Processor Roles</h3>
            <p className="mb-4">In respect of Patient Data processed through the Platform, the Customer is the data controller and the Company is the data processor, as those terms are defined in UK GDPR. The Company shall process Patient Data only on the documented instructions of the Customer and in accordance with a separate Data Processing Agreement (“DPA”) to be entered into between the parties.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">7.2 Customer’s Data Protection Obligations</h3>
            <p className="mb-4">The Customer is solely responsible for ensuring that it has a lawful basis for processing all Patient Data entered into the Platform, that appropriate privacy notices have been provided to patients, that explicit consent has been obtained where required (particularly for special category health data), and that all data subject rights are facilitated in compliance with UK GDPR.</p>

            <h3 className="text-lg font-bold text-navy mt-6 mb-2">7.3 Data Security</h3>
            <p>The Company implements appropriate technical and organisational measures to protect Patient Data as described in our Privacy Policy. However, no system is completely secure. The Company does not warrant that the Platform will be free from security vulnerabilities, breaches, or unauthorised access, and shall not be liable for any data breach except to the extent caused by the Company’s negligent failure to implement the security measures specified in the DPA.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-2">8. Limitation of Liability</h2>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">LIABILITY CAP AND EXCLUSIONS — This section materially affects your rights. Read it carefully.</p>

            <h3 className="text-lg font-bold text-navy mt-6 mb-2">8.1 Exclusion of Consequential Losses</h3>
            <p className="mb-4">To the maximum extent permitted by Applicable Law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, loss of revenue, loss of business, loss of data, loss of goodwill, loss of patients, regulatory fines or penalties, cost of substitute services, or any other intangible losses, arising out of or in connection with the Platform or these Terms, regardless of whether such damages were foreseeable and regardless of whether the Company was advised of the possibility of such damages.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">8.2 Aggregate Liability Cap</h3>
            <p className="mb-4">The Company’s total aggregate liability arising out of or in connection with these Terms, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall not exceed the total fees actually paid by the Customer to the Company in the twelve (12) months immediately preceding the event giving rise to the claim.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">8.3 Specific Exclusions</h3>
            <p className="mb-4">Without limiting the generality of the above, the Company shall have no liability for:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Any clinical outcome, patient harm, adverse event, medication error, misdiagnosis, inappropriate prescribing, or any other clinical matter.</li>
              <li>Any decision made by any healthcare professional, whether or not such decision was informed by data presented through the Platform.</li>
              <li>Any regulatory enforcement action, investigation, sanction, fine, penalty, or licence revocation.</li>
              <li>Any loss arising from the Customer’s failure to comply with Applicable Law or the requirements of any Regulatory Body.</li>
              <li>Any loss arising from the Customer’s failure to maintain adequate insurance.</li>
              <li>Any loss arising from errors, omissions, or failures of Third-Party Services, including LML.</li>
              <li>Any loss arising from the Customer’s reliance on any illustrative figure, projection, or performance metric.</li>
              <li>Any loss arising from unauthorised access to the Platform caused by the Customer’s failure to maintain adequate security practices.</li>
              <li>Any loss of Patient Data except to the extent directly caused by the Company’s proven negligence.</li>
              <li>Any losses arising from service interruptions, downtime, maintenance, or platform unavailability.</li>
            </ul>

            <h3 className="text-lg font-bold text-navy mt-6 mb-2">8.4 Statutory Rights</h3>
            <p>Nothing in these Terms excludes or limits the Company’s liability for death or personal injury caused by its negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by Applicable Law.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">9. Indemnification</h2>
            <p className="mb-4">The Customer shall indemnify, defend, and hold harmless the Company, its directors, officers, employees, agents, licensors, and affiliates from and against any and all claims, actions, proceedings, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising out of or in connection with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The Customer’s Clinical Services, including any patient harm, adverse event, clinical error, or clinical negligence claim.</li>
              <li>The Customer’s breach of any obligation under these Terms.</li>
              <li>The Customer’s failure to comply with Applicable Law or the requirements of any Regulatory Body.</li>
              <li>Any claim by a patient, data subject, or third party arising from the Customer’s use of the Platform.</li>
              <li>Any regulatory investigation, enforcement action, or prosecution arising from the Customer’s Clinical Services.</li>
              <li>Any data protection breach caused by the Customer’s acts or omissions, including failure to obtain lawful consent.</li>
              <li>Any misrepresentation made by the Customer to patients, regulatory bodies, or third parties regarding the Platform’s capabilities or the Company’s role.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">10. Disclaimers of Warranty</h2>
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 text-slate-800 font-medium">
              <p className="uppercase leading-relaxed mb-4">
                THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND SATISFACTORY QUALITY. THE COMPANY DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              <p className="mb-4">
                The Company does not warrant that the Platform will meet the Customer’s specific requirements, that the Platform will be compatible with any particular pharmacy management system, or that any defects will be corrected within any particular timeframe.
              </p>
              <p>
                Any reliance placed by the Customer on any information, data, or output provided by the Platform is entirely at the Customer’s own risk.
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Sections 11 to 13 */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">11. Platform Availability and Service Levels</h2>
              <p className="mb-4">The Company shall use commercially reasonable efforts to maintain the availability of the Platform but does not guarantee any specific uptime or service level. The Platform may be subject to scheduled maintenance, unscheduled maintenance, outages, degraded performance, or interruptions. The Company shall not be liable for any loss arising from the unavailability or reduced performance of the Platform, including during periods when the Customer’s Clinical Services may be affected.</p>
              <p>Implementation timelines (including any reference to being “live in 14 days” or similar) are indicative targets, not contractual commitments. Actual implementation timelines depend on the Customer’s readiness, cooperation, system compatibility, and other factors outside the Company’s control.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">12. Revenue Calculator and Financial Projections</h2>
              <p>The Platform website may include a revenue calculator or similar modelling tool. Any output from such tool is provided for illustrative purposes only and constitutes neither a financial guarantee nor financial advice. The Customer acknowledges that actual financial results depend on numerous variables including patient volume, pricing strategy, conversion rates, clinical capacity, marketing effectiveness, competitive dynamics, regulatory changes, and market conditions. The Company expressly disclaims any responsibility for business decisions made in reliance on calculator outputs, and the Customer should seek independent financial advice before making investment or business decisions.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">13. Rebound Prevention Programme and Clinical Protocols</h2>
              <p>The Platform may incorporate or reference clinical protocols, including the rebound prevention programme designed by Dr. Neesha Patel. These protocols are provided as structured workflow templates and educational resources. They do not constitute medical advice. The Customer and its healthcare professionals remain solely responsible for adapting, applying, and monitoring any protocol in the context of individual patient care. The Company makes no guarantee regarding clinical outcomes, including but not limited to patient retention rates, weight maintenance, or treatment efficacy. Any outcome metrics cited are historical or modelled figures and are not guarantees of future results.</p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">14. Suspension, Termination, and Effect of Termination</h2>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">14.1 Suspension</h3>
            <p className="mb-4">The Company may suspend the Customer’s access to the Platform immediately and without notice if: (a) the Customer breaches any provision of these Terms; (b) the Company reasonably believes the Customer’s use of the Platform poses a risk to patient safety; (c) the Customer fails to pay any fees when due; (d) the Company is required to do so by Applicable Law or any Regulatory Body; or (e) the Company reasonably suspects fraudulent or unlawful activity.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">14.2 Termination</h3>
            <p className="mb-4">Either party may terminate the agreement by giving written notice as specified in the applicable commercial agreement. In the absence of a specific commercial agreement, either party may terminate with 30 days’ written notice. The Company may terminate immediately if the Customer commits a material breach that is not remedied within 14 days of written notice.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">14.3 Effect of Termination</h3>
            <p>Upon termination: (a) the Customer’s licence to use the Platform shall immediately cease; (b) the Customer shall ensure it has exported all necessary data before termination takes effect; (c) the Company shall delete or return Customer data in accordance with the DPA; (d) all accrued rights, obligations, and liabilities shall survive termination; and (e) the provisions of these Terms that by their nature should survive termination shall continue in full force and effect, including but not limited to Sections 2 (Nature of Platform), 6 (Intellectual Property), 8 (Limitation of Liability), 9 (Indemnification), 10 (Disclaimers), and 16 (Governing Law).</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">15. General Provisions</h2>
            <div className="space-y-4">
              <p><strong>15.1 Entire Agreement:</strong> These Terms, together with any applicable commercial agreement and DPA, constitute the entire agreement between the parties in relation to the subject matter hereof and supersede all prior negotiations, representations, warranties, and agreements.</p>
              <p><strong>15.2 Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be replaced by a valid provision that most closely approximates the economic intent of the invalid provision.</p>
              <p><strong>15.3 No Waiver:</strong> No failure or delay by the Company in exercising any right or remedy shall operate as a waiver thereof. A single or partial exercise of any right or remedy does not preclude further exercise of that or any other right or remedy.</p>
              <p><strong>15.4 Assignment:</strong> The Customer may not assign or transfer any rights or obligations under these Terms without the prior written consent of the Company. The Company may assign these Terms to any affiliate or in connection with a merger, acquisition, or sale of all or substantially all of its assets.</p>
              <p><strong>15.5 Force Majeure:</strong> The Company shall not be liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond its reasonable control, including but not limited to acts of God, pandemic, fire, flood, government action, war, terrorism, cyber attack, power failure, internet failure, or failure of Third-Party Services.</p>
              <p><strong>15.6 Notices:</strong> All notices under these Terms shall be in writing and sent to hello@10qrx.com or such other address as the Company may notify from time to time.</p>
              <p><strong>15.7 No Partnership or Agency:</strong> Nothing in these Terms creates a partnership, joint venture, employment relationship, or agency between the parties. Neither party has authority to bind the other.</p>
              <p><strong>15.8 Third-Party Rights:</strong> A person who is not a party to these Terms has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any provision of these Terms.</p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 16 & 17 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">16. Governing Law and Jurisdiction</h2>
            <p className="mb-8">These Terms are governed by and construed in accordance with the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction over any dispute arising out of or in connection with these Terms, including any question regarding their existence, validity, or termination.</p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4">17. Changes to These Terms</h2>
            <p>The Company reserves the right to modify these Terms at any time. Material changes will be notified to the Customer via email or through the Platform. Continued use of the Platform after notification constitutes acceptance of the modified Terms. If the Customer does not agree to any modification, its sole remedy is to cease using the Platform and terminate the agreement in accordance with Section 14.</p>
          </section>

        </div>
        
        {/* Footer Meta */}
        <div className="text-center mt-8 text-sm text-slate-400">
          <p>Last updated: 9 March 2026</p>
          <p>10Q Holdings Limited — London, UK — hello@10qrx.com</p>
        </div>
      </div>
    </main>
  );
}