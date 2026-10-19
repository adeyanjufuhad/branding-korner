"use server";

import { services, site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
  // Echoed back so fields keep their input after React resets the form.
  values?: Record<string, string>;
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: bots fill hidden fields, humans don't.
  if (formData.get("company_website")) return { status: "success" };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const serviceSlug = String(formData.get("service") ?? "");
  const message = String(formData.get("message") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email.";
  if (message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  const values = { name, email, phone, country, service: serviceSlug, message };
  if (Object.keys(errors).length) return { status: "error", errors, values };

  const service = services.find((s) => s.slug === serviceSlug)?.title ?? "General enquiry";
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "-"],
    ["Country", country || "-"],
    ["Service", service],
  ];

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email not configured; enquiry received:", Object.fromEntries(rows), message);
      return { status: "success" };
    }
    return {
      status: "error",
      message: `Our form is temporarily unavailable. Please email ${site.email} or message us on WhatsApp.`,
      values,
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Branding Korner <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `New enquiry: ${service} from ${name}`,
      html: `<h2>New website enquiry</h2><table>${rows
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escape(v)}</td></tr>`)
        .join("")}</table><p>${escape(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email ${site.email} instead.`,
      values,
    };
  }

  return { status: "success" };
}
