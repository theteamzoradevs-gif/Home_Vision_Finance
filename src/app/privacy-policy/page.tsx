import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { BRAND, EMAIL, PHONE_DISPLAY } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "Learn how Home Vision Finance collects, uses, and protects your personal information.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Your privacy matters to us. This policy explains how we collect, use, and safeguard your information when you use our services."
      lastUpdated="June 10, 2026"
      sections={[
        {
          title: "1. Information We Collect",
          content: (
            <>
              <p>
                When you interact with {BRAND}, we may collect personal information that you voluntarily
                provide, including your name, phone number, email address, city, loan amount requirements,
                and any messages submitted through our website forms.
              </p>
              <p>
                We may also collect technical information such as browser type, device information, IP address,
                and pages visited to improve website performance and user experience.
              </p>
            </>
          ),
        },
        {
          title: "2. How We Use Your Information",
          content: (
            <>
              <p>We use the information collected to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Respond to your loan inquiries and consultation requests</li>
                <li>Assess eligibility and coordinate with partner banks</li>
                <li>Provide updates on your loan application status</li>
                <li>Improve our website, services, and customer support</li>
                <li>Comply with applicable legal and regulatory requirements</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Information Sharing",
          content: (
            <>
              <p>
                We do not sell your personal information. We may share relevant details with authorised
                banking partners, financial institutions, and service providers strictly for processing your
                loan application and delivering requested services.
              </p>
              <p>
                We may also disclose information when required by law, court order, or government authority.
              </p>
            </>
          ),
        },
        {
          title: "4. Data Security",
          content: (
            <p>
              We implement reasonable administrative, technical, and organisational measures to protect your
              personal data against unauthorised access, alteration, disclosure, or destruction. However, no
              method of transmission over the internet is completely secure.
            </p>
          ),
        },
        {
          title: "5. Cookies & Analytics",
          content: (
            <p>
              Our website may use cookies and similar technologies to enhance functionality, analyse traffic,
              and improve user experience. You can manage cookie preferences through your browser settings.
            </p>
          ),
        },
        {
          title: "6. Your Rights",
          content: (
            <>
              <p>You may request to:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Access or update your personal information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request deletion of your data, subject to legal obligations</li>
              </ul>
              <p>
                To exercise these rights, contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="font-medium text-brand hover:underline">
                  {EMAIL}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: "7. Contact Us",
          content: (
            <p>
              For privacy-related questions or concerns, reach out to {BRAND} at{" "}
              <a href={`mailto:${EMAIL}`} className="font-medium text-brand hover:underline">
                {EMAIL}
              </a>{" "}
              or call us at {PHONE_DISPLAY}.
            </p>
          ),
        },
      ]}
    />
  );
}
