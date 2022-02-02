onmessage = function (e) {
    console.log('Worker: Message received from main script');
    console.log(e);
    if (e == "start") {
        postMessage([1, 2]);
        console.log("Envoie message");
    }
}