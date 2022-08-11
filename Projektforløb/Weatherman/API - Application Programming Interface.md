# API - Application Programming Interface

API'er er alle steder. Når du bruge Facebook, sender en besked, checker vejret eller bruger din netbank. API 'er er limen der får forskellige programmer til at snakke sammen. Sagt på en anden måde er en API det lag der gør et to eller flere computere kan tale sammen. 

Læs mere om [API her](https://en.wikipedia.org/wiki/API).

## p5.js

For at kunne bruge an API skal vi kunne lave et lille program så at vi kan sende beskeder til API om hvad vi ønsker at modtage. Vi vil benytte os af programmeringssproget JavaScript sammen med et såkaldt bibliotek kaldet p5.js som er en samling af forskellige funktioner som gør livet meget lettere for os. 

For at benytte p5.js er den nemmeste måde at gå ind på siden www.p5js.org. Herinde kan vi finde en online editor som gør at vi ikke skal installere noget på vores computer samt at referencerne til p5.js findes her. Referencer er eksempler og oversigt over hvordan p5.js virker og kan bruges. Det virker sikkert for mange helt volapyk, men slå koldt vand i blodet, vi kommer til det.

Referencerne til p5.js kan [findes her](https://p5js.org/reference/).

### Online Editoren og oprettelse af bruger

![](https://p5js.org/assets/img/get-started/first-sketch.png)

Online editoren er delt i to dele. Til venstre står koden, som man kan se ud for de nummerede linier ovenover. Til højre er det man kalder Canvas der er resultatet af vores kode. I dette tilfælde er det en ellipse/cirkel tegnet på positionen (50, 50) med en diameter på 80 pixel.

For at oprette en bruger så vi kan gemme vores programmer gøres ved at click på sign-up i øverste højre hjørne.

<br>

> **Opgave** ✏️ 
>
> Opret en bruger til p5.js online editor.

<br>

En vigtig detalje er at modsat koordinatsystemer brugt i folkeskolen med orego (0,0) i midten eller nederst venstre hjørne er orego i øverste venstre hjørne med positiv y kaste ned, se figur nedenunder.

<br>

![](https://p5js.org/assets/learn/coordinate-system-and-shapes/images/drawing-03.svg)

 



### 

## Eksempel på brug af API





![](https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png)



*"Chuck Norris is the true Sultan of Swing. He also gets his money for nothing, and his chicks for free."*

For at springe ud i brugen af et API bruger vi et meget simpelt API der findes på siden [api.chucknorris.io](https://api.chucknorris.io)

Den virker på den måde at man laver en såkaldt *request* og man får tilsendt en random Chuck Norris joke. Dejlig nemt og simpelt, perfekt til at lære at bruge en API.

### Få den først joke

Lav en ny sketch i p5.js og slet alt koden i den nye p5.js sketch og copy/paste koden nedenunder.

```javascript
//teksten der står efter de to // er en kommentar og er ikke 'kode'.

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

Kør koden og se i console. Sammenlign med sidemanden om i har fået en random joke.

### Øvelser

✏️ Funktionen text() og Typography

Når i modtager joken skal i bruge nogle indbygge funktioner fra p5.js til at vise joken på skærmen. Til det bruger vi den indbyggede funktion `text("Den tekst i vil vise", x-position, y-position)`. Den skal sætte ind i setup(), se nedenfor.

````js

let norris_data = "";

function setup() {
  createCanvas(400, 400);
  background(255);
  
  async function getNorrisJoke() {
    let api_url = 'https://api.chucknorris.io/jokes/random'
    let response = await fetch(api_url);
    norris_data = await response.json();
    console.log(norris_data.value);
    //Her skriver vi hvad vi modtager på canvas med text(teksten, x, y)
    text(norris_data.value, 10, 10); // <----
  }
  getNorrisJoke();
}
````

Arbejd med text() og udforsk dens forskellige muligheder. I kan læse om dens muligheder i referencen, link nedenunder.

[text()](https://p5js.org/reference/#/p5/text) 

I referencen se under overskriften Typography og prøv at benytte nogle flere af funktioner under Typography. 



✏️ Specifik søgning

Gå ind på [api.chucknorris.io](https://api.chucknorris.io) og scola ned ad siden og prøv at ændre jeres request til kategori eller fri tekst. For de mere avancerede kan i prøve at lave mulighed for at indtaste tekst til kategori eller fritekst.



> 📚 **Materiale**
>
> En fantastisk videoserie (34 videoer) for totalt nybegyndere af programmering og p5.js
>
> 🎥 [The Coding Train - Code!](https://thecodingtrain.com/tracks/code-programming-with-p5-js)