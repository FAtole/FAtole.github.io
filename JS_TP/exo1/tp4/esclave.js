onmessage = function (e) {
    console.log('Worker: Message received from main script');
    console.log(e.data);
    if (e.data == "start") {
        postMessage([Math.floor(Math.random() * 800), Math.floor(Math.random() * 800)]);
        console.log("Envoie message");
    }
}