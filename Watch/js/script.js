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

    // شرط زیر برای اینه که اعداد تک رقمی مثل8 نشون نه و دو رقمی 08 نشون بده
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    var clock = hour + ":" + minute + ":" + second + " " + p;

    document.getElementById('myClockDisplay').textContent = clock;

    setTimeout(clockRuner, 1000);
}

clockRuner();