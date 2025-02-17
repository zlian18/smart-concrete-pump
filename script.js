import emailjs from "emailjs-com";

document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector("[data-collapse-toggle='navbar-default']");
  const navbarMenu = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", function() {
    navbarMenu.classList.toggle("hidden"); // Toggle visibility
  });
});


emailjs.init("c4maUS76cLL4OwHWB"); // Replace with your EmailJS public key

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let address = document.getElementById("address").value.trim();
  let message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validation
  document.getElementById("nameError").classList.add("hidden");
  document.getElementById("phoneError").classList.add("hidden");
  document.getElementById("emailError").classList.add("hidden");
  document.getElementById("addressError").classList.add("hidden");

  if (!name) {
    document.getElementById("nameError").classList.remove("hidden");
    isValid = false;
  }
  if (!phone) {
    document.getElementById("phoneError").classList.remove("hidden");
    isValid = false;
  }
  if (!email) {
    document.getElementById("emailError").classList.remove("hidden");
    isValid = false;
  }
  if (!address) {
    document.getElementById("addressError").classList.remove("hidden");
    isValid = false;
  }

  if (!isValid) return;

  const serviceID = "service_mq18pbo"; // From EmailJS
  const templateID = "template_7mswjs7"; // From EmailJS

  const params = {
    name,
    phone,
    email,
    address,
    message,
  };

  emailjs.send(serviceID, templateID, params)
    .then(response => {
      alert("Email sent successfully!");
      console.log("Success:", response);
    })
    .catch(error => {
      alert("Failed to send email.");
      console.error("Error:", error);
    });
});