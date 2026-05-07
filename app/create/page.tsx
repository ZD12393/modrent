"use client";

import { useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

const unitTypes = [
  "Garden Studio",
  "Modular Home",
  "Backyard Unit",
  "Self-contained Cabin",
  "Garden Room",
  "Compact Rental Unit",
];

const counties = [
  "Carlow",
  "Cavan",
  "Clare",
  "Cork",
  "Donegal",
  "Dublin",
  "Galway",
  "Kerry",
  "Kildare",
  "Kilkenny",
  "Laois",
  "Leitrim",
  "Limerick",
  "Longford",
  "Louth",
  "Mayo",
  "Meath",
  "Monaghan",
  "Offaly",
  "Roscommon",
  "Sligo",
  "Tipperary",
  "Waterford",
  "Westmeath",
  "Wexford",
  "Wicklow",
];

export default function CreatePage() {
  const [unitType, setUnitType] = useState("");
  const [town, setTown] = useState("");
  const [county, setCounty] = useState("");
  const [rent, setRent] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [bannerIndex, setBannerIndex] = useState(0);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [saving, setSaving] = useState(false);

  const generatedTitle = useMemo(() => {
    if (!unitType || !town || !county) {
      return "";
    }

    return `${unitType} in ${town}, Co. ${county}`;
  }, [unitType, town, county]);

  const handlePhotoChange = (files: FileList | null) => {
    const selectedFiles = Array.from(files || []);
    setPhotos(selectedFiles);
    setBannerIndex(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!generatedTitle) {
      alert("Please select a unit type, town and county.");
      return;
    }

    if (photos.length === 0) {
      alert("Please upload at least one photo.");
      return;
    }

    setSaving(true);

    const uploadedPhotoUrls: string[] = [];

    for (const photo of photos) {
      const fileExt = photo.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}.${fileExt}`;
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

      uploadedPhotoUrls.push(data.publicUrl);
    }

    const bannerImageUrl =
      uploadedPhotoUrls[bannerIndex] || uploadedPhotoUrls[0] || "";

    const { error } = await supabase.from("listings").insert([
      {
        title: generatedTitle,
        unit_type: unitType,
        town,
        county,
        rent,
        available_from: availableFrom,
        image_url: bannerImageUrl,
        photos: uploadedPhotoUrls,
        banner_image_url: bannerImageUrl,
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

    setUnitType("");
    setTown("");
    setCounty("");
    setRent("");
    setAvailableFrom("");
    setPhotos([]);
    setBannerIndex(0);
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

          <h1 className="mb-4 text-5xl font-semibold">List Your Unit</h1>

          <p className="text-lg leading-8 text-[#555]">
            Add a modular or garden unit rental to ModRent using the form below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[28px] border border-[#e3ddd2] bg-white p-8 shadow-sm"
        >
          <div className="rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#777]">
              Listing title
            </p>

            <p className="text-lg font-semibold text-[#1f1f1f]">
              {generatedTitle || "Generated automatically from the details below"}
            </p>

            <p className="mt-2 text-sm leading-6 text-[#666]">
              To keep listings consistent, ModRent creates the listing title
              automatically using the unit type, town and county.
            </p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Unit type</label>

            <select
              value={unitType}
              onChange={(e) => setUnitType(e.target.value)}
              required
              className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3 text-[#1f1f1f] outline-none focus:border-black"
            >
              <option value="">Select unit type</option>
              {unitTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Town or area
            </label>

            <input
              type="text"
              placeholder="e.g. Bray"
              value={town}
              onChange={(e) => setTown(e.target.value)}
              required
              className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">County</label>

            <select
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              required
              className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3 text-[#1f1f1f] outline-none focus:border-black"
            >
              <option value="">Select county</option>
              {counties.map((countyName) => (
                <option key={countyName} value={countyName}>
                  {countyName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Monthly rent
            </label>

            <input
              type="text"
              placeholder="e.g. 1100"
              value={rent}
              onChange={(e) => setRent(e.target.value)}
              required
              className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Available from
            </label>

            <input
              type="date"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
              required
              className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Upload photos
            </label>

            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handlePhotoChange(e.target.files)}
              className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3"
            />

            <p className="mt-2 text-sm leading-6 text-[#666]">
              Upload clear photos of the unit. After selecting photos, choose
              which one should appear as the main banner image.
            </p>
          </div>

          {photos.length > 0 && (
            <div className="rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-5">
              <h2 className="mb-4 text-lg font-semibold">
                Choose banner image
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {photos.map((photo, index) => (
                  <label
                    key={`${photo.name}-${index}`}
                    className={`cursor-pointer overflow-hidden rounded-2xl border bg-white ${
                      bannerIndex === index
                        ? "border-black"
                        : "border-[#e3ddd2]"
                    }`}
                  >
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Selected upload ${index + 1}`}
                      className="h-40 w-full object-cover"
                    />

                    <div className="flex items-center gap-2 p-3">
                      <input
                        type="radio"
                        name="banner"
                        checked={bannerIndex === index}
                        onChange={() => setBannerIndex(index)}
                      />

                      <span className="text-sm font-medium">
                        Use as banner image
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Contact email
            </label>

            <input
              type="email"
              placeholder="e.g. hello@example.ie"
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
              placeholder="Describe the unit, location, layout, utilities, access and anything renters should know."
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
            {saving ? "Saving..." : "Submit Listing"}
          </button>
        </form>
      </section>
    </main>
  );
}