onmessage = function (e) {
    console.log('Worker: Message received from main script');
    if (e == "start") {
        postMessage([1, 2]);
    }
}