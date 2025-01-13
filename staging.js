window.addEventListener('load',()=>{
// Create the green square
const greenSquare = document.createElement('div');

// Style the square
greenSquare.style.width = '100px';
greenSquare.style.height = '100px';
greenSquare.style.backgroundColor = 'green';
greenSquare.style.position = 'fixed';
greenSquare.style.bottom = '0';
greenSquare.style.right = '0';
greenSquare.style.margin='12px'
// Append it to the body
document.body.appendChild(greenSquare);

})