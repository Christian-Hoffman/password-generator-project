var generateBtn = document.querySelector("#generate");

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!','@','#','$','%','^','&','*'];

var length = 0;

function generatePassword() {
  // length = prompt('Enter password length');
  // if(length < 8; length > 128) {
    // alert('Password length must be between 8 and 128 characters');
    // return;
  // }
    
  var useuppercase = confirm('Do you want to include Uppercase Letters?');
  var uselowercase = confirm('Do you want to include Lowercase Letters?');
  var usenumbers = confirm('Do you want to include Numbers?');
  var usespecial = confirm('Do you want to include Special Characters?');

  var confirmed = [];

  if(useuppercase) {
    for (var x of uppercase) {
      confirmed.push(x);
    }
  }
  if(uselowercase) {
    for (var x of lowercase) {
      confirmed.push(x);
    }
  }
  if(usenumbers) {
    for (var x of numbers) {
      confirmed.push(x);
    }
  }
  if(usespecial) {
    for (var x of special) {
      confirmed.push(x);
    }
  }

console.log(confirmed);

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
