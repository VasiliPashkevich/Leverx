function goToGoogle() {
    window.location = "http://google.com/";
  }

  function clearAll() {
    if(document.getElementById("userafter").innerHTML == ""){
      if (user == null || user == "") {
        document.getElementById("userafter").innerHTML = ":)";
      }
       else {
        document.getElementById("userafter").innerHTML = user
       }
  }
    else{
      document.getElementById("userafter").innerHTML = "";
    }
  }


  var user = prompt("Please enter your name");
if (user == null || user == "") {
  usert = "User cancelled the prompt."
  document.getElementById("userafter").innerHTML = ":)";
}
 else {
  usert = "Actual user: " + user;
}
  document.getElementById("usert").innerHTML = usert;

  if (/[0-9]/.test(user)) {
    document.getElementById("userafter").innerHTML = user.split("").reverse().join("");
  }

  else
   var user = user.split("");
    for (i = 0; i < user.length; i++) {
        if (i % 2 == 0) {
            user[i] = user[i].toUpperCase();
        } else {
            user[i] = user[i].toLowerCase();
        }
    }
    user = user.join("");
    document.getElementById("userafter").innerHTML = user;

var timeoutID = window.setTimeout(user, 2000);

