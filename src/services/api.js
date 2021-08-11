export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';

  return fetch(endpoint)
    .then((response) => response.json())
    .then((response) => response);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  /* const endpointQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const endpointCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}` */
  const endpointQueryAndCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  /* if (categoryId === undefined && query !== undefined) {
    return fetch(endpointQuery)
      .then((response) => response.json())
      .then((response) => response);
  }

  if (categoryId !== undefined && query === undefined) {
    return fetch(endpointCategory)
      .then((response) => response.json())
      .then((response) => response);
  } */

  return fetch(endpointQueryAndCategory)
    .then((response) => response.json())
    .then((response) => response);
}
