// Your code goes here
const h1 = document.querySelector('h1')

//1

h1.addEventListener('mouseover', function(event){
    event.target.style.color = 'red'
})


//2
window.addEventListener('keydown', function(event){
    if (event.keyCode === 68){
        h1.style.color = 'green';
    }
})


//3
window.addEventListener('wheel', function(event){
    let fontsize = h1.style.fontSize;
    this.document.querySelector('.main-navigation').style.display = 'none';
})


//4
window.addEventListener('load', function(event){
    this.document.querySelector('.text-content h2').style.transition = '1s'
    this.document.querySelector('.text-content h2').style.transform = 'rotate(-360deg)'
    
})

//5
document.querySelector('.content-destination').addEventListener('focus', function(event){
    event.target.style.color = 'red'
    console.log('works')
})


//6
window.addEventListener('resize', function(event){
   let arr = Array.from(document.querySelectorAll('.home'))
   arr.forEach(element => element.style.border = '1px solid purple')
})


//7
let inside = document.querySelector('.content-section .text-content p:nth-child(3)');

let inside2 = document.querySelector('.content-section .text-content p:nth-child(2)');

//8
window.addEventListener('scroll', function(){
    let randomColor;
    let randomNumber = Math.floor(Math.random()*6)
    if (randomNumber > 3){
        randomColor = 'red'
    } else {
        randomColor = 'orange'
    }
    inside.style.color = randomColor;
})

//9

window.addEventListener('click', function(){
   inside2.style.color = 'green'
})


//10

window.addEventListener('mousemove', function(event){
    let randomColor;
    let randomNumber = Math.floor(Math.random()*6)
    if (randomNumber > 3){
        randomColor = 'grey'
    } else {
        randomColor = 'yellow'
    }
    document.querySelector('h2').style.color = randomColor;
})


//11

document.querySelector('.main-navigation').addEventListener('mouseout', function(event){
    h1.style.border = '4px dotted blue'
})

//preventDefault

let links = Array.from(document.querySelectorAll('.nav-link'))
links.forEach((element)=>{
    element.addEventListener('click', function(event){
        event.preventDefault();
    })
})



//Practice with Event Propagation
window.onclick = function(){
    console.log('window fired')
}

const welcome = document.querySelector('h2')

welcome.onclick = function(event){
    console.log('inner element fired')
    event.stopPropagation();
}



