import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal data.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="19 October 2026"
      intro={`This policy explains how ${site.name} handles your personal data, in line with the Nigeria Data Protection Act 2023 (NDPA).`}
      sections={[
        {
          heading: "Who we are",
          body: (
            <p>
              {site.name} (RC {site.rcNumber}) is a private limited company registered in
              Nigeria with the Corporate Affairs Commission. We are the data controller for
              the personal data described in this policy. You can reach us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
            </p>
          ),
        },
        {
          heading: "Data we collect",
          body: (
            <ul>
              <li>
                <strong>Enquiry details</strong> you submit through our contact form, email or
                WhatsApp: name, email address, phone number, country and your message.
              </li>
              <li>
                <strong>Project information</strong> you share when we work together, such as
                CV details, academic or employment history, business and financial documents.
              </li>
              <li>
                <strong>Basic usage data</strong> such as pages visited and device type,
                collected in aggregate to understand how our website is used.
              </li>
            </ul>
          ),
        },
        {
          heading: "How we use your data",
          body: (
            <ul>
              <li>To respond to your enquiries and provide the services you request.</li>
              <li>To prepare, review and deliver documents and project work for you.</li>
              <li>To send invoices, updates and service-related communication.</li>
              <li>To improve our website and services.</li>
              <li>To meet our legal, tax and regulatory obligations.</li>
            </ul>
          ),
        },
        {
          heading: "Legal basis",
          body: (
            <p>
              We process your data on the basis of your consent, to take steps before or
              under a contract with you, to comply with legal obligations, and for our
              legitimate interest in running and improving our business.
            </p>
          ),
        },
        {
          heading: "Sharing your data",
          body: (
            <p>
              We do not sell your personal data. We only share it with trusted service
              providers who help us operate (for example email, hosting and payment
              providers), or with third parties you ask us to deal with on your behalf. Some of
              these providers may store data outside Nigeria; where that happens we rely on the
              safeguards permitted under the NDPA.
            </p>
          ),
        },
        {
          heading: "How long we keep it",
          body: (
            <p>
              We keep enquiry data for up to 24 months and client project records for as long
              as needed to deliver the service and meet legal and accounting requirements,
              after which they are securely deleted.
            </p>
          ),
        },
        {
          heading: "Keeping it secure",
          body: (
            <p>
              Client files are treated as strictly confidential. Access is limited to the team
              members working on your project, and we use reputable, secured platforms to store
              and transfer documents.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <>
              <p>Under the NDPA you have the right to:</p>
              <ul>
                <li>access the personal data we hold about you;</li>
                <li>ask us to correct or delete it;</li>
                <li>withdraw consent or object to processing;</li>
                <li>request a copy of your data in a portable format;</li>
                <li>
                  complain to the Nigeria Data Protection Commission (NDPC) if you are unhappy
                  with how we handle your data.
                </li>
              </ul>
              <p>
                To exercise any of these rights, email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </>
          ),
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              We may update this policy from time to time. The latest version will always be
              on this page, with the date it was last updated.
            </p>
          ),
        },
      ]}
    />
  );
}
