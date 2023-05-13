# Karaktär API

Det här projektet innehåller ett enkelt REST API för att hantera karaktärer. Det är skrivet i Node.js och använder Express.js som webbserver.

## Installation

1. Installera Node.js om du inte redan har det installerat.
2. Kör `npm install` för att installera projektets beroenden.
3. Kör `npm run dev` för att starta servern.

## API-Key
http://localhost:3001/movies?apiKey=5

## API-slutpunkter
### Hämta alla karaktärer

Metod: `GET`
URL: `/movies`

### Hämta en specifik karaktär baserat på ID

Metod: `GET`
URL: `/movies/:id`

### Skapa en ny karaktär

Metod: `POST`
URL: `/movies`
Body: `{ "Title": "Nytt namn", "Year": "Årtal", "Released": "19 Aug 2020", "Genre": "Genre kategori"}`

### Uppdatera en befintlig karaktär baserat på ID

Metod: `PUT`
URL: `/movies/:id`
Body: `{ "Title": "uppdaterad Nytt namn", "Year": "uppdatera Årtal", "Released": "uppdatera 19 Aug 2020", "Genre": "upp datera Genre kategori"}`

### Ta bort en karaktär baserat på ID

Metod: `DELETE`
URL: `/movies/:id`

## Använda API:et med Postman

1. Ladda ner och installera [Postman](https://www.postman.com/downloads/) om du inte redan har det installerat.
2. Skapa en ny "Collection" i Postman.
3. För varje API-slutpunkt, skapa en ny "Request" i din collection och konfigurera den med rätt metod och URL (enligt beskrivningen ovan).
4. För POST och PUT-anrop, gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din karaktär enligt exempel ovan.
5. Skicka dina requests och utforska API:et!
