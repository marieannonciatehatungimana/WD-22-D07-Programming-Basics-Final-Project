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
    constructor(name, price, category, quantityInStock, isReduced) {
        this.name = name; // Name
        this.price = price; // Preis
        this.category = category; // Kategorie (z.B. Büro, Smartphone, TV und Audio,...)
        this.quantityInStock = quantityInStock; // Wie viele auf lager.
        this.isReduced = isReduced; // Im Angebot?
    }
}

// Musterprodukte.
const myProducts = [
    new Product(
        "CANON EOS 2000D Kit Spiegelreflexkamera",
        469.99,
        "Foto and Video",
        100,
        false
    ),
    new Product(
        "Böttcher-AG Ordner, A4, breit, 80mm, Karton, schwarz, Wolkenmarmor",
        3.25,
        "Office",
        2,
        true
    ),
    new Product("Samsung Galaxy S22 5G", 129.9, "Smartphones", 15, false),
    new Product("Minecraft: Nintendo Switch Edition", 23.99, "Games", 40, true),
    new Product(
        "Sony HDC-5500 High performance",
        4895.75,
        "Foto and Video",
        9,
        false
    ),
];

/**
 *  ProductService class, um aktionen an Produkten durchzuführen.
 */
class ProductService {
    // Neues Produkt hinzufügen (Verwendung von class constructor und Array.push).
    addProduct(name, price, category, quantityInStock, isReduced) {
        myProducts.push(
            new Product(name, price, category, quantityInStock, isReduced)
        );
    }

    // Produkte zeigen (Verwendung von Array.forEach).
    dispayProducts(products) {
        // Use "Auf Lager" or "Nur noch ?? Artikel im Lager" if quantityInStock < 10.
        console.log(`\n${products.length} Produkte werden angezeigt...\n`);
        console.log(myProducts);
        console.log(`\n`);
    }

    //  **********************************************

    // Nach Name sortieren (Verwendung von Array.sort).
    sortByName(Product) {
        let products = [
            "CANON EOS 2000D Kit Spiegelreflexkamera",
            "Böttcher-AG Ordner, A4, breit, 80mm, Karton, schwarz, Wolkenmarmor",
            "Samsung Galaxy S22 5G",
            "Minecraft: Nintendo Switch Edition",
            "Sony HDC-5500 High performance",
        ];
        products.sort();
    }

    //  }
    // return Product;

    //  console.log(sortedProducts);

    //  **********************************************

    // Suche nach Name - vollständig oder nur ein Substring (Verwendung von Array.filter).
    searchByName(products, nameSubstring) {
        console.log("Search will be done here");
    }

    // Export der Produkte mit nur bestimmten properties (z.B. nur "name" und "price") (Verwendung von Array.map).
    export(products, properties) {
        console.log("Export will be done here");
    }
}

/**
 *  Anzeige von Optionen und Daten auf der Konsole und Verarbeitung der Benutzereingaben.
 */
const readline = require("readline"); // Bibliothek zur Verarbeitung von Benutzereingabe (https://github.com/nodejs/node/blob/v18.0.0/lib/readline.js).
let currentMainMenuItem = ""; // Wird verwendet, um ausgewählte Optionen zu verfolgen.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const mainMenuItems = [
    "Was willst du machen? Wähle unten eine Option aus:",
    "1 - Ein neues Produkt hinzufügen",
    "2 - Produkte anzeigen",
    "3 - Produkte nach Namen sortieren",
    "4 - Produkt nach Name suchen",
    "5 - Produkte exportieren",
    "6 - Programm beenden",
];

const mainMenu = mainMenuItems.join(`\n`) + `\n\n`;
const invalidInput = `\nUngültige Eingabe. Versuche es erneut.\n`;

function getUserInput(instructions) {
    rl.question(instructions, processMainMenuInput); // Verwendung von callback Funktion (hier 'processMainMenuInput')!
}

function processMainMenuInput(input) {
    if (currentMainMenuItem === "") {
        if (input === "1") {
            currentMainMenuItem = "1";
            getUserInput(
                `\nBitte Produktdetails durch ',' getrennt eingeben\n` +
                    `(z. B. Canon, 1000, Foto und Video, 18, true)\n\n`
            );
        } else if (input === "2") {
            console.log(`\nProcess 2...\n`);

            getUserInput(mainMenu);
        } else if (input === "6") {
            // Exit.
            console.log(`\nProgramm wird beendet...\n`);

            rl.close();
        } else {
            console.log(invalidInput);

            goToMainMenu();
        }
    } else {
        processSubMenuInput(input); // Gehe zum Untermenü.
    }
}

function processSubMenuInput(input) {
    const productService = new ProductService(); // Neue Instanz der ProductService class.

    if (currentMainMenuItem === "1") {
        console.log(`\nNeues Produkt wird hinzugefügt...\n`);
        const data = input.split(",").map((item) => item.trim());

        // Neues Produkt hinzufügen und  die aktuellen Produkte zeigen.
        productService.addProduct(
            data[0],
            data[1],
            data[2],
            data[3],
            data[4] === "true"
        );
        productService.dispayProducts(myProducts);
    } else if (currentMainMenuItem === "2") {
        // Show
    } else if (currentMainMenuItem === "3") {
        // Show
    } else if (currentMainMenuItem === "4") {
    } else if (currentMainMenuItem === "5") {
    } else {
        console.log(invalidInput);
    }

    goToMainMenu();
}

function goToMainMenu() {
    currentMainMenuItem = ""; // Menü zurücksetzen.
    getUserInput(mainMenu); // Zurück zum Hauptmenü.
}

// Start the app.
goToMainMenu();
