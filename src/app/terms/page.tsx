import type { Metadata } from "next";

import { LegalPage } from "@/components/site/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use the ${site.shortName} website and services.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="19 October 2026"
      intro={`These terms apply when you use this website or engage ${site.name} for any service.`}
      sections={[
        {
          heading: "About us",
          body: (
            <p>
              {site.name} (RC {site.rcNumber}) is a private limited company incorporated in
              Nigeria under the Companies and Allied Matters Act 2020, based in {site.city}.
            </p>
          ),
        },
        {
          heading: "Our services",
          body: (
            <p>
              The scope, deliverables, timeline and fees for each engagement are agreed with
              you in writing (by email, WhatsApp or a formal proposal) before work begins. The
              descriptions on this website are a general overview and do not form an offer.
            </p>
          ),
        },
        {
          heading: "Documentation and application support",
          body: (
            <>
              <p>
                We prepare, edit and review supporting documents such as CVs, statements of
                purpose and reference letters, and provide guidance on documentation
                requirements. Please note:
              </p>
              <ul>
                <li>
                  We are not an embassy, immigration authority, university or employer, and we
                  do not issue visas, admissions or job offers.
                </li>
                <li>
                  Decisions are made solely by the relevant institution, so we cannot guarantee
                  any outcome.
                </li>
                <li>
                  You are responsible for making sure all information you give us is true and
                  accurate. We will not create, alter or misrepresent financial, identity or
                  official records, and may decline any request we believe is misleading.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "Fees and payment",
          body: (
            <p>
              Fees are quoted before work starts. Unless agreed otherwise, a deposit may be
              required to begin, with the balance due on delivery. Third-party costs (such as
              printing, hosting, domains or government fees) are charged separately.
            </p>
          ),
        },
        {
          heading: "Revisions and refunds",
          body: (
            <p>
              Each project includes the number of revisions stated in your proposal. Because
              our work is custom, fees for work already completed are non-refundable. If we
              cannot deliver what was agreed, we will refund the portion of fees for the
              undelivered work.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <p>
              Once full payment is received, you own the final deliverables created for you
              (such as logos and brand assets). We may show non-confidential work in our
              portfolio unless you ask us not to. The content and design of this website
              belong to {site.shortName}.
            </p>
          ),
        },
        {
          heading: "Confidentiality",
          body: (
            <p>
              We keep your documents and business information confidential and handle personal
              data as described in our <a href="/privacy">Privacy Policy</a>.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              To the extent permitted by law, our total liability for any claim relating to a
              service is limited to the fees you paid for that service. We are not liable for
              indirect losses or for decisions made by third parties.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria, and the
              courts of Lagos State have jurisdiction over any dispute.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
              or call {site.phone}.
            </p>
          ),
        },
      ]}
    />
  );
}
