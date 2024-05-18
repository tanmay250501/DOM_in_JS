// DOM
// 1. Selecting an element

let a = document.querySelector('h1');
console.log(a);

// 2. Changing HTML

let b = document.querySelector('h2');

b.innerHTML = "DOM changed to JS"

// 3. Changing CSS

let c = document.querySelector('h3');
c.style.color = "yellow";
c.style.backgroundColor = "black"

// 4. Event Listener

a.addEventListener('click', function(){

    a.innerHTML = "DOM changed"
    a.style.color = "blue"
    a.style.fontSize = "100px"

})

// exercise to master DOM

let bulb = document.querySelector('#bulb');
let btn = document.querySelector('button');

let flag = 0;

btn.addEventListener('click' , function(){
    if(flag == 0){
        
        bulb.style.backgroundColor = 'yellow';
        console.log("Switched ON ")

        flag = 1;
    }else{
        bulb.style.backgroundColor = "white"
        console.log("Switched OFF")

        flag = 0;
    }
})

// Example for Selecting Multiple elements at a time


let multiEl = document.querySelector('h4') // <--- This line will only select on line first h4 element
console.log(multiEl)

let multiElement = document.querySelectorAll('h4') // <-- // <--- This line will select all elements
console.log(multiElement)


// To change all elements at a time

// multiElement.forEach(function(e){
//     e.innerHTML = 'Used "querySelectorAll" to select Multi Elements '
// })

// To change an single elements with single click 
multiElement.forEach(function(e){
    e.addEventListener('click', function(){
        e.innerHTML = 'Used "querySelectorAll" to select Multi Elements ' 
        
    })
})





