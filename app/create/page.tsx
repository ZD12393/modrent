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

const MAX_PHOTOS = 5;
const MAX_FILE_SIZE_MB = 5;

export default function CreatePage() {
  const [unitType, setUnitType] = useState("");
  const [town, setTown] = useState("");
  const [county, setCounty] = useState("");
  const [rent, setRent] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [billsIncluded, setBillsIncluded] = useState(false);
  const [petFriendly, setPetFriendly] = useState(false);
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

    if (selectedFiles.length > MAX_PHOTOS) {
      alert(`Please upload no more than ${MAX_PHOTOS} photos.`);
      setPhotos([]);
      setBannerIndex(0);
      return;
    }

    const oversizedFile = selectedFiles.find(
      (file) => file.size > MAX_FILE_SIZE_MB * 1024 * 1024
    );

    if (oversizedFile) {
      alert(
        `"${oversizedFile.name}" is too large. Please keep each photo under ${MAX_FILE_SIZE_MB}MB.`
      );
      setPhotos([]);
      setBannerIndex(0);
      return;
    }

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

    try {
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
          bedrooms: bedrooms ? Number(bedrooms) : null,
          bathrooms: bathrooms ? Number(bathrooms) : null,
          bills_included: billsIncluded,
          pet_friendly: petFriendly,
          image_url: bannerImageUrl,
          photos: uploadedPhotoUrls,
          banner_image_url: bannerImageUrl,
          description,
          email,
          status: "pending",
        },
      ]);

      if (error) {
        alert(`There was a problem saving the listing: ${error.message}`);
        setSaving(false);
        return;
      }

      alert(
        "Listing submitted for review. It will appear publicly once approved by ModRent."
      );

      setUnitType("");
      setTown("");
      setCounty("");
      setRent("");
      setAvailableFrom("");
      setBedrooms("");
      setBathrooms("");
      setBillsIncluded(false);
      setPetFriendly(false);
      setPhotos([]);
      setBannerIndex(0);
      setDescription("");
      setEmail("");
    } catch {
      alert("Something went wrong while saving the listing.");
    }

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
            Submit your modular home, garden unit or self-contained rental space
            for review before publication on ModRent.
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
              {generatedTitle ||
                "Generated automatically from the details below"}
            </p>

            <p className="mt-2 text-sm leading-6 text-[#666]">
              To keep ModRent consistent and professional, listing titles are
              created automatically using the unit type, town and county.
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
              placeholder="e.g. Ashford"
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
                min="0"
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
                min="0"
                placeholder="1"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                className="w-full rounded-xl border border-[#d8d2c7] px-4 py-3 outline-none focus:border-black"
              />
            </div>
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

          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex items-center gap-3 rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-4">
              <input
                type="checkbox"
                checked={billsIncluded}
                onChange={(e) => setBillsIncluded(e.target.checked)}
              />
              <span className="font-medium">Bills included</span>
            </label>

            <label className="flex items-center gap-3 rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-4">
              <input
                type="checkbox"
                checked={petFriendly}
                onChange={(e) => setPetFriendly(e.target.checked)}
              />
              <span className="font-medium">Pet friendly</span>
            </label>
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
              Upload up to {MAX_PHOTOS} clear photos. Each photo must be under{" "}
              {MAX_FILE_SIZE_MB}MB.
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
            {saving ? "Saving..." : "Submit for Review"}
          </button>
        </form>
      </section>
    </main>
  );
}