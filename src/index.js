import './style.css';

import updateMarkup from './js/update';
import refs from './js/refs';
import serviceApi from './js/serviceApi';

refs.formRef.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  serviceApi.query = form.elements.query.value;

  refs.list.innerHTML = '';
  serviceApi.resetPage();

  refs.btnLoadMore.classList.add('is-hidden');

  serviceApi.fetchApi().then(hits => {
    updateMarkup(hits);
    refs.btnLoadMore.classList.remove('is-hidden');

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  });
});

refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);

function onLoadMoreBtnClick() {
  serviceApi.fetchApi().then(hits => {
    updateMarkup(hits);

    window.scrollTo({
      top: document.documentElement.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  });
}
