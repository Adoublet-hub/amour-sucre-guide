const isGitHubPages = window.location.hostname.endsWith("github.io");

const BASE_URL = isGitHubPages
    ? "/amour-sucre-guide/"
    : "/";

async function loadComponent(id, file) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    try {
        const response = await fetch(BASE_URL + file);

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        element.innerHTML = await response.text();

    } catch (error) {
        console.error(`Impossible de charger ${file}`, error);
    }
}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");