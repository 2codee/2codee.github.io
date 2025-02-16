// Search Function
document.getElementById('search').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    let games = document.querySelectorAll('.game-card');

    games.forEach(game => {
        let title = game.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
});


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
