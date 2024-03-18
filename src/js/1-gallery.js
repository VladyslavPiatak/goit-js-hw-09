// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

import {images} from "./imeges.js";


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
            width="360"
            />
        </a>
    </li>
    `).join("")
};