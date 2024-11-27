const apps = [
    {
        name: "ChatGPT",
        version: "v2.3.1",
        updates: ["Improved response accuracy", "Faster processing time"],
        description: "AI-powered assistant for all your queries.",
        image: "https://via.placeholder.com/100",
        downloadLink: "#",
    },
    {
        name: "Weather Now",
        version: "v4.1.0",
        updates: ["Added air quality index", "Bug fixes for alerts"],
        description: "Get real-time weather updates anywhere.",
        image: "https://via.placeholder.com/100",
        downloadLink: "#",
    },
    {
        name: "Fitness Pro",
        version: "v1.9.5",
        updates: ["New workout routines", "UI improvements"],
        description: "Your personal fitness trainer app.",
        image: "https://via.placeholder.com/100",
        downloadLink: "#",
    },
    {
        name: "Music Beats",
        version: "v3.0.2",
        updates: ["Enhanced audio quality", "Playlist sharing feature"],
        description: "Stream your favorite songs.",
        image: "https://via.placeholder.com/100",
        downloadLink: "#",
    },
];

function loadApps() {
    const appList = document.getElementById("app-list");
    appList.innerHTML = apps
        .map(
            (app) => `
        <div class="app-card">
            <img src="${app.image}" alt="${app.name}">
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <p class="version">Version: ${app.version}</p>
            <div class="update-log">
                <strong>Updates:</strong>
                <ul>
                    ${app.updates.map((update) => `<li>${update}</li>`).join("")}
                </ul>
            </div>
            <a class="download-btn" href="${app.downloadLink}" target="_blank">Download</a>
        </div>
    `
        )
        .join("");
}

function filterApps() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredApps = apps.filter((app) =>
        app.name.toLowerCase().includes(searchTerm)
    );
    const appList = document.getElementById("app-list");
    appList.innerHTML = filteredApps
        .map(
            (app) => `
        <div class="app-card">
            <img src="${app.image}" alt="${app.name}">
            <h3>${app.name}</h3>
            <p>${app.description}</p>
            <p class="version">Version: ${app.version}</p>
            <div class="update-log">
                <strong>Updates:</strong>
                <ul>
                    ${app.updates.map((update) => `<li>${update}</li>`).join("")}
                </ul>
            </div>
            <a class="download-btn" href="${app.downloadLink}" target="_blank">Download</a>
        </div>
    `
        )
        .join("");
}

window.onload = loadApps;
 
