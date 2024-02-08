//Je selectionne et je stock la div conteneur-photo
let postConteneur = document.querySelector(".conteneur-photo");

//Je créé un tableau avec mes objets
const posts = [
  {
    titre: "Tom",
    image: "photo/Tom1.jpg",
  },
  {
    titre: "Jennifer",
    image: "photo/Jen1.jpg",
  },
  {
    titre: "Brad",
    image: "photo/Brad2.jpg",
  },
  {
    titre: "Lady Gaga",
    image: "photo/Lady1.jpg",
  },
  {
    titre: "Jennifer",
    image: "photo/Jen2.jpg",
  },
  {
    titre: "Tom",
    image: "photo/Tom2.jpg",
  },
  {
    titre: "Lady Gaga",
    image: "photo/Lady3.jpg",
  },
  {
    titre: "Tom",
    image: "photo/Tom3.jpg",
  },
  {
    titre: "Brad",
    image: "photo/Brad1.jpg",
  },
  {
    titre: "Lady Gaga",
    image: "photo/Lady2.jpg",
  },
];

//Boucler pour faire apparaitre chaque objet du tableau sur notre blog
posts.forEach((item) => {
  //creation d'une div
  const article = `
    <div class = "post">
      <p = "post-titre">${item.titre}</p>
      <img src = ${item.image} "post-image">
    </div>
  `;
  postConteneur.innerHTML += article;
});
const photo = document.querySelector(".conteneur-photo img");

photo.addEventListener("mouseover", function () {
  console.log("test réussi!");
});
