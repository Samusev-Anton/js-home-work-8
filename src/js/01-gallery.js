// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import markupGallery from '../templates/gallery.hbs'

import {galleryItems} from './gallery-items';
// Change code below this line

console.log(markupGallery);
const imageConteiner = document.querySelector('.gallery');
const imageMarkup = createGallery(galleryItems);
imageConteiner.insertAdjacentHTML('beforeend', imageMarkup);

function createGallery(galleryItems) {
    return galleryItems.map(markupGallery).join('');
}
// console.log(markup);
imageConteiner.addEventListener('click', onClickImage);
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
function onClickImage(evt) {
    evt.preventDefault()
    if (evt.target.nodeName !== "IMG") {
        return;
    }
  }
