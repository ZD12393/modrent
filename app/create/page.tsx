"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [county, setCounty] = useState("");
  const [rent, setRent] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    let imageUrl = "";

    if (photo) {
      const fileExt = photo.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `listings/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("listing-photos")
        .upload(filePath, photo);

      if (uploadError) {
        alert(`Photo upload failed: ${uploadError.message}`);
        setSaving(false);
        return;
      }

      const { data } = supabase.storage
        .from("listing-photos")
        .getPublicUrl(filePath);

      imageUrl = data.publicUrl;
    }

    const { error } = await supabase.from("listings").insert([
      {
        title,
        county,
        rent,
        image_url: imageUrl,
        description,
        email,
      },
    ]);

    if (error) {
      alert(`There was a problem saving the listing: ${error.message}`);
      setSaving(false);
      return;
    }

    alert("Listing saved.");

    setTitle("");
    setCounty("");
    setRent("");
    setPhoto(null);
    setDescription("");
    setEmail("");
    setSaving(false);
  };

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-10">
          <div className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-white border mb-5">
            Add a new listing
          </div>

          <h1 className="text-5xl font-semibold mb-4">List Your Unit</h1>

          <p className="text-lg text-[#555] leading-8">
            Add a modular or garden unit rental to ModRent using the form below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#e3ddd2] rounded-[28px] p-8 shadow-sm space-y-5"
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Listing title
            </label>
            <input
              type="text"
              placeholder="e.g. Garden Studio in Wicklow"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-[#d8d2c7] rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">County</label>
            <input
              type="text"
              placeholder="e.g. Wicklow"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              required
              className="w-full border border-[#d8d2c7] rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Monthly rent
            </label>
            <input
              type="text"
              placeholder="e.g. 1100"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              required
              className="w-full border border-[#d8d2c7] rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Upload photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              className="w-full border border-[#d8d2c7] rounded-xl px-4 py-3 bg-white"
            />
            <p className="text-sm text-[#666] mt-2">
              Upload one clear photo of the unit. More photo options can be
              added later.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Contact email
            </label>
            <input
              type="email"
              placeholder="e.g. hello@example.ie"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-[#d8d2c7] rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Describe the unit"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full border border-[#d8d2c7] rounded-xl px-4 py-3 h-36 outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            style={{
              backgroundColor: "#1f1f1f",
              color: "#ffffff",
              padding: "16px 28px",
              borderRadius: "14px",
              display: "inline-block",
              fontWeight: 600,
              opacity: saving ? 0.6 : 1,
            }}
          >
            {saving ? "Saving..." : "Submit Listing"}
          </button>
        </form>
      </section>
    </main>
  );
}