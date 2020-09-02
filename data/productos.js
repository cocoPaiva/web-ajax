var myArray = [
  {
    "display": "Equipo de computo",
    "url": "https://www.w3schools.com/js/default.asp"
  },
  {
    "display": "iPhone XPlus",
    "url": "https://www.w3schools.com/html/default.asp"
  },
  {
    "display": "Office 365",
    "url": "https://www.w3schools.com/css/default.asp"
  }
];


function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].url + '">' + 
    arr[i].display + '</a><br>';
  }
  document.getElementById("id01").innerHTML = out;
}

myFunction(myArray);
