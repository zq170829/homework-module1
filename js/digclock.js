//create a time data function
function currentTime() {
  //Declare variables
  var d = new Date(); //get current date
  var hr24 = d.getHours(); //get current hours 0-23
  var min = d.getMinutes(); //get current minutes 0-59
  var sec = d.getSeconds(); //get current seconds 0-59
  var ampm; //declare empty variable to store AM or PM
  var hr12; //declare empty variable to store hour in a 12-hour format

  //adding a time zone to the clock
  var utchr = d.getUTCHours(); //Get the Universal Coordinated Time (UTC). It's same with GMT.
  var timeDiff = utchr - hr24;
  var timeZone;

  //add 0 to single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }
  //add o to single digits for minutes
  if (min < 10) {
    min = "0" + min;
  }

  //determine AM or PM string
  if (hr24 == 12) {
    hr12 = hr24; //transfer to 12-hour format
    ampm = "PM"; //Set to PM
  } else if (hr24 > 12 && hr24 < 24) {
    hr12 = hr24 - 12;
    ampm = "PM";
  } else {
    hr12 = hr24;
    ampm = "AM";
  }

  //determin time zone
  if (timeDiff == 7) {
    timeZone = "PT";
  } else if (timeDiff == 6) {
    timeZone = "MT";
  } else if (timeDiff == 5) {
    timeZone = "CT";
  } else if (timeDiff == 4) {
    timeZone = "ET";
  } else {
    timeZone = ' '; //only display four timezone of US.
  }
  //Assemble time format to display
  var time = hr12 + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

  //Display current local time and time zone on HTML elements
  document.getElementById("clock").innerText = time; //adding time
}
//Initial run of time data function
currentTime();

//Run time data function every 1 second
setInterval(currentTime, 1000); //setting timer


