export async function getCategories() {
  const requestCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestReturn = await requestCategories.json();
  return requestReturn;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let baseUrl = 'https://api.mercadolibre.com/sites/MLB/search?';

  if (categoryId === '') {
    baseUrl += `q=${query}`;
  } else {
    baseUrl += `category=${categoryId}`;
  }

  const requestProducts = await fetch(baseUrl);
  const requetReturn = await requestProducts.json();
  return requetReturn;
}
