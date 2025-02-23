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
  if (!phone && !isValidPhoneNumber(phone)) {
    document.getElementById("phoneError").classList.remove("hidden");
    isValid = false;
  }
  if (!email && !isValidateEmail(email)) {
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

  const sendMsg = document.getElementById("form_send-msg");
  // Clear the message
  sendMsg.innerHTML = '';

  // Send email
  emailjs.send(serviceID, templateID, params)
    .then(response => {
      sendMsg.style.display = "block";
      sendMsg.style.color = "green";
      // Reset the form
      this.reset();
      document.getElementById("form_send-msg").innerHTML = "Message sent successfully!";
      // Remove the message after 3 seconds
      setTimeout(() => {
        sendMsg.style.display = "none";
      }, 5000);
    })
    .catch(error => {
      sendMsg.style.color = "red";
      sendMsg.innerHTML = "Error sending message";
    });
});

// Email validation, return true if email is valid
function isValidateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Phone number validation, return true if phone number is valid
function isValidPhoneNumber(phone) {
  const regex = /^\+?[0-9\s\-\(\)]{7,15}$/;
  return regex.test(phone);
}