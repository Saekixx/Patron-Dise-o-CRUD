const CONST_URL = "http://localhost:3000/products";

export const getProducts = async () => {
  const res = await fetch(CONST_URL);
  return res.json();
};

export const getProduct = async (id) => {
  const res = await fetch(`${CONST_URL}/${id}`);
  return res.json();
};

export const createProduct = async (product) => {
  const res = await fetch(CONST_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const updateProduct = async (id, product) => {
  const res = await fetch(`${CONST_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${CONST_URL}/${id}`, {
    method: "DELETE",
  });
};
