function clockRuner() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    // شروط زیر برای اینه که 13 و 14 و.. نداشته باشیم
    var p = 'PM';
    if (hour > 12) {
        hour = hour - 12;
        p = 'PM';
    }

    var clock = hour + ":" + minute + ":" + second + " " + p;

    document.getElementById('myClockDisplay').textContent = clock;

    setTimeout(clockRuner, 1000);
}

clockRuner();