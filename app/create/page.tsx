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

  const resetForm = () => {
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

      const response = await fetch("/api/submit-listing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
          turnstileToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "There was a problem submitting the listing.");
        setSaving(false);
        return;
      }

      trackEvent("listing_submitted");

      if (result.emailSent) {
        alert(
          "Listing submitted successfully. A confirmation email has been sent to you."
        );
      } else {
        alert(
          "Listing submitted successfully. It will appear publicly once approved by ModRent."
        );
      }

      resetForm();
    } catch (error) {
      console.error("Listing submission failed:", error);
      alert("Something went wrong while submitting the listing.");
    }

    setSaving(false);
  };

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#1f2933]">
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-10">
            <div className="mb-5 inline-block rounded-full border border-[#d8cdbb] bg-[#fffdf8] px-4 py-2 text-sm font-semibold text-[#244e3b]">
              Free property listings
            </div>

            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-[#173528] md:text-5xl">
              Your unused space could be someone&apos;s next home.
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-[#5f6b63]">
              Have a garden cabin, modular home or self-contained space
              available? List it free on ModRent and reach people looking
              specifically for this type of accommodation.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex gap-4 rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6efe8] font-bold text-[#244e3b]">
                  1
                </div>

                <div>
                  <h2 className="mb-1 font-bold text-[#173528]">
                    100% free to list
                  </h2>
                  <p className="text-sm leading-6 text-[#5f6b63]">
                    Create your standard listing and receive enquiries with no
                    upfront listing fee.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6efe8] font-bold text-[#244e3b]">
                  2
                </div>

                <div>
                  <h2 className="mb-1 font-bold text-[#173528]">
                    Renters are already looking
                  </h2>
                  <p className="text-sm leading-6 text-[#5f6b63]">
                    Reach people looking for modular homes, cabins and
                    alternative rental accommodation in Ireland.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6efe8] font-bold text-[#244e3b]">
                  3
                </div>

                <div>
                  <h2 className="mb-1 font-bold text-[#173528]">
                    Receive direct enquiries
                  </h2>
                  <p className="text-sm leading-6 text-[#5f6b63]">
                    Interested renters can contact you directly through your
                    ModRent listing.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#244e3b] p-6 text-white md:p-7">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-[#e9c58d]">
                What can I list?
              </p>

              <h2 className="mb-5 text-xl font-bold">
                Suitable spaces may include:
              </h2>

              <ul className="space-y-3 text-sm leading-6 text-[#eef5ef]">
                <li>Modular homes or prefabricated accommodation</li>
                <li>Garden cabins or self-contained garden units</li>
                <li>Detached studios or backyard rental spaces</li>
                <li>Compact standalone units with appropriate facilities</li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <div>
            <form
              onSubmit={handleSubmit}
              onChange={trackListingStarted}
              className="space-y-6 rounded-[28px] border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-[0_18px_50px_rgba(31,41,51,0.08)] md:p-8"
            >
              <div>
                <div className="mb-5 inline-block rounded-full border border-[#d8cdbb] bg-white px-3 py-1 text-sm font-medium text-[#244e3b]">
                  Property details
                </div>

                <h2 className="mb-3 text-3xl font-bold text-[#173528]">
                  Create your free listing
                </h2>

                <p className="text-base leading-7 text-[#5f6b63]">
                  Add a few details and photos below. It only takes a few
                  minutes. We&apos;ll quickly check your listing before it goes
                  live.
                </p>
              </div>

              {/* AUTO TITLE */}
              <div className="rounded-2xl border border-[#d8cdbb] bg-white p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#c9823a]">
                  Your listing title
                </p>

                <p className="text-lg font-semibold text-[#173528]">
                  {generatedTitle ||
                    "We'll create this automatically for you"}
                </p>

                <p className="mt-2 text-sm leading-6 text-[#5f6b63]">
                  Your title will be created automatically from the unit type,
                  town and county you enter below.
                </p>
              </div>

              {/* UNIT TYPE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#173528]">
                  What type of property is it?
                </label>

                <select
                  value={unitType}
                  onChange={(e) => setUnitType(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 text-[#1f2933] outline-none focus:border-[#244e3b]"
                >
                  <option value="">Select unit type</option>
                  {unitTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* LOCATION */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#173528]">
                    Town or area
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Ashford"
                    value={town}
                    onChange={(e) => setTown(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 outline-none focus:border-[#244e3b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#173528]">
                    County
                  </label>

                  <select
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 text-[#1f2933] outline-none focus:border-[#244e3b]"
                  >
                    <option value="">Select county</option>
                    {counties.map((countyName) => (
                      <option key={countyName} value={countyName}>
                        {countyName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* RENT / BEDROOMS / BATHROOMS */}
              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#173528]">
                    Monthly rent (€)
                  </label>

                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 1200"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    required
                    className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 outline-none focus:border-[#244e3b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#173528]">
                    Bedrooms
                  </label>

                  <input
                    type="number"
                    min="0"
                    placeholder="1"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 outline-none focus:border-[#244e3b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#173528]">
                    Bathrooms
                  </label>

                  <input
                    type="number"
                    min="0"
                    placeholder="1"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 outline-none focus:border-[#244e3b]"
                  />
                </div>
              </div>

              {/* AVAILABLE */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#173528]">
                  Available from
                </label>

                <input
                  type="date"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 outline-none focus:border-[#244e3b]"
                />
              </div>

              {/* OPTIONS */}
              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#d8cdbb] bg-white p-4 transition hover:border-[#244e3b]">
                  <input
                    type="checkbox"
                    checked={billsIncluded}
                    onChange={(e) => setBillsIncluded(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span className="font-medium text-[#173528]">
                    Bills included
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#d8cdbb] bg-white p-4 transition hover:border-[#244e3b]">
                  <input
                    type="checkbox"
                    checked={petFriendly}
                    onChange={(e) => setPetFriendly(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <span className="font-medium text-[#173528]">
                    Pet friendly
                  </span>
                </label>
              </div>

              {/* PHOTOS */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#173528]">
                  Add your photos
                </label>

                <label className="block cursor-pointer rounded-[22px] border-2 border-dashed border-[#d8cdbb] bg-white px-6 py-8 text-center transition hover:border-[#244e3b]">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handlePhotoChange(e.target.files)}
                    className="sr-only"
                  />

                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e6efe8] text-2xl text-[#244e3b]">
                    +
                  </div>

                  <p className="font-bold text-[#173528]">
                    {photos.length > 0
                      ? `${photos.length} photo${
                          photos.length === 1 ? "" : "s"
                        } selected`
                      : "Choose photos from your device"}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#5f6b63]">
                    Upload up to {MAX_PHOTOS} clear photos. Maximum{" "}
                    {MAX_FILE_SIZE_MB}MB per photo.
                  </p>
                </label>
              </div>

              {/* BANNER IMAGE */}
              {photos.length > 0 && (
                <div className="rounded-2xl border border-[#d8cdbb] bg-white p-5">
                  <h2 className="mb-2 text-lg font-bold text-[#173528]">
                    Choose your main photo
                  </h2>

                  <p className="mb-4 text-sm leading-6 text-[#5f6b63]">
                    This is the first image renters will see when they find your
                    property.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {photos.map((photo, index) => (
                      <label
                        key={`${photo.name}-${index}`}
                        className={`cursor-pointer overflow-hidden rounded-2xl border-2 bg-white transition ${
                          bannerIndex === index
                            ? "border-[#244e3b]"
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

                          <span className="text-sm font-medium text-[#173528]">
                            {bannerIndex === index
                              ? "Main photo"
                              : "Use as main photo"}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* DESCRIPTION */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#173528]">
                  Tell renters about your property
                </label>

                <textarea
                  placeholder="For example: Tell renters about the space, location, access, parking, utilities and anything else that makes it a good place to live."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="h-40 w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 outline-none focus:border-[#244e3b]"
                />

                <p className="mt-2 text-sm text-[#6b746e]">
                  You don&apos;t need to write an advert — just describe the
                  property clearly and honestly.
                </p>
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#173528]">
                  Your contact email
                </label>

                <input
                  type="email"
                  placeholder="you@example.ie"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-[#d8d2c7] bg-white px-4 py-3.5 outline-none focus:border-[#244e3b]"
                />

                <p className="mt-2 text-sm text-[#6b746e]">
                  We&apos;ll use this for your listing and submission
                  confirmation.
                </p>
              </div>

              {/* OWNER RESPONSIBILITY */}
              <div className="border-t border-[#d8cdbb] pt-6">
                <p className="text-sm leading-6 text-[#6b746e]">
                  <strong className="text-[#173528]">
                    Owner responsibility:
                  </strong>{" "}
                  Owners are responsible for ensuring their property meets
                  applicable planning, tax, insurance, safety, building
                  regulation and legal requirements. ModRent is a listing
                  marketplace and does not verify compliance.
                </p>
              </div>

              {/* TURNSTILE */}
              <Turnstile
                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""}
                onVerify={(token) => setTurnstileToken(token)}
                onExpire={() => setTurnstileToken("")}
              />

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={saving}
                style={{
                  backgroundColor: "#244e3b",
                  color: "#ffffff",
                  padding: "17px 28px",
                  borderRadius: "14px",
                  display: "inline-block",
                  fontWeight: 700,
                  fontSize: "16px",
                  opacity: saving ? 0.6 : 1,
                  width: "100%",
                  cursor: saving ? "not-allowed" : "pointer",
                }}
              >
                {saving ? "Creating your listing..." : "Create My Free Listing"}
              </button>

              <p className="text-center text-xs leading-5 text-[#6b746e]">
                Your listing will be checked by ModRent before appearing
                publicly.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}