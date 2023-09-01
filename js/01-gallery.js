import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector("ul.gallery");
console.log(galleryItems.length);

function creatingGallery() {
  const items = [];
  for (let i = 0; i < galleryItems.length; i++) {
    const newElementGalleryDiv = document.createElement("div");
    newElementGalleryDiv.classList.add("gallery__item");

    const newElementGalleryA = document.createElement("a");

    newElementGalleryA.classList.add("gallery__link");
    newElementGalleryA.href = galleryItems[i].original;
    newElementGalleryDiv.append(newElementGalleryA);

    const newElementGalleryImg = document.createElement("img");
    newElementGalleryImg.classList.add("gallery__image");
    newElementGalleryImg.src = galleryItems[i].preview;
    newElementGalleryImg.alt = galleryItems[i].description;
    newElementGalleryImg.dataset.source = galleryItems[i].original;
    newElementGalleryA.append(newElementGalleryImg);

    items.push(newElementGalleryDiv);
  }

  galleryList.append(...items);
}
creatingGallery();

const linka = document.querySelectorAll(".gallery__link");

galleryList.addEventListener("click", (e) => {
  e.preventDefault();
  const urlImg = e.target.dataset.source;
  if (!urlImg) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src= ${urlImg}>
`);

  instance.show();
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});