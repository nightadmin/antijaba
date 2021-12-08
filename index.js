function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
if (localStorage.getItem("auth") == null) {
  var auth = false;
}
else {
  var auth = localStorage.getItem("name");
}
if (auth) {
  document.querySelector("div.docs").style.display = "none";
  document.querySelector("div.hello").innerHTML = `Привет, ${auth}!`;
}
function _auth(token, name) {
  localStorage.setItem("auth", true);
  localStorage.setItem("name", name);
  localStorage.setItem("token", token);
}