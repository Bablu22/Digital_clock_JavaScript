function digitalClock() {
    let date = new Date();
    let hour = date.getHours();
    let miniute = date.getMinutes();
    let second = date.getSeconds();
    let timeFormat = "AM";
    //Date
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    month = month + 1;




    //Time
    if (hour === 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        timeFormat = "PM";
    }
    // Ternary Operator
    hour = hour < 10 ? '0' + hour : hour;
    miniute = miniute < 10 ? '0' + miniute : miniute;
    second = second < 10 ? '0' + second : second;

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    //Literal Templete
    let finalTime = `${hour} : ${miniute} : ${second}`;
    let fullDate = `${day} : ${month} : ${year}`;




    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;
    document.getElementById('date').innerText = "Date: " +fullDate;
    setInterval(digitalClock, 1000);
}
digitalClock();