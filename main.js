
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
let twentyfour = document.querySelector('.twentyfour');
let thirtytwo = document.querySelector('.thirtytwo');
let sixtyfour = document.querySelector('.sixtyfour');
let colo = 'black';
let rainbow = document.querySelector('.rainbow');
let noborders = document.querySelector('.borders');
let nobod = false;

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

    sixteen.style.boxShadow = "0px 0px 5px black"; 
    twentyfour.style.boxShadow = "0px 0px 0px black"; 
    thirtytwo.style.boxShadow = "0px 0px 0px black"; 
    sixtyfour.style.boxShadow = "0px 0px 0px black"; 

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

    block = document.querySelectorAll('.gridhost div');
    if(nobod == true){
        for(let i = 0; i < block.length; i++){
            block[i].style.border = '0';
        }
        noborders.textContent = 'Borders On';
    }
    
})



twentyfour.addEventListener('click', () => {

    twentyfour.style.boxShadow = "0px 0px 5px black"; 
    sixteen.style.boxShadow = "0px 0px 0px black"; 
    thirtytwo.style.boxShadow = "0px 0px 0px black"; 
    sixtyfour.style.boxShadow = "0px 0px 0px black"; 

    block = document.querySelectorAll('.gridhost div');
    blocker = document.querySelectorAll('.gridhost');
    test();
    blocks(23, 23);  


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

    block = document.querySelectorAll('.gridhost div');
    if(nobod == true){
        for(let i = 0; i < block.length; i++){
            block[i].style.border = '0';
        }
        noborders.textContent = 'Borders On';
    }
    
})

thirtytwo.addEventListener('click', () => {

    thirtytwo.style.boxShadow = "0px 0px 5px black"; 
    twentyfour.style.boxShadow = "0px 0px 0px black"; 
    sixteen.style.boxShadow = "0px 0px 0px black"; 
    sixtyfour.style.boxShadow = "0px 0px 0px black"; 

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

    block = document.querySelectorAll('.gridhost div');
    if(nobod == true){
        for(let i = 0; i < block.length; i++){
            block[i].style.border = '0';
        }
        noborders.textContent = 'Borders On';
    }
    
})

sixtyfour.addEventListener('click', () => {

    sixtyfour.style.boxShadow = "0px 0px 5px black"; 
    twentyfour.style.boxShadow = "0px 0px 0px black"; 
    thirtytwo.style.boxShadow = "0px 0px 0px black"; 
    sixteen.style.boxShadow = "0px 0px 0px black"; 

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

    block = document.querySelectorAll('.gridhost div');
    if(nobod == true){
        for(let i = 0; i < block.length; i++){
            block[i].style.border = '0';
        }
        noborders.textContent = 'Borders On';
    }
    
})


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
    
    changeColor(black);
    
    removeColor(blue)
    removeColor(white)
    removeColor(yellow)
    removeColor(green)
    removeColor(red)
    removeColor(rainbow)

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



function removeColor(colore){
    colore.classList.remove('whiteborder')
    colore.classList.remove('blackborder')
}

function changeColor(colore){
    colore.classList.add('whiteborder')
    
}




red.addEventListener('click', () => {

    red.classList.remove('trans');
    red.addEventListener('mouseout', () => {red.classList.add('trans');})

    changeColor(red);

    removeColor(black)
    removeColor(white)
    removeColor(yellow)
    removeColor(green)
    removeColor(blue)
    removeColor(rainbow)

    

   

    

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

    blue.classList.remove('trans');
    blue.addEventListener('mouseout', () => {blue.classList.add('trans');})

    changeColor(blue);
    
    removeColor(black)
    removeColor(white)
    removeColor(yellow)
    removeColor(green)
    removeColor(red)
    removeColor(rainbow)

    

   

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

    green.classList.remove('trans');
    green.addEventListener('mouseout', () => {green.classList.add('trans');})

    changeColor(green);

    removeColor(black)
    removeColor(white)
    removeColor(yellow)
    removeColor(red)
    removeColor(blue)
    removeColor(rainbow)

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

    yellow.classList.remove('trans');
    yellow.addEventListener('mouseout', () => {yellow.classList.add('trans');})

    changeColor(yellow);

    removeColor(black)
    removeColor(white)
    removeColor(red)
    removeColor(green)
    removeColor(blue)
    removeColor(rainbow)

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

    rainbow.classList.remove('trans');
    rainbow.addEventListener('mouseout', () => {rainbow.classList.add('trans');})

    changeColor(rainbow);

    removeColor(black)
    removeColor(white)
    removeColor(yellow)
    removeColor(green)
    removeColor(blue)
    removeColor(red)

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

    black.classList.remove('trans');
    black.addEventListener('mouseout', () => {black.classList.add('trans');})

    changeColor(black);

    removeColor(red)
    removeColor(white)
    removeColor(yellow)
    removeColor(green)
    removeColor(blue)
    removeColor(rainbow)

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

    white.classList.remove('trans');
    white.addEventListener('mouseout', () => {white.classList.add('trans');})

    white.classList.add('blackborder');

    removeColor(black)
    removeColor(red)
    removeColor(yellow)
    removeColor(green)
    removeColor(blue)
    removeColor(rainbow)

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
sixteen.style.boxShadow = "0px 0px 5px black"; 



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



and change opacity of the buttons when they are pressed

when a button is pressed change its color and then when another is pressed set all 
buttons back to original color

and grid size

add a brush png

and when it is clicked the colors come out

add a fill button

*/