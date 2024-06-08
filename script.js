function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    setTimeout(startTime, 500);
}

startTime();
