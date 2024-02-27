const authentification = document.querySelector(".wrapper");
const divPhoto = document.querySelector(".conteneur-photo")

const user = document.getElementById("user");
let userMail = user.value;
console.log(userMail)

const pass = document.getElementById("pass");
let userPass = pass.value;
console.log(userPass)

const btnValid = document.querySelector(".input-submit");


const users = [
{
    mail : "parent-tom@gmail.com",
    password : "parent-tom",
},
{
    mail : "parent-gaga@gmail.com",
    password : "parent-gaga",
},
{
    mail : "parent-brad@gmail.com",
    password : "parent-brad",
},
{
    mail : "parent-jennifer@gmail.com",
    password : "parent-jennifer",
},
]

btnValid.addEventListener('click', function(){
    console.log(userMail)
    console.log(userPass)

   // if user == users.mail && pass == users.password
  // console.log("cliqué!")
  authentification.style.display = "none";
  divPhoto.style.visibility = "visible";

    
})