//Je selectionne et je stock la div conteneur-photo
let postConteneur = document.querySelector(".conteneur-photo");
let article ;
const btnValid = document.querySelector("#download");

//Je créé un tableau avec mes objets
const posts = [
  {
    titre: "Tom",
    image: "public/photo/Tom1.jpg"
  },
  {
    titre: "Jennifer",
    image: "public/photo/Jen1.jpg",
  },
  {
    titre: "Brad",
    image: "public/photo/Brad2.jpg",
  },
  {
    titre: "Lady Gaga",
    image: "public/photo/Lady1.jpg",
  },
  {
    titre: "Jennifer",
    image: "public/photo/Jen2.jpg",
  },
  {
    titre: "Tom",
    image: "public/photo/Tom2.jpg",
  },
  {
    titre: "Lady Gaga",
    image: "public/photo/Lady3.jpg",
  },
  {
    titre: "Tom",
    image: "public/photo/Tom3.jpg",
  },
  {
    titre: "Brad",
    image: "public/photo/Brad1.jpg",
  },
  {
    titre: "Lady Gaga",
    image: "public/photo/Lady2.jpg",
  },
];

//Boucler pour faire apparaitre chaque objet du tableau sur notre blog
posts.forEach((item) => {
  //creation d'une div
   article = `
    <div class = "post">
      <p = "post-titre">${item.titre}</p>
      <img src = ${item.image}>
    </div>
  `;
  postConteneur.innerHTML += article;
});

//const fichiers = document.getElementById("download").files[0];


btnValid.addEventListener('click', function(){

 let nameChoice = document.getElementById("name-select")
 let textSelectionne = nameChoice.value
 let fichiers = document.getElementById("input-file").files[0];
 
 


 console.log("c'est cliqué!")
 console.log(textSelectionne);
 console.log(fichiers);
 
 });