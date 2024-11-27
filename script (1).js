const apps = [
    {
        name: "ChatGPT",
        description: "AI-powered assistant for all your queries.",
        image: "https://via.placeholder.com/100",
    },
    {
        name: "Weather Now",
        description: "Get real-time weather updates anywhere.",
        image: "https://via.placeholder.com/100",
    },
    {
        name: "Fitness Pro",
        description: "Your personal fitness trainer app.",
        image: "https://via.placeholder.com/100",
    },
    {
        name: "Music Beats",
        description: "Stream your favorite songs.",
        image: "https://via.placeholder.com/100",
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
        </div>
    `
        )
        .join("");
}

window.onload = loadApps;
