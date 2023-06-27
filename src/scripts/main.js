AOS.init();

const eventDate = new Date("May 22, 2024 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval( function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const distanceUntilEvent = eventTimeStamp - timeStampNow;

    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    const daysUntilEvent = Math.floor(distanceUntilEvent / daysInMs);
    const hoursUntilEvent = Math.floor((distanceUntilEvent % daysInMs) / hoursInMs);
    const minutesUntilEvent = Math.floor((distanceUntilEvent % hoursInMs) / minutesInMs);
    const secondsUntilEvent = Math.floor((distanceUntilEvent % minutesInMs) / 1000);

    document.getElementById("counter").innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (distanceUntilEvent < 0) {
        clearInterval(countHours);
        document.getElementById("counter").innerHTML = "0d 0h 0m 0s";
    }

}, 1000);