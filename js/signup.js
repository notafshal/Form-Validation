const pass = document.getElementById("pass");
const pass1 = document.getElementById("pass1");
const form = document.getElementById("form");

const signup = () => {
  if (pass === pass1) {
    return true;
  } else {
    document.getElementById("error").innerHTML = "*Passwords do not match*";
    return false;
  }
};
