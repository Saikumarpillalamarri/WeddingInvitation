// Countdown Timer

const weddingDate = new Date("May 9, 2025 19:15:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "<div>It's Wedding Time! 💖</div>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}, 1000);

// RSVP Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("rsvpForm");
  const responseMessage = document.getElementById("responseMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const guests = document.getElementById("guests").value;
    const attendance = document.getElementById("attendance").value;
    const meal = document.getElementById("meal").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !guests || !attendance || !meal) {
      responseMessage.textContent = "Please fill in all required fields.";
      responseMessage.style.color = "red";
      return;
    }

    if (meal === "Non-Veg") {
      responseMessage.innerHTML = `Sorry macha, this is only for vegetarians 🐶`;
      responseMessage.style.color = "orange";
      return;
    }

    // Display confirmation message
    responseMessage.innerHTML = `
      Thank you, <strong>${name}</strong>!<br>
      We've received your RSVP: <strong>${attendance}</strong>.<br>
      Guests: <strong>${guests}</strong><br>
      Meal: <strong>${meal}</strong><br>
      ${message ? `Message: "${message}"` : ``}
    `;
    responseMessage.style.color = "green";

    setTimeout(() => {
      form.submit(); // Real submission to FormSubmit
    }, 1500); // Delay for showing message
  });
});
/******PLay song*****/
function playWeddingMusic() {
  const audio = document.getElementById('weddingAudio');
  audio.play();

  // Hide the button after click
  const container = document.querySelector('.enter-button-container');
  container.style.display = 'none';
}