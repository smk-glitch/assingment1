let verifyTimeout;

function verify() {
  const inputString = document.querySelector('.dateinput').value;
  const targetDate = new Date(inputString);

  const currentDate = new Date();
  let timeDifference = targetDate.getTime() - currentDate.getTime();

  if (inputString === '') {
    return alert('Input A Valid Date');
  } else {
    myFunction(currentDate, targetDate, timeDifference);
  }
}

function myFunction(currentDate, targetDate, timeDifference) {
  const timeDiff = targetDate.getTime() - currentDate.getTime();
  const seconds = Math.floor(timeDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours % 24;
  document.querySelector('.minutes').innerHTML = minutes % 60;
  document.querySelector('.seconds').innerHTML = seconds % 60

  if(document.querySelector('.days').innerHTML < 10) {
    document.querySelector('.days').innerHTML = " " + "0" +  document.querySelector('.days').innerHTML + " " + ":"
  } else {document.querySelector('.days').innerHTML = " " + document.querySelector('.days').innerHTML  + " " + ":"}
  
  if(document.querySelector('.hours').innerHTML < 10) {
    document.querySelector('.hours').innerHTML = " " + "0" + document.querySelector('.hours').innerHTML + " " + ":"
  } else {document.querySelector('.hours').innerHTML = " " + document.querySelector('.hours').innerHTML + " " + ":"}
  
  if(document.querySelector('.minutes').innerHTML < 10) {
    document.querySelector('.minutes').innerHTML = " " + "0" + document.querySelector('.minutes').innerHTML + " " + ":"
  } else {document.querySelector('.minutes').innerHTML = " " + document.querySelector('.minutes').innerHTML + " " + ":"}
  
  if(document.querySelector('.seconds').innerHTML < 10) {
    document.querySelector('.seconds').innerHTML = " " + "0" + document.querySelector('.seconds').innerHTML 
  } else {document.querySelector('.seconds').innerHTML =  " " + document.querySelector('.seconds').innerHTML }
  
  
    timeDifference = timeDiff;
  
    if (timeDifference > 0) {
      verifyTimeout =  setTimeout(verify, 1000);
    } else {
      return alert("Your Countdown Is Done")
    }
  
  }
  
  document.querySelector('#b2').addEventListener('click', reset);
  
  function reset() {
    clearTimeout(verifyTimeout);
  
    document.querySelector('.days').innerHTML = '00';
    document.querySelector('.hours').innerHTML = '00';
    document.querySelector('.minutes').innerHTML = '00';
    document.querySelector('.seconds').innerHTML = '00';
  }
  