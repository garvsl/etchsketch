
let pagewrap = document.querySelector('#pagewrap');
pagewrap.setAttribute('draggable', 'false');
let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');
let black = document.querySelector('.black');
let white = document.querySelector('.white');
let clear = document.querySelector('.clear');
let sixteen = document.querySelector('.sixteen');
let thirtytwo = document.querySelector('.thirtytwo');
let sixtyfour = document.querySelector('.sixtyfour');
let ninetysix = document.querySelector('.ninetysix');
let colo = 'black';
let rainbow = document.querySelector('.rainbow');
let noborders = document.querySelector('.borders');

function grid(row_amount, max){
    let div_one;
    let div_two;
    let number = 0;
    while(number <= row_amount){
        if(number == 0){
            div_one = document.createElement('div');
            div_one.className = 'gridhost';
            div_one.setAttribute('draggable', 'false');
            pagewrap.appendChild(div_one);
        }
        if(number <= row_amount){
            const piece = document.createElement('div');
            piece.classList.add('box');
            piece.setAttribute('draggable', 'false');
            div_one.appendChild(piece);

        }


        number++;
    }
}

//numbers of columns
function blocks(row, column){
    for(let i = 0; i <= column; i++){
        //number of items in a row
        grid(row);
    }
    
}


blocks(15, 15);  

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
    blocks(15, 15);  
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
    blocks(31, 31);  


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
    blocks(63, 63);  
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
    blocks(95, 95);  
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

let nobod = false;
noborders.addEventListener('mousedown', () => {
    block = document.querySelectorAll('.gridhost div');
    if(nobod == true){
        for(let i = 0; i < block.length; i++){
            block[i].style.borderTop = '0.1px solid rgb(139, 139, 139)'
            block[i].style.borderRight = '0.1px solid rgb(139, 139, 139)'
        }
        nobod = false;
        noborders.textContent = 'Borders Off';
    }else if (nobod == false){
        for(let i = 0; i < block.length; i++){
            block[i].style.border = '0';
        }
        nobod = true;
        noborders.textContent = 'Borders On';
    }

    

    
});


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
        block[i].addEventListener('mousedown' , (e) =>  {
            if(e.button == 0){
                
            
            tests = false;
            block[i].style.background = 'red';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', (e) => {
                    if(tests != true && e.button == 0){
                    block[i].style.background = 'red';
                    colo = 'red';
                    }

                });
                
      
            }
            }
        });


        
    }
    
});   

blue.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , (e) =>  {
            if(e.button == 0){
                
            
            tests = false;
            block[i].style.background = 'blue';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', (e) => {
                    if(tests != true && e.button == 0){
                    block[i].style.background = 'blue';
                    colo = 'blue';
                    }

                });
                
      
            }
            }
        });


        
    }
}); 



green.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , (e) =>  {
            if(e.button == 0){
                
            
            tests = false;
            block[i].style.background = 'green';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', (e) => {
                    if(tests != true && e.button == 0){
                    block[i].style.background = 'green';
                    colo = 'green';
                    }

                });
                
      
            }
            }
        });


        
    }
}); 

yellow.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , (e) =>  {
            if(e.button == 0){
                
            
            tests = false;
            block[i].style.background = 'yellow';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', (e) => {
                    if(tests != true && e.button == 0){
                    block[i].style.background = 'yellow';
                    colo = 'yellow';
                    }

                });
                
      
            }
            }
        });


        
    }
}); 

rainbow.addEventListener('click', () => {

    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    let rgb = `rgb(${x}, ${y}, ${z})`



    

    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , (e) =>  {
            if(e.button == 0){
                
            
            tests = false;
            x = Math.floor(Math.random() * 255);
            y = Math.floor(Math.random() * 255);
            z = Math.floor(Math.random() * 255);
            rgb = `rgb(${x}, ${y}, ${z})`
            block[i].style.background = rgb;
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', (e) => {
                    if(tests != true && e.button == 0){
                    x = Math.floor(Math.random() * 255);
                    y = Math.floor(Math.random() * 255);
                    z = Math.floor(Math.random() * 255);
                    rgb = `rgb(${x}, ${y}, ${z})`
                    block[i].style.background = rgb;
                    colo = 'black'
                    }

                });
                
      
            }
            }
        });


        
    }
}); 

black.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , (e) =>  {
            if(e.button == 0){
                
            
            tests = false;
            block[i].style.background = 'black';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', (e) => {
                    if(tests != true && e.button == 0){
                    block[i].style.background = 'black';
                    colo = 'black';
                    }

                });
                
      
            }
            }
        });


        
    }
}); 

white.addEventListener('click', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].addEventListener('mousedown' , (e) =>  {
            if(e.button == 0){
                
            
            tests = false;
            block[i].style.background = 'white';
            for (let i = 0; i < block.length; i++) {   
                block[i].addEventListener('mouseup', () => {
                    tests = true;
                });       
                block[i].addEventListener('mouseover', (e) => {
                    if(tests != true && e.button == 0){
                    block[i].style.background = 'white';
                    colo = 'white';
                    }

                });
                
      
            }
            }
        });


        
    }
}); 

clear.addEventListener('mousedown', () => {
    for (let i = 0; i < block.length; i++) {
        block[i].style.transition = '1s';
        block[i].style.background = 'white';
    }

})
clear.addEventListener('mouseup', () => {
    for(let i = 0; i < block.length; i++){
        if(block[i].style.background == 'white'){
            block[i].style.transition = '0s';
        }
    }   
});


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

replace the buttons with designs

for example replace red with a div that is red

and have its border radius up so it looks like a circle

for eraser get an eraser png

and change opacity of the buttons when they are pressed

for the rest just have regular buttons

move them to left and right

*/