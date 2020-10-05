//Variables
const codeColors = [0,1,2,3,4,5,6,'A','B','C','D','E','F'];
const button = document.getElementById('change-btn');
const color = document.querySelector('.color');
let colorText = document.querySelector('span');
const span = document.querySelector('.closure');
//Event Listener
button.addEventListener('mouseover', countMe);
if(window.innerWidth < 500){
    button.addEventListener('touchstart', countMe);
}
//Function
 let count = 0;
 let time = 3;
let deviceWidth = window.innerWidth;
let deviceHeight = window.innerHeight;
 function countMe(){
     if(count<6){
        span.innerHTML = `Chase the button!`;
        button.style.position = 'absolute';
        button.style.left = ((Math.floor(Math.random()*(deviceWidth)))+('px'));
        button.style.top = ((Math.floor(Math.random()*deviceHeight))+('px'));
        count++;
     }else{
        button.style.position = 'initial';
        button.addEventListener('click', changing);
        if(window.innerWidth<500){
            button.addEventListener('touchstart', changing)
        }
        span.innerHTML = `Now you can change the color, you got 3 second`;

        setTimeout(() => {
            count = 0;
            span.innerHTML = '';
            time = 3
        }, 3000);

    }
}


function changing(){
    let backgroundColor = "#"
    for(let i=0;i<6;i++){
        let randomNumber = Math.floor(Math.random()*codeColors.length);
        backgroundColor = backgroundColor + codeColors[randomNumber];
    }
    color.style.backgroundColor = backgroundColor;
    colorText.innerText = backgroundColor;
    button.classList.add('shake-me');
    setTimeout(function(){
        button.classList.remove('shake-me');
    },310);
}

