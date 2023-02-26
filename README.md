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


<table>
  <tr>
    <th>Methode</th>
    <th>Beschreibung</th>
    <th>Verwendungen von im Unterricht erlernten Konzepte</th>
  </tr>
  <tr>
    <td>addProduct()</td>
    <td>Erstellt ein neues Produkt</td>
    <td>constructor, new, Array.push()</td>
  </tr>
  <tr>
    <td>displayProducts()</td>
    <td>Zeigt Produkte</td>
    <td>Array.forEach()</td>
  </tr>
 <tr>
    <td>sortByName()</td>
    <td>Sortiert Produkte nach Namen</td>
    <td>Array.sort()</td>
  </tr>
 <tr>
    <td>searchByName()</td>
    <td>Sucht Produkte nach Namen</td>
    <td>Array.filter()</td>
  </tr>
 <tr>
    <td>export()</td>
    <td>Exportiert Produkte nach ausgewählten Feldern (z. B. ist ein Buchhalter möglicherweise nicht an allen Feldern eines Produkts interessiert, sondern nur Namen und Preis)</td>
    <td>Array.map(), computed properties</td>
  </tr>
</table>
