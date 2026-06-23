"use client";

import { useState, SubmitEvent } from "react";
import Link from "next/link";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type Props = {
  dict: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    backButton: string;
  };
  lang: string;
};

export default function Contact({ dict, lang }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      const form = e.currentTarget as HTMLFormElement;
      const web3FormData = new FormData(form);
      web3FormData.append("access_key", "86d074f9-ffcb-4968-8ca8-1712bd0cb289");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData,
      });

      const data = await response.json();
      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto flex flex-col gap-8">

      {/* Header */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 flex items-center gap-3">
          <span className="text-purple-500">/</span> {dict.title}
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {dict.subtitle}
        </p>
      </div>

      {/* Status messages */}
      {status === "success" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
          <FiCheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{dict.successMessage}</p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          <FiAlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{dict.errorMessage}</p>
          </div>
        </div>
      )}

      {/* Form */}
      {status !== "success" && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-mono text-zinc-400">
              {dict.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder={dict.namePlaceholder}
              className="px-4 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 text-sm outline-hidden focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-mono text-zinc-400">
              {dict.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder={dict.emailPlaceholder}
              className="px-4 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 text-sm outline-hidden focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-mono text-zinc-400">
              {dict.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder={dict.messagePlaceholder}
              className="px-4 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder:text-zinc-600 text-sm outline-hidden focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="flex items-center justify-center gap-2 mt-2 px-5 py-3 bg-zinc-100 hover:bg-white text-zinc-950 rounded-md text-sm font-semibold transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-zinc-950" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>{dict.submitting}</span>
              </>
            ) : (
              <>
                <FiSend className="w-4 h-4" />
                <span>{dict.submitButton}</span>
              </>
            )}
          </button>
        </form>
      )}

      {status === "success" && (
        <Link
          href={`/${lang}`}
          className="self-center mt-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 rounded-md text-sm font-medium transition-colors text-center inline-block"
        >
          {dict.backButton}
        </Link>
      )}
    </section>
  );
}
