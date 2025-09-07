console.log("Hello script loaded!");

// Toggle popup and overlay display
function togglePopup() {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const isVisible = popup.style.display === "block";
  popup.style.display = isVisible ? "none" : "block";
  overlay.style.display = isVisible ? "none" : "block";
}

// Close popup and overlay
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// Basic alerts
function showAlert() {
  alert("This is just an alert. Nothing more than that. 😄");
}

function showAlert2() {
  alert("🚨 Just kidding! You're not actually hacked. Stay safe!");
}

// Accordion item open/close class toggle
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    item.addEventListener("show.bs.collapse", function () {
      this.classList.add("open");
    });
    item.addEventListener("hide.bs.collapse", function () {
      this.classList.remove("open");
    });
  });
});

// Alert before education scroll
function alertEdu() {
  alert("📚 Scroll down to see the qualifications.");
}

// Confirm before viewing projects
function alertPro() {
  const decision = confirm("Do you really want to see the projects?");
  if (decision) {
    alert("🚀 Scroll down to see projects.");
  } else {
    alert("Then why did you click me? 😅");
  }
}

// Redirect to Instagram or other site on subscribe
function subscribe() {
  const paymentAppUrl = "https://www.instagram.com";
  window.location.href = paymentAppUrl;
}

// Open portfolio link in new tab
function chromeclick() {
  const url = "https://ams-portfolio.web.app";
  window.open(url, "_blank");
}

//==== OPTIONAL SERVER-SIDE (commented out for browser safety) ==== */

// 
  const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const YourModel = mongoose.model('YourModel', yourSchema);
module.exports = YourModel;


// Example fetch from local API (not usable on static site)

fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('data-container');
    data.forEach(item => {
      const listItem = document.createElement('div');
      listItem.textContent = JSON.stringify(item);
      container.appendChild(listItem);
    });
  })
  .catch(error => console.error(error));


(function() {
    emailjs.init("YOUR_USER_ID"); // from EmailJS dashboard
  })();

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => alert('Message sent!'), err => alert('Failed to send'));
  });
///contact form data store in localstorage
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent actual form submission

      // Get form data
      const name = form.elements['from_name'].value;
      const email = form.elements['reply_to'].value;
      const message = form.elements['message'].value;

      // Create object
      const contactData = {
        name: name,
        email: email,
        message: message,
        time: new Date().toLocaleString()
      };

      // Store in localStorage
      const storedData = JSON.parse(localStorage.getItem('contactMessages')) || [];
      storedData.push(contactData);
      localStorage.setItem('contactMessages', JSON.stringify(storedData));

      // Optional: Clear form and show success message
      form.reset();
      alert('Message saved locally!');
    });
  });

  document.getElementById("sendbtn").addEventListener("click", function (event) {
    event.preventDefault(); // prevent default form submission (remove if using backend)
    
    // Show popup
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    // Hide after 3 seconds
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  });

   document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('#navbarNav');

      // If toggler is visible (menu is collapsed)
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click(); // Triggers collapse
      }
    });
});

