function demo(input) {

    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrived = Number(input[2]);
    let minuteArrived = Number(input[3]);

    let exameTime = (hourExam * 60) + minuteExam;
    let arrivedtime = (hourArrived * 60) + minuteArrived;
    let lateEarlyOnTime = exameTime - arrivedtime;
    let hour = 0;
    let min = 0;
    let deviation = arrivedtime - exameTime;

    if (lateEarlyOnTime == 0) {
        console.log("On time");
    } else {
        if (lateEarlyOnTime > 0 && lateEarlyOnTime <= 30) {
            console.log("On time");
            console.log(`${lateEarlyOnTime} minutes before the start`);
        } else if (lateEarlyOnTime > 30 && lateEarlyOnTime <= 59) {
            console.log("Early");
            console.log(`${lateEarlyOnTime} minutes before the start`);
        } else if (lateEarlyOnTime >= 60) {
            hour = (lateEarlyOnTime / 60);
            min = lateEarlyOnTime % 60;
            console.log("Early");
            if (min < 10) {
                min = "0" + min;
            }
            console.log(`${Math.floor(hour)}:${min} hours before the start`);
        } else if (arrivedtime > exameTime) {
            if (deviation <= 59) {
                console.log("Late");
                console.log(`${deviation} minutes after the start`);
            } else if (deviation >= 60) {
                hour = deviation / 60;
                min = deviation % 60;
                if (min < 10) {
                    min = "0" + min;
                }
                console.log("Late");
                console.log(`${Math.floor(hour)}:${min} hours after the start`);
            }
        }

    }
}
