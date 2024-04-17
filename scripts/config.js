function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";

  // Removing the error message and css styling...
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";

  // Resetting input value to empty string...
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  // Prevent from default browser behavior of sending request automatically...
  event.preventDefault();

  // Getting form data...
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  // Validating the input...
  if (!enteredPlayerName) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }

  // Updating the Player Name...
  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closePlayerConfig();
}
