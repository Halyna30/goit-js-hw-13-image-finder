import './style.css';
import debounce from 'lodash.debounce';
import updateMarkup from './js/update';
import refs from './js/refs';
import serviceApi from './js/serviceApi';

refs.formRef.addEventListener('input', debounce(getsImage, 500));

function getsImage(e) {
  e.preventDefault();
  serviceApi.query = e.target.value;

  serviceApi.resetPage();
  refs.btnLoadMore.classList.add('is-hidden');
  serviceApi.fetchApi().then(hits => {
    updateMarkup(hits);
    refs.btnLoadMore.classList.remove('is-hidden');
  });
}

refs.btnLoadMore.addEventListener('click', onLoadMoreBtnClick);
refs.btnClear.addEventListener('click', resetList);

function onLoadMoreBtnClick() {
  serviceApi.fetchApi().then(hits => {
    updateMarkup(hits);
    refs.btnLoadMore.classList.remove('is-hidden');
  });
}

function resetList() {
  refs.list.innerHTML = '';
  serviceApi.query = '';

  refs.btnLoadMore.classList.add('is-hidden');
}
