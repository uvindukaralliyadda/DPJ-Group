"use client";

import { useId, useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";
import { ENQUIRY_TYPES, BUSINESS_AREAS } from "@/data/contact";
import type { ContactFormErrors, ContactFormValues } from "@/types";

const initialValues: ContactFormValues = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  enquiryType: "",
  businessArea: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.enquiryType) errors.enquiryType = "Please select an enquiry type.";
  if (!values.businessArea) errors.businessArea = "Please select a business area.";
  if (!values.message.trim()) errors.message = "Please tell us about your requirement.";

  return errors;
}

function FloatingField({
  label,
  name,
  type = "text",
  value,
  error,
  required,
  onChange,
  onBlur,
  as = "input",
}: {
  label: string;
  name: keyof ContactFormValues;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  as?: "input" | "textarea";
}) {
  const fieldId = useId();
  const sharedClassName = cn(
    "peer w-full border-b bg-transparent pt-6 pb-2 text-base text-black outline-none transition-colors duration-200",
    error ? "border-red-500" : "border-black/20 focus:border-black"
  );

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={fieldId}
          name={name}
          value={value}
          placeholder=" "
          required={required}
          rows={5}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={cn(sharedClassName, "resize-none")}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          value={value}
          placeholder=" "
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={sharedClassName}
        />
      )}
      <label
        htmlFor={fieldId}
        className="pointer-events-none absolute left-0 top-6 text-base text-black/50 transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-black peer-focus:tracking-wide peer-focus:uppercase peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:tracking-wide peer-not-placeholder-shown:uppercase"
      >
        {label}
        {required && <span className="text-[#c99a00]"> *</span>}
      </label>
      <span
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FFEB3B] transition-all duration-300 peer-focus:w-full"
        aria-hidden
      />
      {error && (
        <p id={`${fieldId}-error`} className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  options,
  error,
  required,
  onChange,
  onBlur,
}: {
  label: string;
  name: keyof ContactFormValues;
  value: string;
  options: readonly string[];
  error?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: FocusEvent<HTMLSelectElement>) => void;
}) {
  const fieldId = useId();

  return (
    <div>
      <label
        htmlFor={fieldId}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-black/60"
      >
        {label}
        {required && <span className="text-[#c99a00]"> *</span>}
      </label>
      <div className="relative">
        <select
          id={fieldId}
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${fieldId}-error` : undefined}
          className={cn(
            "w-full appearance-none border-b bg-transparent py-3 pr-8 text-base text-black outline-none transition-colors duration-200",
            error ? "border-red-500" : "border-black/20 focus:border-black"
          )}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-black/50"
        />
      </div>
      {error && (
        <p id={`${fieldId}-error`} className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name } = e.target;
    const fieldErrors = validate(values);
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name as keyof ContactFormValues] }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    // TODO: replace with a real API call once a backend/email service is available.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-[420px] flex-col items-center justify-center border border-black/10 bg-black p-10 text-center text-[#F8F9FA]"
      >
        <span className="mb-4 h-1.5 w-10 bg-[#FFEB3B]" />
        <h3 className="text-2xl font-semibold tracking-tight">
          Thank you. Your enquiry has been received.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#F8F9FA]/70">
          Our team will review your message and get back to you.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      id="contact-form"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight text-black">
        Tell us what you&apos;re working on.
      </h2>
      <p className="mt-3 text-base leading-relaxed text-black/70">
        Share a few details and our team will get back to you.
      </p>

      <form noValidate onSubmit={handleSubmit} className="mt-10 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <FloatingField
            label="Your name"
            name="fullName"
            value={values.fullName}
            error={errors.fullName}
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FloatingField
            label="Company name"
            name="company"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FloatingField
            label="you@company.com"
            name="email"
            type="email"
            value={values.email}
            error={errors.email}
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FloatingField
            label="+94 XX XXX XXXX"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <SelectField
            label="Enquiry Type"
            name="enquiryType"
            value={values.enquiryType}
            options={ENQUIRY_TYPES}
            error={errors.enquiryType}
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <SelectField
            label="Business Area"
            name="businessArea"
            value={values.businessArea}
            options={BUSINESS_AREAS}
            error={errors.businessArea}
            required
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <FloatingField
          label="Tell us briefly about your requirement..."
          name="message"
          as="textarea"
          value={values.message}
          error={errors.message}
          required
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex w-fit items-center justify-center gap-3 bg-black px-8 py-4 text-sm font-medium uppercase tracking-wide text-[#F8F9FA] transition-colors duration-300 hover:bg-[#FFEB3B] hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Enquiry
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
