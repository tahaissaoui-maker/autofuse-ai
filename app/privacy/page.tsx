import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-purple-500/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <article className="prose prose-invert prose-purple max-w-none space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last Updated: December 2025</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. IMPORTANT INFORMATION AND WHO WE ARE</h2>
            <p>
              <strong>Aleekto Ltd</strong> (trading as <strong>Autofuse AI</strong>) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) or interact with our AI Voice Agents, and tell you about your privacy rights and how the law protects you.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-6">
              <h3 className="text-lg font-bold text-white mb-2">Controller</h3>
              <p>Aleekto Ltd is the controller and responsible for your personal data (collectively referred to as "Autofuse AI", "we", "us" or "our" in this privacy policy).</p>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">Contact Details</h3>
              <p>If you have any questions about this privacy policy, please contact our data privacy manager:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Legal Entity:</strong> Aleekto Ltd</li>
                <li><strong>Email address:</strong> privacy@autofuseai.com</li>
                <li><strong>Postal address:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. THE DATA WE COLLECT ABOUT YOU</h2>
            <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identity Data:</strong> First name, last name, username, or similar identifiers.</li>
              <li><strong>Contact Data:</strong> Billing address, email address, and telephone numbers.</li>
              <li><strong>Voice & Audio Data:</strong> Recordings of your conversations with our AI agents, transcripts of those conversations, and sentiment analysis derived from call audio.</li>
              <li><strong>Financial Data:</strong> Bank account and payment card details (processed via third-party secure handlers).</li>
              <li><strong>Transaction Data:</strong> Details about payments to and from you and other details of services you have purchased.</li>
              <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
              <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. HOW IS YOUR PERSONAL DATA COLLECTED?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Direct Interactions:</strong> You may give us your Identity, Contact, and Financial Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</li>
              <li><strong>AI Voice Interactions:</strong> When you speak with our AI agents (via the "Live Demo" or client deployments), we collect Voice & Audio Data and call metadata (duration, time of call).</li>
              <li><strong>Automated Technologies:</strong> As you interact with our website, we automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
              <li><strong>Third Parties:</strong> We may receive personal data about you from various third parties, including Analytics providers (e.g., Google Analytics, Hyros), Advertising networks (e.g., Meta, Google Ads), and Payment providers (e.g., Stripe).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. HOW WE USE YOUR PERSONAL DATA</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Performance of Contract:</strong> Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li><strong>Legitimate Interests:</strong> Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li><strong>Legal Obligation:</strong> Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
            <h3 className="text-lg font-bold text-white mt-4">Specific Use of Voice Data</h3>
            <p>We use Voice & Audio Data to:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Demonstrate our service capabilities (in the case of the Live Demo).</li>
              <li>Quality assurance and training of our AI models to improve accuracy.</li>
              <li>Transcribe requests to fulfill service actions (e.g., booking appointments).</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. DISCLOSURES OF YOUR PERSONAL DATA</h2>
            <p>We may share your personal data with the parties set out below for the purposes set out in section 4:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>AI & Telephony Infrastructure:</strong> Third-party providers that power our AI voice capabilities (e.g., Vapi, Bland AI, Twilio, OpenAI).</li>
              <li><strong>Internal Business Tools:</strong> Slack, ActiveCampaign, Hyros, Google Analytics, Meta Pixel, Zapier, Stripe, Payfunnels, DocuSign, Skool.com.</li>
              <li><strong>Professional Advisers:</strong> Lawyers, bankers, auditors, and insurers.</li>
              <li><strong>Regulators:</strong> HM Revenue & Customs and other authorities.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. INTERNATIONAL TRANSFERS</h2>
            <p>Many of our external third parties (such as OpenAI, Google, Stripe) are based outside the UK and the European Economic Area (EEA). Whenever we transfer your personal data out of the UK or EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data; or</li>
              <li>Where we use certain service providers, we may use specific contracts approved for use in the UK/EEA which give personal data the same protection it has in the UK/EEA.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. DATA RETENTION</h2>
            <p><strong>How long will you use my personal data for?</strong></p>
            <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Client Data:</strong> Kept for the duration of the relationship plus 6 years (for tax/legal purposes).</li>
              <li><strong>Voice/Demo Data:</strong> Retained for a period necessary to analyze performance and improve AI models, after which it is anonymized or deleted.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. YOUR LEGAL RIGHTS</h2>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing. To exercise any of these rights, please contact us at privacy@autofuseai.com.</p>
          </section>

          <div className="h-20" />
        </article>
      </div>
    </div>
  );
}
