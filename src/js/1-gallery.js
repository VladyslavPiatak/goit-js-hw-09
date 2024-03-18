import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {images} from "./images";


const gallery = document.querySelector("ul.gallery");
gallery.insertAdjacentHTML("beforeend", createMarkupGallery(images));

function createMarkupGallery(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>
    `).join("")
};

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt"
});