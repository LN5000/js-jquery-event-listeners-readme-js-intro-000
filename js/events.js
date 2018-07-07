//define functions here

$(document).ready(function(){
getIt()
<<<<<<< HEAD
frameIt()
pressIt()
submitIt()
=======
// call functions here
pressIt()
>>>>>>> bf41b1ff6ee33f87935147847eadc684cd4ab48b
});

function getIt() {
  $('p').on("click", function(){
    alert(`"Hey!"`);
    //action you want taken
});
}

<<<<<<< HEAD
function frameIt() {
  $('img').on("load", function(){
    $("img").addClass("tasty");
});
}

=======
>>>>>>> bf41b1ff6ee33f87935147847eadc684cd4ab48b
function pressIt() {
  $('form input#typing').on("keydown", function(key){
    if(key.which == 71){
      alert('G was pressed');
  }
});
}

function submitIt() {
<<<<<<< HEAD
  $('form').on("submit", function(){
    alert(`Your form is going to be submitted now.`);
    //action you want taken
=======
  $('form input:submit').on("click", function(){
    alert("Your form is going to be submitted now.");
  }
>>>>>>> bf41b1ff6ee33f87935147847eadc684cd4ab48b
});
}
