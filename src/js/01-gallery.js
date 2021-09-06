// Add imports above this line
import { galleryItems } from './gallery-items';
import _default from '../../node_modules/simplelightbox/dist/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const qs = selector => document.querySelector(selector);
const gallery = qs('.gallery');

const createGrid = galleryItems => {
  galleryItems.forEach(item => {
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__item');
    galleryLink.href = item.original;
    gallery.append(galleryLink);

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = item.preview;
    galleryImg.alt = item.description;
    galleryLink.append(galleryImg);
  });
  let lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'outside',
    captionsData: 'alt',
    captionDelay: '250',
  });
};

createGrid(galleryItems);

gallery.addEventListener('click', e => e.preventDefault());

console.log(galleryItems);
