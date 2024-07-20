let lastSubmitTime = 0; // Variable to track the last submission time
const cooldownPeriod = 5000; // Cooldown period in milliseconds (5000ms = 5 seconds)

function openForm() {
  document.getElementById("popup-form").style.display = "flex";
}

function closeForm() {
  document.getElementById("popup-form").style.display = "none";
}

document
  .getElementById("quote-form")
  .addEventListener("submit", function (event) {
    const now = Date.now();
    if (now - lastSubmitTime < cooldownPeriod) {
      // If the form was submitted within the cooldown period
      event.preventDefault(); // Prevent the form from submitting
      alert("Please wait 5 seconds before trying submitting the form again.");
      return;
    }

    // Update the last submission time
    lastSubmitTime = now;

    // Optionally, disable the submit button
    const submitButton = document.getElementById("submit-button");
    submitButton.disabled = true;

    // Re-enable the submit button after the cooldown period
    setTimeout(() => {
      submitButton.disabled = false;
    }, cooldownPeriod);
  });
