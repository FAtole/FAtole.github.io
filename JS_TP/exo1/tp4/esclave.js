onmessage = function (e) {
    console.log('Worker: Message received from main script');
    if (e == "start") {
        a = { x=1, y=2 };
        postMessage(a);
    }
}