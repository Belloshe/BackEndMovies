# Film API

Det här projektet innehåller ett enkelt REST API för att hantera filmer. Det är skrivet i Node.js och använder Express.js som webbserver.

## Installation

1. Installera Node.js om du inte redan har det installerat.
2. Kör `npm install` för att installera projektets beroenden.
3. Kör `npm run dev` för att starta servern.

## API-Key
?apiKey=5 
(Se exempel längst ner hur man använder det)

## API-slutpunkter
### Hämta alla filmer

Metod: `GET`
URL: `/movies`

### Hämta en specifik film baserat på ID

Metod: `GET`
URL: `/movies/:id`
Success: retunerar en film objekt
Error: Inget id matchar någon befintlig film

### Skapa en ny film

Metod: `POST`
URL: `/movies`
Body:
`{
    "movie": {
        "Title": "Film titel",
        "Year": "Årtal",
        "Released": "19 Aug 2020",
        "Genre": "Genre kategori"
    }
}`
Success: Retunerar film objektet du skrivit in + Generat ID
Error: Fyll i fälten (om du missat att skicka in body)

### Uppdatera en befintlig film baserat på ID

Metod: `PUT`
URL: `/movies/:id`
Body: 
`{
    "movie": {
        "Title": "Uppdatera film titel",
        "Year": "Uppdatera årtal",
        "Released": "uppdatera 19 Aug 2020",
        "Genre": "uppdatera genre kategori"
    }
}`
Success: retunerar nya objektet 
Error: Inget id matchar någon befintlig film

### Ta bort en film baserat på ID
Metod: `DELETE`
URL: `/movies/:id`

Success: message: "Filmen har blivit borttagen!"
Error: Inget id matchar någon befintlig film

## Använda API:et med Postman

1. Ladda ner och installera [Postman](https://www.postman.com/downloads/) om du inte redan har det installerat.
2. Skapa en ny "Collection" i Postman.
3. För varje API-slutpunkt, skapa en ny "Request" i din collection och konfigurera den med rätt metod och URL (enligt beskrivningen ovan).
4. För POST och PUT-anrop, gå till fliken "Body" i din request och välj "raw" och "JSON" som format. Skriv sedan in JSON-data för din film enligt exempel ovan.
5. Skicka dina requests och utforska API:et!


## Exempel
För att göra en post väljer man POST som metod och fyller i endpointen vilket är /movies sedan behöver man ett api key som är ?apiKey=5 endpoint och api key kommer att se ut såhär http://localhost:3000/movies/?apiKey=5 

och sedan fyll i bodyn med ett json objekt ett exempel har du nedan. (du klickar på body och väljer raw med json)
{
    "movie": {
        "Title": "Nytt namn",
        "Year": "Årtal",
        "Released": "19 Aug 2020",
        "Genre": "Genre kategori"
    }
}

En lyckad post kommer att retunera json objektet du skickat in och generera ett id, 
om du inte skickar in en body kommer ett meddelande som påminner dig att fylla i fältet.

## Annat exempel på PUT

![image](https://github.com/Belloshe/BackEndMovies/assets/117655908/aa0cf094-0eb4-4596-8291-742f82570f4e)
