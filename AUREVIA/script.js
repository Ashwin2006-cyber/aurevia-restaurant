// ==================================
// AUREVIA - JAVASCRIPT FUNCTIONALITY
// ==================================

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// SET MINIMUM BOOKING DATE

const bookingDate = document.getElementById("bookingDate");

const today = new Date();

const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

bookingDate.min = localToday;


// WHATSAPP RESERVATION FORM

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const date = bookingDate.value;
    const guests = document.getElementById("guests").value;

    if (!name || !phone || !date || !guests) {
        alert("Please fill in all the details.");
        return;
    }

    // DEMO NUMBER - REPLACE BEFORE REAL CLIENT DELIVERY
    const restaurantNumber = "919876543210";

    const message =
        `Hello AUREVIA! I would like to request a reservation.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Date: ${date}\n` +
        `Guests: ${guests}\n\n` +
        `Please confirm availability.`;

    const whatsappURL =
        `https://wa.me/${restaurantNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});