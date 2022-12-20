
    const deg = 6;
    const hourHand = document.querySelector('.hours');
    const minHand = document.querySelector('.minutes');
    const secondHand = document.querySelector('.seconds');


    setInterval(() => {
    const day = new Date();

    const hours = day.getHours() * 30;
    const minutes = day.getMinutes() * deg;
    const seconds = day.getSeconds() * deg;

    hourHand.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`;
    minHand.style.transform = `rotateZ(${minutes}deg)`;
    secondHand.style.transform = `rotateZ(${seconds}deg)`;

}, 0);



