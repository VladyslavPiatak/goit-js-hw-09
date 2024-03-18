// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

import {images} from "./images.js";
console.log(images);


const gallery = document.querySelector("ul.gallery");
gallery.insertAdjacentHTML("beforeend", createMarkupGallery(images));
console.log(gallery);


function createMarkupGallery(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
    `).join("")
};