// Variable

const accordion = document.getElementsByClassName('content-container');

for (i = 0; i < accordion.length; i++) {

  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
};

/*We are selecting all classes of content container, so we want to
apply an event list on each of these.
We'll grab the accordion and then grab the variable of i inside of our FOR loop and then
add an event listener */

/* THIS: Reference the object that is currently calling the funcion (accordion) */