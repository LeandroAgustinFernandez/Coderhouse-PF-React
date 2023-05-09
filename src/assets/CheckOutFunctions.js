const createBuyerObject = (personalInfo) => {
  return {
    name: `${personalInfo.name} ${personalInfo.lastName}`,
    phone: personalInfo.phone,
    email: personalInfo.email,
  };
};

const createProductList = (cart) => {
  return cart.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  }));
};

export const createOrder = (personalInfo, cart, total) => {
  const buyer = createBuyerObject(personalInfo);
  const products = createProductList(cart);
  return {
    buyer: buyer,
    items: products,
    date: new Date().toISOString(),
    state: "generada",
    total: total,
  };
};

export const validateUserInfo = (personalInfo) => {
  for (const key in personalInfo) {
    if (personalInfo[key] === "") return false;
  }
  return true;
};
