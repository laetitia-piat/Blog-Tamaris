const btnValid = document.querySelector("#valid");

btnValid.addEventListener('click', function(){

 let nameChoice = document.getElementById("name-select")
 let textSelectionne = nameChoice.value
 let link = document.getElementsByClassName("download-link")

 console.log(link)
 console.log("c'est cliqué!")
 console.log(textSelectionne);
 });