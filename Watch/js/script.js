function clockRuner() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    var clock = hour + ":" + minute + ":" + second;

    document.getElementById('myClockDisplay').textContent = clock;

    setTimeout(clockRuner, 1000);
}

clockRuner();