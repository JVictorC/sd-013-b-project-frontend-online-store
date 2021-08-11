export const getItemsFromLocalStorage = () => {
  const items = localStorage.getItem('cartItems');

  if (items) {
    return JSON.parse(items);
  }

  return [];
};

export const getItemFromLocalStorage = () => {
  const item = localStorage.getItem('productDetails');

  if (item) {
    return JSON.parse(item);
  }

  return {};
};

export const setArrayToLocalStorage = (array) => {
  localStorage.setItem('cartItems', JSON.stringify(array));
};

export const saveProductToLocalStorage = (product) => {
  localStorage.setItem('productDetails', JSON.stringify(product));
};
