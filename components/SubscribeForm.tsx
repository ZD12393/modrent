"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          sourcePage: "footer",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Thanks. You are now subscribed.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="mt-6 rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-5">
      <h3 className="mb-2 text-base font-semibold text-[#173528]">
        Stay updated
      </h3>

      <p className="mb-4 text-sm leading-6 text-[#5f6b63]">
        Receive occasional updates about ModRent, new listings and owner
        resources.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          className="flex-1 rounded-xl border border-[#d8cdbb] px-4 py-3 outline-none focus:border-[#244e3b]"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-[#244e3b] px-5 py-3 font-semibold text-white disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      <p className="mt-3 text-xs leading-5 text-[#6b7280]">
        By subscribing, you consent to receive occasional emails from ModRent.
        You can unsubscribe at any time. See our{" "}
        <a href="/privacy" className="underline">
          Privacy Policy
        </a>
        .
      </p>

      {message && (
        <p
          className={`mt-3 text-sm font-medium ${
            status === "error" ? "text-red-700" : "text-[#244e3b]"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}