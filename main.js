
let pagewrap = document.querySelector('#pagewrap')
pagewrap.setAttribute('draggable', 'false');
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
let colo = 'black';


function grid(){
    let div_one;
    let div_two;
    let number = 0
    while(number <= 32){
        if(number == 0){
            div_one = document.createElement('div');
            div_one.className = 'gridhost';
            div_one.setAttribute('draggable', 'false');
            pagewrap.appendChild(div_one);
        }
        if(number < 16){
            const piece = document.createElement('div');
            piece.classList.add('box');
            piece.setAttribute('draggable', 'false');
            div_one.appendChild(piece);

        }
        if(number == 16){
            div_two = document.createElement('div');
            div_two.setAttribute('draggable', 'false');
            div_two.className = 'gridhost';
            pagewrap.appendChild(div_two);
        }
        if(number <= 32 && number > 16){
            const piece = document.createElement('div');
            piece.classList.add('box');
            piece.setAttribute('draggable', 'false');
            div_two.appendChild(piece);
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
let blocker = document.querySelectorAll('.gridhost');

let test = () => {
    for(let i = 0; i < block.length; i++) {
        block[i].remove(block[i]);
    }
    for(let i = 0; i < blocker.length; i++) {
        blocker[i].remove(blocker[i]);
    }
}   


sixteen.addEventListener('click', () => {
    block = document.querySelectorAll('.gridhost div');
    blocker = document.querySelectorAll('.gridhost');
    test();
    for(let i = 0; i <= 8; i++){
        grid()
    }
    block = document.querySelectorAll('.gridhost div');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = colo;
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = colo;

                    }

                });
                
      
            }
        
        });


        
    }
    
})

thirtytwo.addEventListener('click', () => {
    block = document.querySelectorAll('.gridhost div');
    blocker = document.querySelectorAll('.gridhost');
    test();
    for(let i = 0; i <= 16; i++){
        grid()

    }

    block = document.querySelectorAll('.gridhost div');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = colo;
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = colo;

                    }

                });
                
      
            }
        
        });


        
    }
    
})

sixtyfour.addEventListener('click', () => {
    block = document.querySelectorAll('.gridhost div');
    blocker = document.querySelectorAll('.gridhost');
    test();
    for(let i = 0; i <= 32; i++){
        grid()
    }
    block = document.querySelectorAll('.gridhost div');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = colo;
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = colo;

                    }

                });
                
      
            }
        
        });


        
    }
    
})

ninetysix.addEventListener('click', () => {
    block = document.querySelectorAll('.gridhost div');
    blocker = document.querySelectorAll('.gridhost');
    test();
    for(let i = 0; i <= 48; i++){
        grid()
    }
    block = document.querySelectorAll('.gridhost div');
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = colo;
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = colo;

                    }

                });
                
      
            }
        
        });


        
    }
    
})


let tests;

function color(col){
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , (e) =>  {
            if(e.button == 0){
                
            
            tests = false;
            block[i].style.background = col;
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', (e) => {
                    if(tests != true && e.button == 0){
                    block[i].style.background = col;
                    colo = col;
                    }

                });
                
      
            }
            }
        });


        
    }
    
}



red.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = 'red';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = 'red';
                    colo = 'red';
                    }

                });
                
      
            }
        
        });


        
    }
    
});   

blue.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = 'blue';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = 'blue';
                    colo = 'blue'
                    }

                });
                
      
            }
        
        });


        
    }
}); 

    

green.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = 'green';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = 'green';
                    colo = 'green';
                    }

                });
                
      
            }
        
        });


        
    }
}); 

yellow.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = 'yellow';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = 'yellow';
                    colo = 'yellow';
                    }

                });
                
      
            }
        
        });


        
    }
}); 

black.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = 'black';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = 'black';
                    colo = 'black';
                    }

                });
                
      
            }
        
        });


        
    }
}); 

white.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , () =>  {
            tests = false;
            block[i].style.background = 'white';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', () => {
                    if(tests != true){
                    block[i].style.background = 'white';
                    colo = 'white';
                    }

                });
                
      
            }
        
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

add start color, provide instructions add color pallete
add an button which they can press to change the amount of blocks


add  a mouse down that starts the hover
and then a mouseup that removes it

*/