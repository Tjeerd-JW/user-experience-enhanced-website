# ADConnect

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/server-side-rendering-server-side-website/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

Ad Connect is een website om meer informatie te krijgen over AD's. Ik heb deze sprint gewerkt aan de nieuws pagina, hamburger menu en no refresh comments. Je kan de hele pagina [hier](https://user-experience-enhanced-website-kf40.onrender.com/) bekijken!

## Kenmerken

Dit project is gemaakt met liquid en nodejs. Ik heb de pagina opgebouwd met partials zodat de blokken content hergebruikt kunnen worden tijdens de volgende sprint en er minder herhalende code is.
Er word nog deels gebruik gemaakt van dummy data omdat de database nog niet klaar is met alle benodigde data.

### Hamburger menu

Op mobiele apparaten is er een hamburgermenu om gemakkelijk de website te navigeren deze is gemaakt met het principe van **progressive enhancement**. Het hamburger menu werkt helemaal zonder javascript door gebruik te maken van de details en summary elementen. Maar wanneer een gebruiker wel javascript heeft word het menu nog beter! Dan komt er een scrolllock, worden alle niet menu links inert, kan je het menu sluiten door ernaast te klikken, en kan het gesloten worden door op escape te klikken. Bekijk het voorbeeld hieronder.

### Nieuws pagina

Je kan nu ook alle nieuwste nieuws bekijken op de nieuws pagina! met een responsive layout voor zowel mobiel en dekstop. Op de pagina staat her meest recente artikel bovenaan extra groot. Daaronder staan alle andere artikelen in een grid. Klik op de knop bij het artikel om hem te bekijken. Op de artikel pagina kan je het nieuws artikel lezen en onderaan staat de auteur ook kun je comments achter laten lees hieronder meer. Bekijk hieronder hoe het er uit ziet

### no refresh comments

Wil je je mening achter laten over het nieuws artikel? Dat kan nu zelfs zonder dat de hele pagina refresht! Je kan gemakkelijk je comment intypen met je naam en vervolgens op plaatsen als je alles goed heb ingevuld dan zal je zien dat je comment er staat zonder een refresh!! Bekijk hieronder hoe het er uit ziet in actie.


## Installatie

Om dit project op te starten volg je deze stappen

1. clone het project lokaal
2. installeer het project
   ```bash
   npm install
3. start het project op
   ```bash
   npm run start

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
