/**
 *  ---------------------------------------------------------------------
 * Codes für das Programming-Basics-PB Final-Project. Der Schwerpunkt liegt auf der Anwendung
 * des im Unterricht Gelernten in einer realen Lebenssituation.
 * ---------------------------------------------------------------------
 */

/**
 *  Product class, um Produkte in meinem Shop zu modellieren.
 */
class Product {
    constructor(name, price, category, isReduced) {
        this.name = name; // Name
        this.price = price; // Preis
        this.category = category; // Kategorie (z.B. Büro, Smartphone, TV und Audio,...)
        this.isReduced = isReduced; // Im Angebot?
    }
}

// Musterprodukte.
const myProducts = [
    new Product(
        "CANON EOS 2000D Kit Spiegelreflexkamera",
        469.99,
        "Foto and Video",
        false
    ),
    new Product(
        "Böttcher-AG Ordner, A4, breit, 80mm, Karton, schwarz, Wolkenmarmor",
        3.25,
        "Office",
        true
    ),
    new Product("Samsung Galaxy S22 5G", 129.9, "Smartphones", false),
    new Product("Minecraft: Nintendo Switch Edition", 23.99, "Games", true),
    new Product(
        "Sony HDC-5500 High performance",
        4895.75,
        "Foto and Video",
        false
    ),
];

/**
 *  ProductService class, um aktionen an Produkten durchzuführen.
 */
class ProductService {
    // Neues Produkt hinzufügen (Verwendung von class constructor und Array.push).
    addProduct(name, price, category, isReduced) {
        myProducts.push(new Product(name, price, category, isReduced));
    }

    // Produkte zeigen (Verwendung von Array.forEach).
    dispayProducts(products) {
        console.log("Dispay will be done here");
    }

    // Nach Name sortieren (Verwendung von Array.sort).
    sortByName(products) {
        console.log("Sorting will be done here");
    }

    // Suche nach Name - vollständig oder nur ein Substring (Verwendung von Array.filter).
    searchByName(products, nameSubstring) {
        console.log("Search will be done here");
    }

    // Export der Produkte mit nur bestimmten properties (z.B. nur "name" und "price") (Verwendung von Array.map).
    export(products, properties) {
        console.log("Export will be done here");
    }
}

const productService = new ProductService();

productService.sortByName();
