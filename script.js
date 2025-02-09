document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector("[data-collapse-toggle='navbar-default']");
  const navbarMenu = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", function() {
    navbarMenu.classList.toggle("hidden"); // Toggle visibility
  });
});

const submitBtn = document.getElementById("submitBtn");

if (submitBtn) {
  submitBtn.addEventListener("click", function() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    // Validation
    document.getElementById("nameError").classList.add("hidden");
    document.getElementById("phoneError").classList.add("hidden");

    if (!name) {
      document.getElementById("nameError").classList.remove("hidden");
      isValid = false;
    }
    if (!phone) {
      document.getElementById("phoneError").classList.remove("hidden");
      isValid = false;
    }

    if (!isValid) return;

    // Construct mailto link
    let subject = encodeURIComponent("Pump Booking Request from " + name);
    let body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nMessage: ${message}`
    );

    // Open mail client
    window.location.href = `mailto:smartconcretepumping@gmail.com?subject=${subject}&body=${body}`;
  });
}
