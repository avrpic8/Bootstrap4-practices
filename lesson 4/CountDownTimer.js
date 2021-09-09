class CountDownTimer{

    constructor(expiredDate) {
        this.expiredDate = expiredDate;
    }

    getExpiredDate(){

        // current date
        const currentTime = new Date().getTime();

        // calculate the remaining time
        return this.timeRemaining = this.expiredDate.getTime() - currentTime;
    }

    getTime(){

        this.day    = Math.floor(this.getExpiredDate() / 1000 / 60 / 60 / 24);
        this.hours   = Math.floor(this.getExpiredDate() / 1000 / 60 / 60) % 24;
        this.minutes = Math.floor(this.getExpiredDate() / 1000 / 60) % 60;
        this.seconds = Math.floor(this.getExpiredDate() / 1000) % 60;

        return {
            day: this.day,
            hour: this.hours,
            min:  this.minutes,
            sec:  this.seconds
        };
    }

    setDayElement(dayEl){
        this.dayEl = dayEl;
    }

    setHourElement(hourEl){
        this.hourEl = hourEl;
    }

    setMinElement(minEl){
        this.minEl = minEl;
    }

    setSecElement(secEl){
        this.secEl = secEl;
    }

    setButtonFireElement(btnEl){
        this.btnFire = btnEl;
    }

    resetAllElement(){

        this.dayEl.innerHTML = 0;
        this.hourEl.innerHTML = 0;
        this.minEl.innerHTML = 0;
        this.secEl.innerHTML = 0;

        this.enableButton();
    }

    enableButton(){
        this.btnFire.classList.remove("d-none");
    }

    render(){
        const interval = setInterval(() => {

            this.dayEl.innerHTML= this.getTime().day;
            this.hourEl.innerHTML= this.getTime().hour;
            this.minEl.innerHTML= this.getTime().min;
            this.secEl.innerHTML= this.getTime().sec;
            // If the count down is over, write some text
            if (this.timeRemaining < 0) {
                clearInterval(interval);
                console.log("EXPIRED");
                this.resetAllElement();
            }

        }, 1000);
    }
}
