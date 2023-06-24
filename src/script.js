const fs = require('fs');
const path = require('path');

const componentsFolder = path.join(__dirname, 'components');

// Erstelle den "components"-Ordner, falls er noch nicht existiert
if (!fs.existsSync(componentsFolder)) {
    fs.mkdirSync(componentsFolder);
}

// Erstelle die Komponenten im "components"-Ordner
const componentNames = ['Header', 'Main', 'Details', 'Range', 'Wheels', 'Force', 'Footer'];

componentNames.forEach(componentName => {
    const componentPath = path.join(componentsFolder, `${componentName}.js`);
    const componentContent = `import React from 'react';

function ${componentName}() {
  return (
    <div>
      {/* Hier kommt der Inhalt der ${componentName}-Komponente */}
    </div>
  );
}

export default ${componentName};
`;

    fs.writeFileSync(componentPath, componentContent);

    console.log(`Die Komponente "${componentName}" wurde erstellt.`);
});

console.log('Alle Komponenten wurden erfolgreich erstellt.');
