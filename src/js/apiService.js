import toastr from 'toastr';
import options from './toastr.options';
import 'toastr/build/toastr.min.css';
toastr.options = options;

const apiKey = '19813258-07ae0ca846b71b474a409e06e';
const baseUrl = 'https://pixabay.com/api/';

function fetchApi(inputValue) {
  const pageNumber = 1;
  return fetch(
    `${baseUrl}?key=${apiKey}&q=${inputValue}&per_page=12&page=${pageNumber}`,
  ).then(res => res.json());
}

export { fetchApi };
