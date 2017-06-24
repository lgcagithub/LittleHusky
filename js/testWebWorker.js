for (var index = 0; index < 20000; index++) {
    postMessage(index);
}

postMessage("down");

addEventListener("message", function(e) {
    console.log(e.data.e.similarity);
});