export default {
  searchQuery: '',
  page: 1,
  apiKey: '19813258-07ae0ca846b71b474a409e06e',
  fetchApi() {
    const url = `https://pixabay.com/api/?key=${this.apiKey}&q=${this.searchQuery}&per_page=12&page=${this.page}`;
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  },
};
