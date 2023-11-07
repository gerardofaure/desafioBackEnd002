//Desafio entregable #2
class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(productData) {
        // Verificar que todos los campos obligatorios estén presentes y no sean nulos ni cadenas vacías.
        if (!productData.title || !productData.description || !productData.price || !productData.thumbnail || !productData.code || !productData.stock) {
            console.log(`\nError al ingresar el producto ${productData.title}: Todos los campos son obligatorios.`);
            return;
        }

        // Validar que el campo "code" no esté repetido
        const codigoUnico = this.products.some((producto) => producto.code === productData.code);
        if (codigoUnico) {
            console.log(`\nError: El código del producto ${productData.title} ya existe.`);
            return;
        }

        // Crear un nuevo producto con un ID autoincrementable
        const newProduct = {
            id: this.nextId,
            title: productData.title,
            description: productData.description,
            price: productData.price,
            thumbnail: productData.thumbnail,
            code: productData.code,
            stock: productData.stock,
        };

        this.products.push(newProduct);
        this.nextId++;

        console.log(`\n Producto ${productData.title} agregado exitosamente.`);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            return "Not Found";
        }
    }

    updateProduct(id, updatedData) {
        const productIndex = this.products.findIndex((p) => p.id === id);
        if (productIndex !== -1) {
            // Mantener el ID y actualizar los otros campos
            this.products[productIndex] = {
                ...this.products[productIndex],
                ...updatedData,
                id,
            };
            console.log(`Producto actualizado exitosamente.`);
        } else {
            console.log(`Error: El producto no existe.`);
        }
    }

    deleteProduct(id) {
        const productIndex = this.products.findIndex((p) => p.id === id);
        if (productIndex !== -1) {
            this.products.splice(productIndex, 1);
            console.log(`Producto eliminado exitosamente.`);
        } else {
            console.log(`Error: El producto no existe.`);
        }
    }
}

// Probando su uso.
const manager = new ProductManager();

// Debe devolver []
console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓AQUI DEVUELVE ARRAY VACÍO")
console.log(manager.getProducts()); 

// Listado de nuevos productos

manager.addProduct({
    title: "ARROZ",
    description: "Arroz paquete 1 kilo",
    price: 100,
    thumbnail: "001.jpg",
    code: "arroz123",
    stock: 35,

});

manager.addProduct({
    title: "LECHE",
    description: "Leche natural botella 1 litro",
    price: 200,
    thumbnail: "002.jpg",
    code: "leche123",
    stock: 25,

});

manager.addProduct({
    title: "HARINA",
    description: "Harina de trigo envase 1 kilo",
    price: 300,
    thumbnail: "003.jpg",
    code: "harina123",
    stock: 45,

});

manager.addProduct({
    title: "CEREAL",
    description: "Cereal avena caja 400 gramos",
    price: 400,
    thumbnail: "004.jpg",
    code: "cereal123",
    stock: 15,

});

manager.addProduct({
    title: "CARNE",
    description: "Lomo porcionado 1,5 kilos",
    price: 500,
    thumbnail: "005.jpg",
    code: "carne123",
    stock: 55,

});

manager.addProduct({
    title: "ACEITE",
    description: "Aceite de Oliva, botella 1 litro",
    price: 200,
    thumbnail: "006.jpg",
    code: "aceite123",
    //stock: 5, <----- campo faltante producto 6

});

manager.addProduct({
    title: "TOMATE",
    description: "Tomate grane kilo",
    price: 200,
    thumbnail: "007.jpg",
    code: "carne123", //<----Código repetido
    stock: 55,

});

// Debe mostrar el producto agregado
console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓AQUI MUESTRA LOS NUEVOS PRODUCTOS CREADOS");
console.log(manager.getProducts()); 

// Esto busca un producto por su ID
const product = manager.getProductById(1);

// Debe mostrar el producto con el ID 1
console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓AQUI MUESTRA EL PRODUCTO BUSCADO POR SU ID=1");
console.log(product); 

// Esto actualiza el producto ID=1 (Arroz) cambiando su descripción y precio
manager.updateProduct(1, {
    description: "Arroz pregraneado paquete 1 kilo",
    price: 150,
});
const updatedProduct = manager.getProductById(1);

// Con esto mostramos el producto actualizado.
console.log("↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓AQUI MUESTRA EL PRODUCTO ACTUALIZADO");
console.log(updatedProduct);

// Esto elimina un producto especificando su ID (5)
manager.deleteProduct(5); 

// Esto muestra el nuevo array de productos con el ID(5) eliminado.
console.log(manager.getProducts());

