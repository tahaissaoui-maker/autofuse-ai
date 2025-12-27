import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Terms and Conditions</h1>
          <p className="text-sm text-slate-500">Last Updated: December 2025</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. THE AGREEMENT</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“<strong>Client</strong>”, “<strong>you</strong>”) and <strong>Aleekto Ltd</strong> trading as <strong>Autofuse AI</strong> (“<strong>Company</strong>”, “<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”), concerning your access to and use of the Autofuse AI website and our AI Voice Agent services (collectively, the “<strong>Service</strong>”).
            </p>
            <p><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
            <p><strong>Contact:</strong> support@autofuseai.com</p>
            <p>
              By accessing the Service or purchasing our agency services, you agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND MUST DISCONTINUE USE IMMEDIATELY.</strong>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. SERVICES PROVIDED</h2>
            <p>Autofuse AI provides Artificial Intelligence voice automation services, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Development:</strong> Custom building of AI voice agents.</li>
              <li><strong>Hosting:</strong> Maintenance and hosting of voice agents on telephony infrastructure.</li>
              <li><strong>Consulting:</strong> Strategy and implementation of voice AI systems.</li>
            </ul>
            <p>We make no guarantees that the Service will meet your specific requirements or that the Service will be uninterrupted, timely, secure, or error-free.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. CLIENT OBLIGATIONS & COMPLIANCE</h2>
            <p>You acknowledge that you are responsible for the legal use of the AI Agents we build for you. You agree to:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Consent to Call:</strong> You represent and warrant that you have obtained all necessary consents, opt-ins, and permissions required by law (including the Telephone Consumer Protection Act (TCPA) in the US and GDPR/PECR in the UK/EU) to contact the phone numbers you provide to our system.</li>
              <li><strong>Call Recording Disclosure:</strong> You acknowledge that it is your responsibility to ensure the AI Agent properly discloses that the call is being recorded, in compliance with "Two-Party Consent" states and international laws.</li>
              <li><strong>Prohibited Content:</strong> You will not use the Service to transmit any material that is harassing, defamatory, fraudulent, or promotes illegal activities.</li>
            </ol>
            <p><strong>Indemnification:</strong> You agree to indemnify, defend, and hold harmless Aleekto Ltd from and against any and all losses, damages, liabilities, and costs (including reasonable attorneys' fees) arising from your violation of any telecommunications laws (including TCPA class actions) or data privacy regulations.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. AI DISCLAIMER (ACCURACY & HALLUCINATIONS)</h2>
            <p>You acknowledge that the Service utilizes Generative AI technology (e.g., OpenAI, Vapi, Bland AI). By using the Service, you accept the following inherent risks:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Accuracy:</strong> AI Agents may occasionally produce incorrect, inaccurate, or "hallucinated" information. We are not liable for any business losses resulting from incorrect statements made by the AI.</li>
              <li><strong>Uptime:</strong> We rely on third-party providers (LLMs and Telephony carriers). We are not liable for downtime caused by these third-party infrastructure failures.</li>
              <li><strong>Voice Cloning:</strong> If we clone a voice for you, you represent that you have the explicit written rights to use that person's voice and likeness.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. PAYMENT AND REFUNDS</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Fees:</strong> You agree to pay the fees set out in your specific Service Agreement or checkout page.</li>
              <li><strong>Subscriptions:</strong> Monthly retainers are billed in advance.</li>
              <li><strong>Refund Policy:</strong> Due to the custom nature of our engineering work and the costs of AI usage:
                <ul className="list-disc pl-5 mt-2 text-slate-400">
                  <li><strong>Setup Fees:</strong> Are non-refundable once development has commenced.</li>
                  <li><strong>Retainers:</strong> Are non-refundable. You may cancel your subscription with 30 days' written notice to prevent future billing.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. LIMITATION OF LIABILITY</h2>
            <p>To the fullest extent permitted by law, in no event will Aleekto Ltd be liable to you for any indirect, consequential, exemplary, incidental, or punitive damages, including lost profit or lost revenue. Our liability to you for any cause whatsoever will at all times be limited to the amount paid, if any, by you to us during the three (3) month period prior to any cause of action arising.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. GOVERNING LAW</h2>
            <p>These Terms shall be governed by and defined following the laws of <strong>England and Wales</strong>. You irrevocably consent that the courts of England and Wales shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
          </section>

          <div className="h-20" />
        </article>
      </div>
    </div>
  );
}
