function calculate(){
 let year=document.getElementById('leapyear').value;
 document.getElementById("answer").innerText = leapyearfinder(year);

}

function leapyearfinder(year){
if (year % 400 === 0){
  return'ItsALeapyear'
}
if (year % 100 === 0)  {
  return 'ItsNotALeapyear'
}
if (year % 4 === 0)  {
  return'ItsALeapyear!'
}}
