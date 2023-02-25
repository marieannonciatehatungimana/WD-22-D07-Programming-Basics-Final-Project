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
        const columnsNumber = 5;
        const columnWidth = 20;
        const lineLength = columnWidth * columnsNumber + 10;
        const headers = [
            "Name",
            "Preis (EUR)",
            "Kategorie",
            "Auf Lager",
            "Im Angebot",
        ];

        console.log(`\n${products.length} Produkte werden angezeigt...\n`);

        let output = getLine(lineLength);
        output += buildRow(headers, columnWidth);
        output += getLine(lineLength);

        products.forEach((product) => {
            output += buildRow(Object.values(product), columnWidth);
            output += getLine(lineLength);
        });

        output += `\n`;

        console.log(output);
    }

    // Nach Name sortieren (Verwendung von Array.sort).
    sortByName(products) {
        console.log(`\nProdukte werden sortiert...\n`);

        products.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }

            return 0;
        });

        return products;
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

/**
 *  Anzeige von Optionen und Daten auf der Konsole und Verarbeitung der Benutzereingaben.
 */
const readline = require("readline"); // Bibliothek zur Verarbeitung von Benutzereingabe (https://github.com/nodejs/node/blob/v18.0.0/lib/readline.js).
let currentMainMenuItem = ""; // Wird verwendet, um ausgewählte Optionen zu verfolgen.
const mainMenuOption = "0";

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

// Start the app.
goToMainMenu(); // Gehe zum Hauptmenü.

function goToMainMenu() {
    currentMainMenuItem = mainMenuOption; // Menü zurücksetzen.
    getUserInput(mainMenu); // Optionen des Hauptmenüs anzeigen.
}

function getUserInput(instructions) {
    rl.question(instructions, processMainMenuInput); // Verwendung von callback Funktion (hier 'processMainMenuInput')!
}

function processMainMenuInput(input) {
    if (currentMainMenuItem === mainMenuOption) {
        const productService = new ProductService(); // Neue Instanz der ProductService class.

        if (input === "1") {
            currentMainMenuItem = "1";
            getUserInput(
                `\nBitte Produktdetails durch ',' getrennt eingeben\n` +
                    `(z. B. Canon, 1000, Foto und Video, 18, true)\n\n`
            );
        } else if (input === "2") {
            currentMainMenuItem = "2";
            productService.dispayProducts(myProducts); // Produkte zeigen.

            goToMainMenu(); // Gehe zum Hauptmenü.
        } else if (input === "3") {
            currentMainMenuItem = "3";

            const products = productService.sortByName(myProducts); // Produkte sortieren.
            productService.dispayProducts(products); // Produkte zeigen.

            goToMainMenu(); // Gehe zum Hauptmenü.
        } else if (input === "6") {
            // Exit.
            console.log(`\nProgramm wird beendet...\n`);

            rl.close();
        } else {
            console.log(invalidInput);

            goToMainMenu(); // Gehe zum Hauptmenü.
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
    } else if (currentMainMenuItem === "4") {
    } else if (currentMainMenuItem === "5") {
    } else {
        console.log(invalidInput);
    }

    goToMainMenu(); // Gehe zum Hauptmenü.
}

function getLine(lineLength) {
    let output = "";

    for (let i = 0; i < lineLength; i++) {
        output += "-";
    }

    output += `\n`;

    return output;
}

function buildRow(data, columnWidth) {
    const delimiter = "| ";
    let output = delimiter;

    for (let i = 0; i < data.length; i++) {
        const currentEntry = String(data[i]);

        if (currentEntry.length === columnWidth) {
            output += currentEntry + delimiter;
        } else if (currentEntry.length > columnWidth) {
            output +=
                currentEntry.slice(0, columnWidth - 3) + "..." + delimiter;
        } else {
            const spacesCount = columnWidth - currentEntry.length;
            output += currentEntry;

            for (let j = 0; j < spacesCount; j++) {
                output += " ";
            }

            output += delimiter;
        }
    }

    output += `\n`;

    return output;
}
