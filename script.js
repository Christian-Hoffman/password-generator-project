var generateBtn = document.querySelector("#generate");

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!','@','#','$','%','^','&','*'];

var length = 0;

function generatePassword() {
  length = prompt('Enter password length');
    if(!length | length < 8 | length > 128) {
      alert('Password length must be between 8 and 128 characters');
      return;
    }
    
  var useuppercase = confirm('Do you want to include Uppercase Letters?');
  if(useuppercase) {
    console.log('Your password will contain Uppercase Letters');
    alert('Your password will contain Uppercase Letters')
  } else if(!useuppercase) {
    console.log('Your password will NOT contain Uppercase Letters');
    alert('Your password will NOT contain Uppercase Letters')
  }

  var uselowercase = confirm('Do you want to include Lowercase Letters?');
  if(uselowercase) {
    console.log('Your password will contain Lowercase Letters');
    alert('Your password will contain Lowercase Letters')
  } else if(!uselowercase) {
    console.log('Your password will NOT contain Lowercase Letters');
    alert('Your password will NOT contain Lowercase Letters')
  }

  var usenumbers = confirm('Do you want to include Numbers?');
  if(usenumbers) {
    console.log('Your password will contain Numbers');
    alert('Your password will contain Numbers')
  } else if(!usenumbers) {
    console.log('Your password will NOT contain Numbers');
    alert('Your password will NOT contain Numbers')
  }

  var usespecial = confirm('Do you want to include Special Characters?');
  if(usespecial) {
    console.log('Your password will contain Special Characters');
    alert('Your password will contain Special Characters')
  } else if (!usespecial) {
    console.log('Your password will NOT contain Special Characters');
    alert('Your password will NOT contain Special Characters')
  }

  var confirmed = [];
  
  if(!useuppercase && !uselowercase && !usenumbers && !usespecial) {
    alert('You must choose at least 1 type of characters');
    return;
  }

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

var randomPassword = '';
  for (var x = 0; x < length; x++) {
    randomPassword = '' + randomPassword + confirmed[Math.floor(Math.random()*confirmed.length)];
  }
  console.log('Randomly Generated Password is ' + randomPassword)

alert('Your randomly generated password is ' + randomPassword)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
