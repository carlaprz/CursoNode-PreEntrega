import fetch from "node-fetch";

const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    if (!res.ok) throw new Error("Error al obtener productos");
    return res.json();
}

export async function getProductById(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    if (!res.ok) throw new Error(`Error al obtener el producto con ID ${id}`);
    return res.json();
}

export async function createProduct(title, price, category) {
    const body = { title, price: parseFloat(price), category };

    const res = await fetch(`${BASE_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Error al crear el producto");
    return res.json();
}

export async function deleteProduct(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`Error al eliminar el producto con ID ${id}`);
    return res.json();
}
