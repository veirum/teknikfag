# API - Application Programming Interface





Hvorfor gøre alt arbejdet når nogen har gjordt det for dig?







## Eksempel på brug af API

For at springe ud i brugen af et API skal vi kigge lidt på et meget simpelt API der findes på siden [api.chucknorris.io](https://api.chucknorris.io)



![](https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png)



*"Chuck Norris is the true Sultan of Swing. He also gets his money for nothing, and his chicks for free."*

Sitet gør det muligt at bede om en Chuck Norris Joke hvorpå at man modtager en tilfældig joke. 



### Få den først joke

Lav en ny sketch i p5.js og slet alt koden i den nye p5.js sketch og copy/paste koden nedenunder.

```javascript
//en variabel som skal gemme vores modtagne data/joke
let norris_data = "";

function setup() {
  // laver et område hvorpå vi kan skrive
  createCanvas(400, 400);
  //giver baggrunden en farve
  background(255);
  
  //jeg laver en funktion som jeg kan kalde når jeg vil
  async function getNorrisJoke() {
    //gemmer adressen i en variabel
    let api_url = 'https://api.chucknorris.io/jokes/random'
    
    //jeg beder nu om at få informationen fra url'en der er en random joke
    let response = await fetch(api_url);
    
    //jeg laver det modtagede om til et lettere læsligt filformat kaldet .json
    norris_data = await response.json();
    
    //jeg skriver 'værdien' af variable i min console for at se hvad den indeholder.
    console.log(norris_data.value);
  }

  //nu vil jeg garne kører min funktion og modtage en joke.
  getNorrisJoke();
}

```

Kør koden og se i console. Sammenlign med sidemanden om i ikke har fået en random joke.

### Øvelse

Når i modtager joken skal i bruge nogle indbygge funktioner fra p5.js til at vise joken på skærmen, vælge en passende position, font og størrelse.