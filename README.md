# Programming-Basics-PB - Final-Project

Dies ist das Abschlussprojekt für Programming-Basics-PB. Es besteht aus einer Konsolenanwendung, 
mit der Benutzer Aktionen auf die Produkte in meinem Online-Shop ausführen können. 
Der Projekt Fokus liegt auf der Verwendung der im Unterricht erlernten Konzepte in einer realen Lebenssituation (Online-Shop).

## Struktur

Das Programm besteht hauptsächlich aus 2 Klassen (`Product` und `ProductService`), Funktionen, um die Benutzereingabe von der Konsole zu erhalten, und Funktionen, um die Benutzereingabe zu verarbeiten.

### Product class

Modelliert ein Produkt in meinem Shop.

### ProductService class

Enthält Methoden zur Durchführung von Aktionen auf die Produkte

| Methode       | Beschreibung  | Verwendungen von im Unterricht erlernten Konzepte |
| ------------  | ------------- | ------------------------------------------------- |
| addProduct()      | Erstellt ein neues Produkt       | constructor, new, Array.push()          |
| displayProducts()   | Zeigt Produkte         | Array.forEach()               |
| sortByName()   | Sortiert Produkte nach Namen        | Array.sort()               |
| searchByName()   | Sucht Produkte nach Namen        | Array.filter()               |
| export()   | Exportiert Produkte nach ausgewählten Feldern (z. B. ist ein Buchhalter möglicherweise nicht an allen Feldern eines Produkts interessiert, sondern nur Namen und Preis)        | Array.map(), computed properties               |
