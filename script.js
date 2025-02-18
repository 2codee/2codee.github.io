document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const gameCards = document.querySelectorAll(".game-card");
    const settingsButton = document.querySelector(".settings-button");
    const settingsMenu = document.querySelector(".settings-menu");
    const applyButton = document.querySelector(".apply-button");
    const closeButton = document.querySelector(".close-button");

    if (settingsMenu) {
        settingsMenu.style.display = "none";
    }

    settingsButton.addEventListener("click", function () {
        settingsMenu.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        settingsMenu.style.display = "none";
    });
    
    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase().trim();

        gameCards.forEach(card => {
            const title = card.getAttribute("data-title").toLowerCase();
            card.style.display = title.includes(searchText) ? "flex" : "none";
        });
    });

    settingsButton.addEventListener("click", function () {
        settingsMenu.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        settingsMenu.style.display = "none";
    });

    applyButton.addEventListener("click", function () {
        const tabName = document.getElementById("tabName").value;
        const faviconURL = document.getElementById("faviconURL").value;
        const panicKey = document.getElementById("panicKey").value;
        const panicURL = document.getElementById("panicURL").value;

        if (tabName) document.title = tabName;

        if (faviconURL) {
            let link = document.querySelector("link[rel='icon']");
            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }
            link.href = faviconURL;
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === panicKey) {
                window.location.href = panicURL;
            }
        });
    });
});
