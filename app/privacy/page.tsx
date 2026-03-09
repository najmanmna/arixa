import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 10QRX",
  description: "Privacy Policy and Data Protection guidelines for 10QRX, compliant with UK GDPR & Data Protection Act 2018.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      {/* ── HEADER ── */}
      <div className="bg-[#01021C] pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-2">
            10Q HOLDINGS LIMITED (Trading as 10QRX)
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-slate-400 text-sm">
            <span>Effective Date: 9 March 2026</span>
            <span className="hidden sm:block">•</span>
            <span>Framework: UK GDPR & DPA 2018</span>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12 md:p-16 text-slate-700 leading-relaxed space-y-8">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">1. Who We Are</h2>
            <p className="mb-4">
              <strong>10Q Holdings Limited</strong> (company number 15342137), trading as <strong>10QRX</strong> (“Company”, “we”, “us”, “our”), is a private limited company registered in England and Wales with its registered office at 1 Beauchamp Place, 10 Victors Way, Barnet, United Kingdom, EN5 5TZ. We operate the 10QRX platform (the “Platform”), a workflow and documentation infrastructure designed to support UK pharmacies and clinics in delivering regulated clinical services.
            </p>
            <p className="mb-4">For the purposes of data protection law, our role depends on the context:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>When we process data about our business customers (pharmacies, clinics, and their staff), we are the <strong>data controller</strong>.</li>
              <li>When we process patient data on behalf of our customers through the Platform, we are the <strong>data processor</strong>, acting on the instructions of the customer who is the data controller.</li>
            </ul>
            <p><strong>Data Protection Contact:</strong> <a href="mailto:hello@10qrx.com" className="text-teal hover:text-teal-dark underline transition-colors">hello@10qrx.com</a></p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">2. Data We Collect</h2>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">2.1 Business Customer Data (Controller)</h3>
            <p className="mb-4">When pharmacies, clinics, or healthcare providers engage with us, we may collect: contact details (name, email, phone, address), business information (company name, registration numbers, regulatory identifiers), financial information (billing details, payment records), usage data (how you interact with the Platform), and communications (emails, demo requests, support queries).</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">2.2 Patient Data (Processor)</h3>
            <p className="mb-4">When our customers use the Platform to manage patient journeys, the Platform may process the following categories of patient data on behalf of the customer: identity data (name, date of birth, NHS number where applicable), contact data (address, email, phone), health data (medical history, current medications, blood test results, BMI, weight records, clinical assessments, prescribing records), consent records, and payment data for patient transactions. This data constitutes special category data under UK GDPR Article 9. We process this data solely as a data processor on the instructions of our customers.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">2.3 Website Visitor Data</h3>
            <p>When you visit our website, we may collect: technical data (IP address, browser type, device type, operating system), usage data (pages visited, time spent, referral source), and any data you voluntarily provide through contact forms or demo booking requests.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">3. How We Use Data</h2>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">3.1 Business Customer Data</h3>
            <p className="mb-4">We use business customer data for: performing and managing your contract with us (Article 6(1)(b) UK GDPR), communicating with you about the Platform and Services, billing and payment processing, providing technical support, improving our Platform and Services (legitimate interests, Article 6(1)(f)), and complying with legal obligations (Article 6(1)(c)).</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">3.2 Patient Data</h3>
            <p className="mb-4">We process patient data only on the documented instructions of our business customers and only for the purposes of providing the Platform services, which include: structuring patient intake and assessment workflows, presenting clinical data in structured formats, facilitating blood test ordering and results processing via LML, generating documentation and audit trails, and supporting the customer’s compliance and reporting requirements. We do not use patient data for our own purposes, do not sell patient data, and do not use patient data for marketing, profiling, or automated decision-making.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">3.3 Website Visitor Data</h3>
            <p>We use website visitor data for: operating and improving our website, analysing usage patterns, and responding to your enquiries. Our lawful basis is legitimate interests (Article 6(1)(f)) or consent where required for cookies and similar technologies.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">4. Who We Share Data With</h2>
            <p className="mb-4">We may share data with the following categories of recipients:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>London Medical Laboratory (LML):</strong> For processing blood test orders and results on behalf of our customers. LML operates as a separate data controller for the laboratory services it provides.</li>
              <li><strong>Payment processors:</strong> For handling financial transactions.</li>
              <li><strong>Cloud hosting providers:</strong> Our Platform is hosted on UK-based cloud infrastructure. These providers process data on our behalf under appropriate data processing agreements.</li>
              <li><strong>Professional advisers:</strong> Our legal, accounting, and compliance advisers, as necessary.</li>
              <li><strong>Regulatory authorities:</strong> Where required by law or regulation.</li>
              <li><strong>Law enforcement:</strong> Where required by a court order, subpoena, or other legal obligation.</li>
            </ul>
            <p>We do not sell personal data. We do not share personal data for advertising or marketing purposes with third parties.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 & 6 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">5. International Data Transfers</h2>
            <p className="mb-8">We primarily process data within the United Kingdom. Where data is transferred outside the UK, we ensure appropriate safeguards are in place, including UK International Data Transfer Agreements (IDTAs), standard contractual clauses approved by the ICO, or transfers to countries with an adequacy decision from the UK Secretary of State.</p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4">6. Data Retention</h2>
            <p className="mb-4"><strong>Business customer data</strong> is retained for the duration of the contractual relationship and for a period of six (6) years thereafter to comply with legal and regulatory obligations and to protect our legitimate interests in the event of disputes.</p>
            <p className="mb-4"><strong>Patient data</strong> processed on behalf of customers is retained in accordance with the customer’s instructions and the applicable Data Processing Agreement. Upon termination of the customer relationship, we will delete or return patient data as directed, subject to any legal retention obligations.</p>
            <p><strong>Website visitor data</strong> is retained for no longer than twenty-four (24) months from the date of collection.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 & 8 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">7. Data Security</h2>
            <p className="mb-8">We implement appropriate technical and organisational measures to protect personal data, including encryption in transit and at rest, access controls and role-based authentication, regular security assessments and vulnerability testing, staff training on data protection and information security, incident response and breach notification procedures, and UK-hosted infrastructure. Despite these measures, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security but commit to responding promptly and transparently to any security incident.</p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4">8. Your Rights</h2>
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">8.1 Business Customers and Website Visitors</h3>
            <p className="mb-4">Under UK GDPR, you have the right to: access your personal data (Article 15), rectify inaccurate data (Article 16), erase your data in certain circumstances (Article 17), restrict processing (Article 18), data portability (Article 20), object to processing based on legitimate interests (Article 21), and withdraw consent at any time where consent is the legal basis. To exercise any of these rights, contact us at <a href="mailto:hello@10qrx.com" className="text-teal hover:text-teal-dark underline transition-colors">hello@10qrx.com</a>. We will respond within one month.</p>
            
            <h3 className="text-lg font-bold text-navy mt-6 mb-2">8.2 Patients</h3>
            <p>If you are a patient whose data is processed through our Platform, please note that we process your data on behalf of your pharmacy or clinic. To exercise your data protection rights, you should contact your pharmacy or clinic directly, as they are the data controller. If your pharmacy or clinic directs us to action your request, we will do so promptly.</p>
          </section>

          <hr className="border-slate-100" />

          {/* Sections 9 to 13 */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">9. Cookies and Similar Technologies</h2>
              <p>Our website uses cookies and similar technologies to ensure the website functions properly, analyse how the website is used, and remember your preferences. We obtain your consent for non-essential cookies in accordance with the Privacy and Electronic Communications Regulations 2003. You can manage cookie preferences through your browser settings or through our cookie consent mechanism.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">10. Children’s Data</h2>
              <p>The Platform is designed for use by pharmacies, clinics, and healthcare providers. It is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children. If we become aware that we have collected data from a child without appropriate parental or guardian consent, we will take steps to delete it.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">11. Automated Decision-Making</h2>
              <p>The Platform does not engage in solely automated decision-making that produces legal effects or similarly significant effects on individuals, as defined in Article 22 of UK GDPR. While the Platform structures and presents data in formatted summaries, all clinical decisions are made by qualified healthcare professionals. The Platform’s data structuring is administrative in nature and does not constitute automated decision-making or profiling for data protection purposes.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">12. Data Breach Notification</h2>
              <p>In the event of a personal data breach, we will notify the relevant data controller (our business customer) without undue delay and, where feasible, within 24 hours of becoming aware of the breach. Where we are the data controller and the breach is likely to result in a high risk to individuals’ rights and freedoms, we will notify the ICO within 72 hours and affected individuals without undue delay, in accordance with Articles 33 and 34 of UK GDPR.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">13. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Material changes will be communicated via email to our business customers or through the Platform. The effective date at the top of this document will be updated accordingly. Continued use of the Platform after notification of changes constitutes acceptance of the updated policy.</p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 14 & 15 */}
          <section>
            <h2 className="text-2xl font-heading font-bold text-navy mb-4">14. Complaints</h2>
            <p className="mb-8">If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner’s Office (ICO). The ICO can be contacted at: Information Commissioner’s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF. Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-dark underline transition-colors">ico.org.uk</a>. Telephone: 0303 123 1113.</p>

            <h2 className="text-2xl font-heading font-bold text-navy mb-4">15. Contact Us</h2>
            <p className="mb-4">For any questions about this Privacy Policy or our data protection practices:</p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="font-bold text-navy mb-1">10Q Holdings Limited (t/a 10QRX)</p>
              <p className="text-slate-600 mb-4">1 Beauchamp Place, 10 Victors Way, Barnet, United Kingdom, EN5 5TZ</p>
              <p><strong>Email:</strong> <a href="mailto:hello@10qrx.com" className="text-teal hover:text-teal-dark underline transition-colors">hello@10qrx.com</a></p>
            </div>
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