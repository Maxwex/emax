import React from 'react';
import Section from "./Section";
import ImageTableComponent from "./ImageTableComponent";
import image from "../assets/front.png";
function Footer() {
  const data = [
      { key: 'Fahrzeuglänge', value: '5.840 mm' },
      { key: 'Breite', value: '2.580 mm' },
      { key: 'Motorleistung', value: '450/350 kW' },
      { key: 'Max. Geschwindigkeit', value: '100 km/h' },
        { key: 'Beschleunigung', value: '0-80 km/h in 5 sec' },
        { key: 'Batteriekapazität', value: '450 kW' },
        { key: 'Ladezeit bis 80% ', value: '45 min' },
        { key: 'Reichweite', value: '300 km' },
        { key: 'Ladeleistung', value: 'Max. 160 kW' },
      { key: 'Radstand', value: '4.000 mm' },
      { key: 'Zul. Gesamtgewicht', value: '19 t (40 t)' },
      { key: 'Nutzlast ohne Aufbau', value: 'ca. 10,4 t' },
      ];
  return (
   <Section backgroundColor={'black'}>


     <ImageTableComponent image={image} data={data} />

    </Section>
  );
}

export default Footer;
