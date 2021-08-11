export async function getCategories() {
  // Implemente aqui
  const requestCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestReturn = await requestCategories.json();
  return requestReturn;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let baseUrl = 'https://api.mercadolibre.com/sites/MLB/search?';

  if(categoryId === '') {
    baseUrl += `q=${query}`
  } else {
    baseUrl += `category=${categoryId}`
  }

  return await fetch(baseUrl).then((response) => response.json());
}
