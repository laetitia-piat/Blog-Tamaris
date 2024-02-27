const authentification = document.querySelector(".wrapper");

const user = document.querySelector("#user");

const pass = document.querySelector("#pass");

const btnValid =document.querySelector(".input-submit");


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
   // if user == users.mail && pass == users.password
   console.log("cliqué!")
    authentification.style.display = "none"
    
})