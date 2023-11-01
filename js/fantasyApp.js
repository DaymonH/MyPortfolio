document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("playerForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get the form values
      const playerName = document.getElementById("playerName").value;
      const trimmedPlayerName = playerName.trim(); // Remove leading and trailing spaces
      const playerNameWithPlus = trimmedPlayerName.replace(/ /g, "+"); // Replace spaces with '+'
      console.log(playerNameWithPlus);
      const opponent = document.getElementById("opponent").value;
      const week = document.getElementById("week").value;

      // Construct the URL with query parameters
      const apiUrl = `https://fantasy-api-daymonh.replit.app/?playerName=${playerNameWithPlus}&opponent=${opponent}&week=${week}`;

      // Make a GET request to your API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          document.getElementById(
            "result"
          ).innerHTML = `API Response: ${JSON.stringify(data)}`;
        })
        .catch((error) => {
          console.error("Error:", error);
          document.getElementById("result").innerHTML =
            "Error occurred while fetching data.";
        });
    });
});
