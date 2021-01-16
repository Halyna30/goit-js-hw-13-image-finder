import items from '../templates/items.hbs';
import refs from './refs.js';

function updateMarkup(hits) {
  const markup = items(hits);
  refs.list.insertAdjacentHTML('beforeend', markup);

  refs.list.addEventListener('click', onGalleryClick);
}

refs.closeModalBtn.addEventListener('click', onCloseModal);

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const imageRef = e.target;
  console.log(imageRef.dataset.source);
  refs.largeImage.src = imageRef.dataset.source;
  refs.largeImage.alt = imageRef.alt;

  onOpenModal();
}

function onOpenModal() {
  window.addEventListener('keydown', onPressESC);

  refs.modal.classList.add('is-open');
  refs.overlay.addEventListener('click', onClickOverlay);
}

function onCloseModal() {
  window.removeEventListener('keydown', onPressESC);

  refs.modal.classList.remove('is-open');
  refs.largeImage.src = '#';
  refs.largeImage.alt = ' ';
}

function onPressESC(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onClickOverlay(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

export default updateMarkup;
