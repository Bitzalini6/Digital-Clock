const clock = document.querySelector(".clock"); //selecting the clock div
const message = document.querySelector(".message"); //selecting the message div

const ticking = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const html = `
  <span>${hours}</span> 
  <span>${minutes}</span> 
  <span>${seconds}</span> 
  `;

  clock.innerHTML = html; //injecting the hours,minutes and seconds into the hmtl with the "innerHTML";

  if (now.getMinutes() === 13) {
    //if it`s 8 am inject the message below into the hmtl;
    message.innerHTML = "GOOD MORNING,ITS BREAKFAST TIME !!!";
  }

  if (now.getHours() === 12) {
    //if it`s 12 pm inject the message below into the hmtl;
    message.innerHTML = "HI ! ITS LUNCH TIME !!!";
  }
  if (now.getHours() === 18) {
    //if it`s 18 pm inject the message below into the hmtl;
    message.innerHTML = "HELLO ITS DINNER TIME !!!";
  }
};

setInterval(ticking, 1000); //making the ticking every second
