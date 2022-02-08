onmessage = function (e) {
    if (e.data == "start") {
        postMessage([Math.floor(Math.random() * 800), Math.floor(Math.random() * 800)]);
    }
}