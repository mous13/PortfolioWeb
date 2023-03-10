const delay = ms => new Promise(res => setTimeout(res, ms));

async function init() {
    const portLoad = document.getElementById("portLoad");
    const portLoadChildren = document.getElementById("portLoad").children;
    const portContainer = document.getElementById("portContainer");
     await delay(5000);
     portLoadChildren.item(0).classList.add("slide-out-elliptic-top-bck")
    await delay(250);
    portLoadChildren.item(1).classList.add("slide-out-elliptic-top-bck")
    await delay(250);
     portLoadChildren.item(2).classList.add("slide-out-elliptic-top-bck")

     await delay(1000);
    portContainer.classList.add("fadein");



}

