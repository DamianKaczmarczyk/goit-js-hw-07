import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector("ul.gallery");
console.log(galleryItems.length);

function creatingGallery() {
  const items = [];
  for (let i = 0; i < galleryItems.length; i++) {
    const newElementGalleryLi = document.createElement("li");
    newElementGalleryLi.classList.add("gallery__item");

    const newElementGalleryA = document.createElement("a");

    newElementGalleryA.classList.add("gallery__link");
    newElementGalleryA.href = galleryItems[i].original;
    newElementGalleryLi.append(newElementGalleryA);

    const newElementGalleryImg = document.createElement("img");
    newElementGalleryImg.classList.add("gallery__image");
    newElementGalleryImg.src = galleryItems[i].preview;
    newElementGalleryImg.alt = galleryItems[i].description;
    newElementGalleryImg.dataset.source = galleryItems[i].original;
    newElementGalleryA.append(newElementGalleryImg);

    items.push(newElementGalleryLi)
  }

  galleryList.append(...items);
}
creatingGallery();

galleryList.addEventListener("click", (e) => {
  e.preventDefault();
  const urlImg = e.target.dataset.source;
  if (!urlImg) {
    return;
  }

  const handleImgClose = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  }
  const instance = basicLightbox.create(`
  <img src= ${urlImg}>`, {
    onShow: () => document.addEventListener('keydown', handleImgClose),
    onclose: () => document.removeEventListener('keydown', handleImgClose),
  }
);

  instance.show();
});