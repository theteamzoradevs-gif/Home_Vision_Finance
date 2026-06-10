import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { BRAND, EMAIL, PHONE_DISPLAY } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Terms & Conditions",
  "Read the terms and conditions governing your use of Home Vision Finance services and website.",
  "/terms-and-conditions"
);

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      description="Please read these terms carefully before using our website or availing our home loan consultancy services."
      lastUpdated="June 10, 2026"
      sections={[
        {
          title: "1. Acceptance of Terms",
          content: (
            <p>
              By accessing or using the {BRAND} website and services, you agree to be bound by these Terms
              & Conditions. If you do not agree, please do not use our website or services.
            </p>
          ),
        },
        {
          title: "2. Services Provided",
          content: (
            <>
              <p>
                {BRAND} acts as a home loan consultant and authorised channel partner, helping customers
                connect with partner banks and financial institutions for home loan products including fresh
                purchase, balance transfer, loan against property, construction loans, and related services.
              </p>
              <p>
                We facilitate consultation, documentation support, and coordination. Final loan approval,
                interest rates, and disbursement are subject to the respective bank&apos;s policies and
                eligibility criteria.
              </p>
            </>
          ),
        },
        {
          title: "3. User Responsibilities",
          content: (
            <>
              <p>When using our services, you agree to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Provide accurate and complete information</li>
                <li>Submit genuine documents for verification</li>
                <li>Not misuse the website for fraudulent or unlawful purposes</li>
                <li>Maintain confidentiality of any login credentials, if applicable</li>
              </ul>
            </>
          ),
        },
        {
          title: "4. No Guarantee of Approval",
          content: (
            <p>
              While we strive to provide the best guidance and coordination, {BRAND} does not guarantee loan
              approval, specific interest rates, or processing timelines. All lending decisions are made
              solely by the respective financial institutions.
            </p>
          ),
        },
        {
          title: "5. Fees & Charges",
          content: (
            <p>
              {BRAND} may offer zero processing fee assistance as part of promotional arrangements. Any
              bank charges, legal fees, valuation charges, or third-party costs shall be borne by the
              customer as per the lending institution&apos;s terms.
            </p>
          ),
        },
        {
          title: "6. Intellectual Property",
          content: (
            <p>
              All content on this website — including text, logos, graphics, and design — is the property of{" "}
              {BRAND} or its licensors and is protected by applicable intellectual property laws.
              Unauthorised reproduction or distribution is prohibited.
            </p>
          ),
        },
        {
          title: "7. Limitation of Liability",
          content: (
            <p>
              {BRAND} shall not be liable for any indirect, incidental, or consequential damages arising
              from the use of our website or services. Our liability is limited to the extent permitted by
              applicable law.
            </p>
          ),
        },
        {
          title: "8. Third-Party Links",
          content: (
            <p>
              Our website may contain links to third-party websites or services. We are not responsible for
              the content, privacy practices, or policies of those external sites.
            </p>
          ),
        },
        {
          title: "9. Modifications",
          content: (
            <p>
              We reserve the right to update these Terms & Conditions at any time. Continued use of the
              website after changes are posted constitutes acceptance of the revised terms.
            </p>
          ),
        },
        {
          title: "10. Governing Law & Contact",
          content: (
            <p>
              These terms are governed by the laws of India. For questions regarding these terms, contact us
              at{" "}
              <a href={`mailto:${EMAIL}`} className="font-medium text-brand hover:underline">
                {EMAIL}
              </a>{" "}
              or {PHONE_DISPLAY}.
            </p>
          ),
        },
      ]}
    />
  );
}
