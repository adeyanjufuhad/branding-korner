"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

import { sendEnquiry, type ContactState } from "./actions";

const field =
  "w-full rounded-xl border border-input bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:outline-none";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
      {children}
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  return msg ? <p className="mt-1.5 text-sm text-red-600">{msg}</p> : null;
}

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendEnquiry, {
    status: "idle",
  });

  const v = state.values;

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-brand-50 px-6 py-16 text-center">
        <CheckCircle2 className="size-14 text-brand-600" strokeWidth={1.5} />
        <h3 className="mt-5 text-2xl font-bold text-ink">Message received!</h3>
        <p className="mt-2 max-w-sm text-muted">
          Thank you for reaching out. A member of our team will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-5" noValidate>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name *</Label>
          <input id="name" name="name" defaultValue={v?.name} autoComplete="name" className={field} placeholder="Ada Okafor" required />
          <FieldError msg={state.errors?.name} />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <input
            id="email"
            name="email"
            defaultValue={v?.email}
            type="email"
            autoComplete="email"
            className={field}
            placeholder="you@example.com"
            required
          />
          <FieldError msg={state.errors?.email} />
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <input id="phone" name="phone" defaultValue={v?.phone} type="tel" autoComplete="tel" className={field} placeholder="+234 ..." />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <input
            id="country"
            name="country"
            defaultValue={v?.country}
            autoComplete="country-name"
            className={field}
            placeholder="Nigeria, UK, Canada..."
          />
        </div>
      </div>
      <div>
        <Label htmlFor="service">I&apos;m interested in</Label>
        <select id="service" name="service" defaultValue={v?.service ?? defaultService ?? ""} className={cn(field, "appearance-none")}>
          <option value="">General enquiry</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="message">How can we help? *</Label>
        <textarea
          id="message"
          name="message"
          defaultValue={v?.message}
          rows={5}
          className={cn(field, "resize-y")}
          placeholder="Tell us about your goals, timeline and where in the world you're headed."
          required
        />
        <FieldError msg={state.errors?.message} />
      </div>
      {state.message && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{state.message}</p>
      )}
      <Button type="submit" size="lg" disabled={pending} className="sm:justify-self-start">
        {pending ? <Loader2 className="animate-spin" /> : <Send />}
        {pending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
