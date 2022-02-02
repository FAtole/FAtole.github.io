onmessage = function (e) {
    console.log('Worker: Message received from main script');
    console.log(e.data);
    if (e.data == "start") {
        postMessage([1, 2]);
        console.log("Envoie message");
    }
}