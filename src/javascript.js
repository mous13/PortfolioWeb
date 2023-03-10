const delay = ms => new Promise(res => setTimeout(res, ms));

async function init() {
    const portLoad = document.getElementById("portLoad");
    const portContainer = document.getElementById("portContainer");
    await delay(5000);
    portLoad.classList.add("fadeout");
    await delay(1000);
    // portContainer.classList.add("fadein");



}

