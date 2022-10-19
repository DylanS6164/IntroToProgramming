var intervalIds = new Array();


//This function enables and disables the start and stop button
//when one or the other is clicked it also enables the timer once the 
//start button is clicked
function startButtonClick() {
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    runTimer(x)
}
function stopButtonClick() {
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;
    
    for(counter=0; counter < 11; counter++){
        clearTimeout(intervalIds[counter]);
    }
}


//This function takes the countdown set up in the html page and changes the
// the text at the end of the countdown


function runTimer(x) {
    currTime = 50;
    var timeOut = 5000;
    for(counter=0; counter < 11; counter++){
        
            intervalIds[counter] = setTimeout(function(){
                if(currTime == 0){
                x.innerHTML = "Blast Off"
            } else{
                x.innerHTML = currTime
           }
                currTime = currTime-5;
            }, timeOut);
            timeOut+=5000
    }
}    
// This Fuction requests the users name and and will keep asking for the 
// users name until the answer they provided is less than 15 characters
function getUserInput() {
    userName = " "
   
    

    do{
        userFirstName = prompt("Input User First Name:  ");
        userLastName = prompt("Input User Last Name:  ");

        userName = userFirstName + " " + userLastName;

        if (userName.length > 15) {alert("Number of characters exceeds max limit")}

    }while(userName.length > 15);

    badgeNum = 0 

    

    do{
        badgeNum = prompt("Please enter your age:   ")

    }while(badgeNum > 150);

    alert("This is your Username and Badge Number:  " + userName + badgeNum);
}
  
