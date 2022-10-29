
let pagewrap = document.querySelector('#pagewrap')
let red = document.querySelector('.red')
let blue = document.querySelector('.blue')
let green = document.querySelector('.green')
let yellow = document.querySelector('.yellow')
let black = document.querySelector('.black')
let white = document.querySelector('.white')
let clear = document.querySelector('.clear')
let sixteen = document.querySelector('.sixteen')
let thirtytwo = document.querySelector('.thirtytwo')
let sixtyfour = document.querySelector('.sixtyfour')
let ninetysix = document.querySelector('.ninetysix')

function grid(){
    let div_one;
    let div_two;
    let number = 0
    while(number <= 32){
        if(number == 0){
            div_one = document.createElement('div');
            div_one.className = 'gridhost';
            pagewrap.appendChild(div_one);
        }
        if(number < 16){
            div_one.appendChild(document.createElement('div'));
        }
        if(number == 16){
            div_two = document.createElement('div');
            div_two.className = 'gridhost';
            pagewrap.appendChild(div_two);
        }
        if(number <= 32 && number > 16){
            div_two.appendChild(document.createElement('div'));
        }


        number++;
    }
}


function blocks(amount){
    for(let i = 0; i <= amount; i++){
        grid()
    }
    
}


blocks(8);  

let block = document.querySelectorAll('.gridhost div');

let test = () => {
    for(let i = 0; i < block.length; i++) {
        block[i].remove(block[i]);
    }
}   


sixteen.addEventListener('click', () => {
    block = document.querySelectorAll('.gridhost div');
    test();
    for(let i = 0; i <= 8; i++){
        grid()
    }
    block = document.querySelectorAll('.gridhost div');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'black';
        });
      }
    
})

thirtytwo.addEventListener('click', () => {
    block = document.querySelectorAll('.gridhost div');
    test();
    for(let i = 0; i <= 16; i++){
        grid()
    }
    block = document.querySelectorAll('.gridhost div');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'black';
        });
      }
    
})

sixtyfour.addEventListener('click', () => {
    block = document.querySelectorAll('.gridhost div');
    test();
    for(let i = 0; i <= 32; i++){
        grid()
    }
    block = document.querySelectorAll('.gridhost div');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'black';
        });
      }
    
})

ninetysix.addEventListener('click', () => {
    block = document.querySelectorAll('.gridhost div');
    test();
    for(let i = 0; i <= 48; i++){
        grid()
    }
    block = document.querySelectorAll('.gridhost div');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'black';
        });
      }
    
})


function color(col){
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = col;
        });
      }
    
}



red.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'red';
        });
      }
    
});   

blue.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'blue';
        });
      }
    
}); 

green.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'green';
        });
      }
    
}); 

yellow.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'yellow';
        });
      }
    
}); 

black.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'black';
        });
      }
    
}); 

white.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mouseover', () => {
            block[i].style.background = 'white';
        });
      }
    
}); 

clear.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].style.background = 'white';
    }
})

color('black');


/*

add start color, provide instructions add color pallete
add an button which they can press to change the amount of blocks

fix size

or while number <= 32

first you want it to start by creating a div then
create a number var that starts at zero
create a while true, and in said while true 
is an if statement that is true while  number is below 16
make it create a div that appends to the previously created div
make sure the div has a class that is the same
and make it incrememnet by 1 per each loop
once the incrememnt reaches 16 have an if statement at the beginning
that says equal to 16
in it make another div 
after that if make on that says  greater than or equal to 16 and less than 32

you can either continue this loop until 256 (which is 16x16)
or u can copy and paste the while loop 8 times


all these will be appended to pagewrap which will have flex:column;

add something to the name like + "e"

create a function then insert these names
*/