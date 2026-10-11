// Set your booking link here (GoHighLevel calendar, Calendly, etc.)
const BOOKING_URL = "#";

document.querySelectorAll("[data-book]").forEach((link) => {
  link.href = BOOKING_URL;
  if (BOOKING_URL.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noopener";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
