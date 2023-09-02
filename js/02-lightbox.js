import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector("ul.gallery");
console.log(galleryItems.length);

let newElementGallery = "";

for (let i = 0; i < galleryItems.length; i++) {
  newElementGallery += `
  <li>
    <a class="gallery__link" href= ${galleryItems[i].original}>
        <img
            class="gallery__image"
            src= ${galleryItems[i].preview}
            alt=${galleryItems[i].description}
            title="adpopoiuijng"
        />
    </a>
  </li>
`;
}
galleryList.insertAdjacentHTML("afterbegin", newElementGallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});