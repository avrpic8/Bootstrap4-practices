let day = document.getElementById("day");
let hour = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let btn = document.getElementById("btnFire");

class App{

    static run(){

        const timer = new CountDownTimer(new Date("sept 20, 2021 16:57:10"));
        timer.setDayElement(day);
        timer.setHourElement(hour);
        timer.setMinElement(min);
        timer.setSecElement(sec);
        timer.setButtonFireElement(btn);

        timer.render();
    }
}

App.run();