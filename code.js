//This function takes the countdown set up in the html page and changes the
// the text 

function runTimer(x) {
    currTime = 50;
    var timeOut = 5000;
    for(counter=0; counter < 11; counter++){
        
            setTimeout(function(){
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
  
