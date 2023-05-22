text1.addEventListener("focus", function () {
    this.value = null;
}, false);

but.addEventListener("click", function () {
    if (isNaN(parseInt(text1.value))) {
    } else {
        text2.value = Math.pow(parseInt(text1.value), 2);
        text1.value = null;
    }
}, false);