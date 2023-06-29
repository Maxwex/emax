const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Verzeichnispfad zum Ordner mit den Bildern
const ordnerpfad = './source';

// Zielordner für die komprimierten Bilder
const zielordnerpfad = './cmp';

// Kompressionsqualität (Wert zwischen 0 und 100, je niedriger desto stärker komprimiert)
const kompressionsqualitaet = 80;

// Liste aller Dateien im Ordner
const dateien = fs.readdirSync(ordnerpfad);

// Schleife über alle Dateien im Ordner
dateien.forEach(datei => {
    // Prüfen, ob es sich um ein Bild handelt
    if (
        datei.endsWith('.jpg') ||
        datei.endsWith('.jpeg') ||
        datei.endsWith('.png') ||
        datei.endsWith('.gif')
    ) {
        // Bildpfad erstellen
        const bildpfad = path.join(ordnerpfad, datei);

        // Komprimiertes Bildpfad erstellen
        const komprimiertesBildpfad = path.join(zielordnerpfad, datei);

        // Bild komprimieren und speichern
        sharp(bildpfad)
            .jpeg({ quality: kompressionsqualitaet })
            .toFile(komprimiertesBildpfad, (err, info) => {
                if (err) {
                    console.error(`Fehler beim Komprimieren von ${datei}:`, err);
                } else {
                    console.log(`Komprimierung von ${datei} abgeschlossen.`);
                }
            });
    }
});

console.log('Komprimierung abgeschlossen.');
