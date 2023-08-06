// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


let html='';
const list=document.querySelector(".gallery")
console.log(list);
for(const image of galleryItems){
   html+=`
   <li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
      
    />
  </a>
</li>  `;
};
list.innerHTML=html;

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

let gallery = new SimpleLightbox('.gallery a',{
   captionsData:'alt',
   captionDelay:250,
});

