export async function getCategories() {
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(
  categoryId = '$CATEGORY_ID',
  query = '$QUERY',
) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const API = 'https://api.mercadolibre.com/sites/MLB/search?category=';
  const response = await fetch(`${API}${categoryId}&q=${query}`);
  const data = await response.json(response);
  return data;
}
