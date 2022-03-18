
const ul = document.querySelector("#moviesList");
const input = document.querySelector("#input");

const movies = [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
];

  //Versione one liner 
  //ul.innerHTML = movies.map((movies) => `<li>${movie}</li>`).join("");

const render = () => {
    const list = movies.map(
      (element) => `<li>${element}</li>`
    );
  
    ul.innerHTML = list.join("");
};
render();


// clicco sul button  

document.querySelector('button').addEventListener("click", () => {

    //Prendo il contenuto da input 
    const value = document.querySelector("input").value; //Versione one liner const value = input.value

    //Metodo Filter: se il contenuto di input è incluso all'interno di movies, stampami la lista filtrata
    const results = movies.filter((movie) => movie.toLowerCase().includes(value.toLowerCase()));

    // Trasforma il nuovo array  
    ul.innerHTML = results.map((movie) => `<li> ${movie}</li>`).join("");

})




