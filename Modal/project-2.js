//Variables

let openBtn = document.getElementById('open-btn');
let modelContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function() {

  modelContainer.style.display = 'block'; //show the box when clicked on button
});

closeBtn.addEventListener('click',function(){
  
  modelContainer.style.display = 'none';
})

window.addEventListener('click',function(e) {

  if(e.target === modelContainer){ // e.target returns the element that triggers the event - in this case is going to be our window
    modelContainer.style.display = 'none'; //close the box when clicked anythere on the screen
  }
})