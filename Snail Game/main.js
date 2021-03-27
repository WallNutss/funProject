//Declaring variables
const tommyButton = document.getElementById('tom');
const jonafButton = document.getElementById('jon');
const amaxonButton = document.getElementById('ama');
const mainMenu = document.querySelector('.main-menu');
const racingPlane = document.querySelector('.race');
let userPlayer;
//the snails
const tommy = document.getElementById('snail1');
const jonaf = document.getElementById('snail2');
const amaxon = document.getElementById('snail3');
//Declaring User Choice
const userChoices = document.querySelector('.choose-button');
userChoices.addEventListener('click', gameStart);
//Game Start
//const masaka = userChoices.addEventListener('click', ());
//console.log(masaka);

function gameStart(event){
    const item = event.target;
    if(item.value=='tommy'){
        userPlayer = 'tommy';
    }
    else if(item.value=='jonaf'){
        userPlayer = 'jonaf';
    }
    else if(item.value=='amaxon'){
        userPlayer = 'amaxon';
    }
    console.log(userPlayer);
    gameReallyStart();
}
//Snail racing
function gameReallyStart(){
    mainMenu.classList.toggle('hidden');
    racingPlane.classList.toggle('hidden');
    raceTime();
}

//Initialize margin number tommy
var leftMarginTommy = window.getComputedStyle(tommy).getPropertyValue("margin-left"); // returns margin e.g. '655px'
var leftMarginTommyNumber = parseFloat(leftMarginTommy);
console.log(leftMarginTommyNumber)
//Initialize margin number jonaf
var leftMarginJonaf = window.getComputedStyle(jonaf).getPropertyValue("margin-left"); // returns margin e.g. '655px'
var leftMarginJonafNumber = parseFloat(leftMarginJonaf);
//Initialize margin number amaxon
var leftMarginAmaxon = window.getComputedStyle(tommy).getPropertyValue("margin-left"); // returns margin e.g. '655px'
var leftMarginAmaxonNumber = parseFloat(leftMarginAmaxon);

let deviceWidth = window.innerWidth;
let marginAddTommy = 0;
let marginAddJonaf = 0;
let marginAddAmaxon = 0;


function raceTime(){
    //Trying to set the time but failed
    // for(let i=0,k=1;i<5;i++){
        
    //         setTimeout(function(){
    //             marginAddTommy = leftMarginTommyNumber+(Math.floor(Math.random()*100));
    //             tommy.style.marginLeft = (marginAddTommy) + 'px';
    //             leftMarginTommyNumber = marginAddTommy; 

    //             marginAddJonaf = leftMarginJonafNumber+(Math.floor(Math.random()*100));
    //             jonaf.style.marginLeft = (marginAddJonaf) + 'px';
    //             leftMarginJonafNumber = marginAddJonaf; 

    //             marginAddAmaxon = leftMarginAmaxonNumber+(Math.floor(Math.random()*100));
    //             amaxon.style.marginLeft = (marginAddAmaxon) + 'px';
    //             leftMarginAmaxonNumber = marginAddAmaxon; 
    //             //clearTimeout(1000);      
                
    //         // if(leftMarginTommyNumber > (deviceWidth-150)){
    //         //     console.log('winner is ');
    //         //     break;
    //         // }          
    //         },1000*i);
    var interval;
    interval = setInterval(function(){
            if(leftMarginTommyNumber < window.innerWidth-200 && leftMarginJonafNumber < window.innerWidth-200 && leftMarginAmaxonNumber < window.innerWidth-200){
                marginAddTommy = leftMarginTommyNumber+(Math.floor(Math.random()*100));
                tommy.style.marginLeft = (marginAddTommy) + 'px';
                leftMarginTommyNumber = marginAddTommy; 
                
                marginAddJonaf = leftMarginJonafNumber+(Math.floor(Math.random()*100));
                jonaf.style.marginLeft = (marginAddJonaf) + 'px';
                leftMarginJonafNumber = marginAddJonaf; 

                marginAddAmaxon = leftMarginAmaxonNumber+(Math.floor(Math.random()*100));
                amaxon.style.marginLeft = (marginAddAmaxon) + 'px';
                leftMarginAmaxonNumber = marginAddAmaxon;             
            }else{
                clearInterval(interval);
                if(userPlayer == 'tommy'){
                    if(leftMarginTommyNumber > leftMarginJonafNumber && leftMarginTommyNumber > leftMarginAmaxonNumber){
                        alert('YOU WIN THE BID!, TOMMY WIN')
                    }
                    else{
                        alert('YOU LOSEEE')
                    }
                }
                else if(userPlayer == 'jonaf'){
                    if(leftMarginJonafNumber > leftMarginTommyNumber && leftMarginJonafNumber > leftMarginAmaxonNumber){
                        alert('YOU WIN THE BID!, JONAF WIN')
                    }
                    else{
                        alert('YOU LOSEEE')
                    }
                }
                else if(userPlayer == 'amaxon'){
                    if(leftMarginAmaxonNumber > leftMarginTommyNumber && leftMarginAmaxonNumber > leftMarginJonafNumber){
                        alert('YOU WIN THE BID!, JONAF WIN')
                    }
                    else{
                        alert('YOU LOSEEE')
                    }
                }
            }   
        },500);

    }


// function addTommyMargin(i){
//     setTimeout(function(i){
//         marginAddTommy = leftMarginTommyNumber+(Math.floor(Math.random()*100));
//         tommy.style.marginLeft = (marginAddTommy) + 'px';
//         leftMarginTommyNumber = marginAddTommy; 
//         console.log(leftMarginTommyNumber);
//     },1000);

// }
// function addJonafMargin(i){
//     setTimeout(function(i){
//         marginAddJonaf = leftMarginJonafNumber+(Math.floor(Math.random()*100));
//         jonaf.style.marginLeft = (marginAddJonaf) + 'px';
//         leftMarginJonafNumber = marginAddJonaf; 
//     },1000*i);

// }
// function addAmaxonMargin(i){
//     setTimeout(function(i){
//         marginAddAmaxon = leftMarginAmaxonNumber+(Math.floor(Math.random()*100));
//         amaxon.style.marginLeft = (marginAddAmaxon) + 'px';
//         leftMarginAmaxonNumber = marginAddAmaxon; 
//         console.log(leftMarginAmaxonNumber);
//     },1000*i);

// }
