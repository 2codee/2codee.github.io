// Search Function
function filterGames() {
    let searchQuery = document.getElementById("search").value.toLowerCase();
    let games = document.getElementsByClassName("game-card");

    for (let game of games) {
        let gameName = game.innerText.toLowerCase();
        game.style.display = gameName.includes(searchQuery) ? "block" : "none";
    }
}

// Save Settings
function saveSettings() {
    localStorage.setItem("tabName", document.getElementById("tabName").value);
    localStorage.setItem("panicKey", document.getElementById("panicKey").value);
    localStorage.setItem("panicURL", document.getElementById("panicURL").value);
    localStorage.setItem("aboutBlank", document.getElementById("aboutBlank").value);
    localStorage.setItem("theme", document.getElementById("theme").value);
    alert("Settings Saved!");
}

// Load Settings on Page Load
window.onload = function () {
    if (window.location.pathname.includes("settings.html")) {
        document.getElementById("tabName").value = localStorage.getItem("tabName") || "";
        document.getElementById("panicKey").value = localStorage.getItem("panicKey") || "";
        document.getElementById("panicURL").value = localStorage.getItem("panicURL") || "";
        document.getElementById("aboutBlank").value = localStorage.getItem("aboutBlank") || "Disabled";
        document.getElementById("theme").value = localStorage.getItem("theme") || "Default";
    }
};

// Reset Settings
function resetSettings() {
    localStorage.clear();
    location.reload();
}
