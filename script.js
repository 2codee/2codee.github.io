document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const gameCards = document.querySelectorAll(".game-card");

    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase();

        gameCards.forEach(card => {
            const title = card.querySelector(".game-title").textContent.toLowerCase();
            if (title.includes(searchText)) {
                card.style.display = "block"; // Show matching games
            } else {
                card.style.display = "none"; // Hide non-matching games
            }
        });
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
