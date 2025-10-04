import { getAllProducts, getProductById, createProduct, deleteProduct } from "./api.js";

const [, , method, resource, ...args] = process.argv;

async function run() {
    try {
        if (method === "GET" && resource === "products") {
            if (args[0]) {
                const product = await getProductById(args[0]);
                console.log(product);
            } else {
                const products = await getAllProducts();
                console.table(products);
            }
        }

        if (method === "POST" && resource === "products") {
            const [title, price, category] = args;
            const newProduct = await createProduct(title, price, category);
            console.log("Producto creado:", newProduct);
        }

        if (method === "DELETE" && resource.startsWith("products/")) {
            const id = resource.split("/")[1];
            const deleted = await deleteProduct(id);
            console.log("Producto eliminado:", deleted);
        }
    } catch (err) {
        console.error("Error:", err.message);
    }
}

run();
