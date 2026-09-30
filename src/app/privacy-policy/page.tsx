import type { Metadata } from "next"
import LegalPage from "@/components/LegalPage"
import { business } from "@/lib/business"

export const metadata: Metadata = {
  title: `Privacy Policy | ${business.name}`,
  description: `How ${business.name} handles your personal information.`,
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" updated="30 September 2026">
      <p>
        This policy explains what happens to your personal information when you use this website or get in touch with{" "}
        {business.name}. It follows UK GDPR and the Data Protection Act 2018.
      </p>

      <h2>Who is responsible</h2>
      <p>
        {business.name}, {business.town}, is the data controller. You can reach Kim on{" "}
        <a href={`tel:${business.phoneE164}`}>{business.phoneDisplay}</a>.
      </p>

      <h2>What this website collects</h2>
      <p>
        This website has no contact form, no accounts, no analytics and no advertising. It does not set cookies. Nothing you
        do on the site is tracked or stored by Kim.
      </p>
      <p>
        The site is hosted by Vercel. Like any host, it keeps standard server logs (such as your IP address and the pages
        requested) for security and to keep the site running.
      </p>

      <h2>When you contact Kim</h2>
      <p>
        If you call, text or message on WhatsApp to book, Kim receives your phone number and whatever you tell her. She uses
        it only to arrange and manage your appointment and to answer your message. Calls and texts pass through your mobile
        network. WhatsApp and Facebook are run by Meta and have their own privacy policies.
      </p>
      <p>Kim does not sell your details or share them for marketing.</p>

      <h2>How long it is kept</h2>
      <p>Your details are kept only as long as needed to look after your appointments, then deleted.</p>

      <h2>Your rights</h2>
      <p>You can ask Kim to:</p>
      <ul>
        <li>tell you what she holds about you</li>
        <li>correct anything that is wrong</li>
        <li>delete your details</li>
        <li>stop using your details for a particular purpose</li>
      </ul>
      <p>
        If you are unhappy with how your information has been handled, you can complain to the Information
        Commissioner&rsquo;s Office at{" "}
        <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Changes</h2>
      <p>
        If the site starts using analytics, cookies or a booking form, this policy will be updated first and the date above
        will change.
      </p>
    </LegalPage>
  )
}
