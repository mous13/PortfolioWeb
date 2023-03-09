const delay = ms => new Promise(res => setTimeout(res, ms));

async function init() {
await delay(2500);
alert("test");
}

