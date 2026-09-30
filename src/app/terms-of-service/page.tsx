import type { Metadata } from "next"
import LegalPage from "@/components/LegalPage"
import { business } from "@/lib/business"

export const metadata: Metadata = {
  title: `Terms of Service | ${business.name}`,
  description: `The terms for using the ${business.name} website.`,
  alternates: { canonical: "/terms-of-service" },
}

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" updated="30 September 2026">
      <p>
        These terms cover your use of this website. By using it you agree to them. Appointments are arranged directly with
        Kim by phone, WhatsApp or text.
      </p>

      <h2>Prices and opening hours</h2>
      <p>
        Prices and hours on this site are a guide and may change. Prices marked &ldquo;from&rdquo; depend on your hair and style, and
        Kim will confirm the price with you when you book.
      </p>

      <h2>Booking</h2>
      <p>
        There is no online booking. An appointment is only confirmed once Kim has agreed a date and time with you directly.
      </p>

      <h2>Using the site</h2>
      <p>
        The content of this site, including its text and design, belongs to {business.name} and its designer. Please do not
        copy it or present it as your own without permission.
      </p>

      <h2>Accuracy and liability</h2>
      <p>
        Kim takes care to keep the site accurate but does not promise that it is always complete or up to date. Nothing in
        these terms limits any rights you have under the law, including your rights as a consumer.
      </p>

      <h2>Links to other sites</h2>
      <p>
        The site links to Facebook and WhatsApp. Kim is not responsible for what those services do with your information.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the law of England and Wales.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: call or text <a href={`tel:${business.phoneE164}`}>{business.phoneDisplay}</a>.
      </p>
    </LegalPage>
  )
}
