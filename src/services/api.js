export async function getCategories() {
  const fetchGetCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return fetchGetCategories.json();
}

// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   const fetchCategorieIdByQuery = await fetch(
//     `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
//   );

//   return fetchCategorieIdByQuery.json();
// }

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const json = await response.json();
    return json;
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const json = response.json();
  return json;
}
