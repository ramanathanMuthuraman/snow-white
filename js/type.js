const text = "Mirror Mirror On The Wall!! who is the fairest of all?";
let temp = text;
let index = 0, c = 0;
let replaceString = "fairest", newString = "sweetest";
//get the index at which the replace string occurs
let counter = temp.indexOf(replaceString) + replaceString.length;
function type() {
//has the index reached and runs in accordance witht the length of the string
  if (counter <= index && c < replaceString.length) {
//inc variable c to check the length of replace string
    c++;
//decrement index and counter indicating removal of the letter
    index--;
    counter--;
//removal of the letter from the string
    temp = temp.substr(0, counter) + temp.substr(counter + 1);
    //set the whole html void of the removed character
    document.getElementById('queryHolder').innerHTML = temp.substr(0, counter);
//after removing all the characters from the string add the replacement word
    if (c === replaceString.length - 1) {
      temp = temp.substr(0, counter) + newString + temp.substr(counter);
    }

  }
  else {
    //append the new letter to the DOM
    document.getElementById('queryHolder').innerHTML += temp[index];
    index += 1;
  }
// clear set interval method once all the characters are rendered in DOM
  if (index >= temp.length) {
    clearInterval(t)
  }


};
const t = setInterval('type()', 100);

setTimeout(() => {
  $(".hole").addClass('no-animation');
}, 7500);