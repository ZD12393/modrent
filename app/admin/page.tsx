async function updateListingStatus(id: number, status: string) {
  const response = await fetch("/api/admin/listings/update-status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${password}`,
    },
    body: JSON.stringify({ id, status }),
  });

  const result = await response.json();

  if (!response.ok) {
    alert(result.error || "Could not update listing.");
    return;
  }

  if (status === "active" && result.emailSent) {
    alert("Listing approved and confirmation email sent.");
  } else if (
    status === "active" &&
    result.emailSent === false &&
    !result.emailNotRequired
  ) {
    alert(
      result.emailError ||
        "Listing approved, but the confirmation email could not be sent."
    );
  }

  await loadData();
}