// Assignment Code
var generate = document.querySelector("#generate");
generate.addEventListener("click", writePassword);
var lowercaseChar =  "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberChar = "0123456789"
var specialChar = "!@#$%^&*()-=_+,./<>?;:[]{}"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;
var lowercaseCheck;


function determineLength(){
  passwordLength = prompt("How many characters (8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be between 8-128 characters");
      determineLength();
    }else{
    alert("Type y/yes or n/no.");
    }
    return passwordLength;
}

function determineLowercase(){
    lowercaseCheck = prompt("Do you want to include lowercase letters in your password? \n(Yes or No)");
      lowercaseCheck = lowercaseCheck.toLowerCase();
  
      if (lowercaseCheck === null || lowercaseCheck === ""){
        alert("Please answer Yes or No");
        determineLowercase();
  
      }else if (lowercaseCheck === "yes" || lowercaseCheck ==="y"){
        lowercaseCheck = true;
        return lowercaseCheck;
  
      }else if (lowercaseCheck === "no" || lowercaseCheck ==="n"){
        lowercaseCheck = false;
        return lowercaseCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineLowercase();
      }
      return lowercaseCheck;
    }

function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}


function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}


function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

function generatePassword(){
  determineLength();
  //console.log(passwordLength);
  determineUppercase();
  //console.log(uppercaseCheck);
  determineLowercase();
  //console.log(lowercaseCheck);
  determineNumbers();
  //console.log(numberCheck);
  determineSpecial();
  //console.log(specialCheck);

var characters;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck && lowercaseCheck){
  characters += uppercaseChar + numberChar + specialChar + lowercaseChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck && lowercaseCheck){
    characters += uppercaseChar + lowercaseChar;  

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck && specialCheck){
    characters += numberChar + specialChar;  

}else if (lowercaseCheck && specialCheck){
    characters += lowercaseChar + specialChar; 
    
}else if (lowercaseCheck && numberCheck){
    characters += lowercaseChar + numberChar;    

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
    alert("Since you can't make up your mind Ima just give you lowercase letters for a password bro");
  characters += lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

generate.addEventListener("click", writePassword);