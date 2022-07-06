const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//////////////////////////////////////////////////////////////

let buttonEl = document.querySelector('#main-btn')
let firstPasswordEl = document.querySelector('#first-password')
let secondPasswordEl = document.querySelector('#second-password')
let firstPassword = ''
let secondPassword = ''


function generateRandom(){
   
    if (firstPassword.length < 15) {
        
        for(let i =0; i<15; i++){
            
            firstPassword += characters[Math.floor(Math.random() * characters.length)]
            secondPassword += characters[Math.floor(Math.random() * characters.length)]
        } // end forloop
        // write something under condition but not repeated 
 
    } //end if condition
    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
    firstPassword = ''
    secondPassword = ''
}
    
    
   
   







