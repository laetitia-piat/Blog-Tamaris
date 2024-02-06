//Je selectionne et je stock la div conteneur-photo
let postConteneur = document.querySelector(".conteneur-photo");

//Je créé un tableau avec mes objets
const posts = [
  {
    titre: "Tom",
    image: "photo/Tom1.jpg",
  },
  {
    titre: "Tom",
    image: "photo/Tom2.jpg",
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
    titre: "Brad",
    image: "photo/Brad2.jpg",
  },
];

//Boucler pour faire apparaitre chaque objet du tableau sur notre blog
posts.forEach((item) => {
  //creation d'une div
  const article = `
    <div class = "post">
      <div class = "post-titre">${item.titre}</div>
      <img src = ${item.image} "post-image">
    </div>
  `;
  postConteneur.innerHTML += article;
});
