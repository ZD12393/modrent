"use client";

import { useState } from "react";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [county, setCounty] = useState("");
  const [rent, setRent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newListing = {
      id: Date.now(),
      title,
      county,
      rent,
      imageUrl,
      description,
      email,
    };

    const existingListings = JSON.parse(
      localStorage.getItem("modrentListings") || "[]"
    );

    existingListings.push(newListing);

    localStorage.setItem("modrentListings", JSON.stringify(existingListings));

    alert("Listing saved.");

    setTitle("");
    setCounty("");
    setRent("");
    setImageUrl("");
    setDescription("");
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">List Your Unit</h1>

        <p className="mb-8">
          Add a modular or garden unit rental to ModRent.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Listing title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md p-3"
          />

          <input
            type="text"
            placeholder="County"
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            className="w-full border rounded-md p-3"
          />

          <input
            type="text"
            placeholder="Monthly rent"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className="w-full border rounded-md p-3"
          />

          <input
            type="text"
            placeholder="Image URL (photo link)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full border rounded-md p-3"
          />

          <input
            type="email"
            placeholder="Contact email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md p-3"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-md p-3 h-32"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md"
          >
            Submit Listing
          </button>
        </form>
      </div>
    </main>
  );
}