"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [county, setCounty] = useState("");
  const [town, setTown] = useState("");
  const [rent, setRent] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [billsIncluded, setBillsIncluded] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);

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
        town,
        rent,
        bedrooms: bedrooms ? Number(bedrooms) : null,
        bathrooms: bathrooms ? Number(bathrooms) : null,
        bills_included: billsIncluded,
        pet_friendly: petFriendly,
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

    alert("Listing submitted.");

    setTitle("");
    setCounty("");
    setTown("");
    setRent("");
    setBedrooms("");
    setBathrooms("");
    setBillsIncluded(false);
    setPetFriendly(false);
    setPhoto(null);
    setDescription("");
    setEmail("");

    setSaving(false);
  };

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10">
          <div className="mb-5 inline-block rounded-full border border-[#d7d2c8] bg-white px-3 py-1 text-sm font-medium">
            Add a new listing
          </div>

          <h1 className="mb-4 text-5xl font-semibold">
            List Your Unit
          </h1>

          <p className="text-lg leading-8 text-[#555]">
            Add a modular home, garden unit or self-contained rental space to ModRent.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-[32px] border border-[#e3ddd2] bg-white p-8 shadow-sm"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Listing title
            </label>

            <input
              type="text"
              placeholder="e.g. Self-contained garden studio in Wicklow"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                County
              </label>

              <input
                type="text"
                placeholder="e.g. Wicklow"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                required
                className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Town / Area
              </label>

              <input
                type="text"
                placeholder="e.g. Ashford"
                value={town}
                onChange={(e) => setTown(e.target.value)}
                className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Monthly rent (€)
              </label>

              <input
                type="text"
                placeholder="e.g. 1200"
                value={rent}
                onChange={(e) => setRent(e.target.value)}
                required
                className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Bedrooms
              </label>

              <input
                type="number"
                placeholder="1"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Bathrooms
              </label>

              <input
                type="number"
                placeholder="1"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex items-center gap-3 rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-4">
              <input
                type="checkbox"
                checked={billsIncluded}
                onChange={(e) => setBillsIncluded(e.target.checked)}
              />

              <span className="font-medium">
                Bills included
              </span>
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-4">
              <input
                type="checkbox"
                checked={petFriendly}
                onChange={(e) => setPetFriendly(e.target.checked)}
              />

              <span className="font-medium">
                Pet friendly
              </span>
            </label>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Upload main photo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3"
            />

            <p className="mt-2 text-sm text-[#666]">
              Upload a clear image of the rental unit.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Contact email
            </label>

            <input
              type="email"
              placeholder="you@example.ie"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              placeholder="Describe the rental unit, access, location, parking, utilities and anything else renters should know."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="h-40 w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
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
            {saving ? "Submitting..." : "Submit Listing"}
          </button>
        </form>
      </section>
    </main>
  );
}