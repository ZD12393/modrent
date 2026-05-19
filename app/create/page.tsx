"use client";

import { useMemo, useState } from "react";
import Turnstile from "react-turnstile";
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

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

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
  const [turnstileToken, setTurnstileToken] = useState("");
  const [saving, setSaving] = useState(false);
  const [hasTrackedStart, setHasTrackedStart] = useState(false);

  const generatedTitle = useMemo(() => {
    if (!unitType || !town || !county) {
      return "";
    }

    return `${unitType} in ${town}, Co. ${county}`;
  }, [unitType, town, county]);

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, {
        page: "create_listing",
      });
    }
  };

  const trackListingStarted = () => {
    if (!hasTrackedStart) {
      trackEvent("listing_submission_started");
      setHasTrackedStart(true);
    }
  };

  const handlePhotoChange = (files: FileList | null) => {
    trackListingStarted();

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

  const verifyTurnstile = async () => {
    const response = await fetch("/api/verify-turnstile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ turnstileToken }),
    });

    return response.ok;
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

    if (!turnstileToken) {
      alert("Please complete the security check before submitting your listing.");
      return;
    }

    setSaving(true);

    const securityCheckPassed = await verifyTurnstile();

    if (!securityCheckPassed) {
      alert("Security check failed. Please refresh the page and try again.");
      setSaving(false);
      return;
    }

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

      trackEvent("listing_submitted");

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
      setTurnstileToken("");
      setHasTrackedStart(false);
    } catch {
      alert("Something went wrong while saving the listing.");
    }

    setSaving(false);
  };

  return (
    <main className="min-h-screen bg-[#f6f4ef] text-[#1f1f1f]">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-5 inline-block rounded-full border border-[#d7d2c8] bg-white px-4 py-2 text-sm font-semibold text-[#244e3b]">
              Owner submissions now open
            </div>

            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-5xl">
              List your modular unit, garden cabin or detached rental space.
            </h1>

            <p className="mb-6 text-lg leading-8 text-[#555]">
              Submit your space to ModRent for review. Standard listings and
              direct enquiries are currently free while the marketplace is being
              built.
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h2 className="mb-2 text-base font-bold text-[#173528]">
                  Built for this category
                </h2>
                <p className="text-sm leading-6 text-[#5f6b63]">
                  ModRent is focused on modular homes, garden cabins, detached
                  studios and standalone small rental spaces.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h2 className="mb-2 text-base font-bold text-[#173528]">
                  Direct enquiries
                </h2>
                <p className="text-sm leading-6 text-[#5f6b63]">
                  Interested renters contact owners directly through the listing
                  enquiry flow.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h2 className="mb-2 text-base font-bold text-[#173528]">
                  Reviewed before publication
                </h2>
                <p className="text-sm leading-6 text-[#5f6b63]">
                  Listings are submitted for review before appearing publicly on
                  ModRent.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-white p-5">
                <h2 className="mb-2 text-base font-bold text-[#173528]">
                  No upfront listing fee
                </h2>
                <p className="text-sm leading-6 text-[#5f6b63]">
                  Standard owner listings are currently free during the early
                  launch stage.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#244e3b] p-6 text-white">
              <h2 className="mb-4 text-xl font-bold">
                Suitable spaces may include:
              </h2>

              <ul className="space-y-3 text-sm leading-6 text-[#eef5ef]">
                <li>Modular homes or prefabricated accommodation</li>
                <li>Garden cabins or self-contained garden units</li>
                <li>Detached studios or backyard rental spaces</li>
                <li>Compact standalone units with appropriate facilities</li>
              </ul>
            </div>

            <div className="mt-6 rounded-[24px] border border-[#d8cdbb] bg-[#fffdf8] p-5">
              <h2 className="mb-3 text-lg font-bold text-[#173528]">
                Owner responsibility
              </h2>

              <p className="text-sm leading-6 text-[#5f6b63]">
                ModRent is a listing marketplace only. Owners are responsible
                for checking planning, tax, insurance, safety, building
                regulation and legal requirements before renting out any space.
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              onChange={trackListingStarted}
              className="space-y-6 rounded-[28px] border border-[#e3ddd2] bg-white p-6 shadow-sm md:p-8"
            >
              <div>
                <div className="mb-5 inline-block rounded-full border border-[#d7d2c8] bg-[#fbfaf7] px-3 py-1 text-sm font-medium">
                  Listing details
                </div>

                <h2 className="mb-3 text-3xl font-bold text-[#173528]">
                  Submit your space for review
                </h2>

                <p className="text-base leading-7 text-[#555]">
                  The form usually takes a few minutes. Upload clear photos and
                  describe the space honestly so renters know what to expect.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-5">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#777]">
                  Listing title
                </p>

                <p className="text-lg font-semibold text-[#1f1f1f]">
                  {generatedTitle ||
                    "Generated automatically from the details below"}
                </p>

                <p className="mt-2 text-sm leading-6 text-[#666]">
                  To keep ModRent consistent and professional, listing titles
                  are created automatically using the unit type, town and county.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Unit type
                </label>

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
                <label className="mb-2 block text-sm font-medium">
                  County
                </label>

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
                  Upload up to {MAX_PHOTOS} clear photos. Each photo must be
                  under {MAX_FILE_SIZE_MB}MB.
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

              <div className="rounded-2xl border border-[#e3ddd2] bg-[#fbfaf7] p-5">
                <h2 className="mb-2 text-base font-bold text-[#173528]">
                  Before submitting
                </h2>

                <p className="text-sm leading-6 text-[#5f6b63]">
                  By submitting a listing, you confirm that the information
                  provided is accurate and that you understand ModRent does not
                  verify planning, tax, building regulation, insurance or legal
                  compliance.
                </p>
              </div>

              <Turnstile
                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                onVerify={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken("")}
              />

              <button
                type="submit"
                disabled={saving}
                style={{
                  backgroundColor: "#244e3b",
                  color: "#ffffff",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  display: "inline-block",
                  fontWeight: 700,
                  opacity: saving ? 0.6 : 1,
                  width: "100%",
                }}
              >
                {saving ? "Saving..." : "Submit for Review"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}