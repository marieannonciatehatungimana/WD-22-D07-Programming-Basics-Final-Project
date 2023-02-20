/**
 *  ---------------------------------------------------------------------
 * Codes für das Programming-Basics-PB Final-Project
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
const products = [
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
