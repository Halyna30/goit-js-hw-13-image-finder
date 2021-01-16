import items from '../templates/items.hbs';
import refs from './refs.js';

function updateMarkup(hits) {
  const markup = items(hits);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
