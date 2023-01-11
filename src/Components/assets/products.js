export const getProducts = async (route) => {
  let response = await fetch(route);
  let data = await response.json();
  return data;
};
