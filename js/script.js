// Partendo da questo array di oggetti:
// Aggiungere i colori ad ogni categoria: blue per gli animali, orange per i vegetali e viola per gli utenti. Prendete i colori da un altro array.
// Stampare poi tutte le icone utilizzando il template literal.
// Stampare quindi nella select tutti i tipi che avete in precedenza selezionato (animal, vegetable, icon).
// Filtrare i risultati in base alla categoria (ricordate di svuotare il container).
// Utilizzate forEach, map e filter e cercate di strutturare tutto con le funzioni.


$(document).ready(function() {
  const icons = [
  {
    name: 'cat', // da fontawesome
    prefix: 'fa-', // da fontawesome
    type: 'animal',
    family: 'fas', // da fontawesome
  },
  {
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },
  {
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
  },
  {
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  },
  {
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
  }
];
  // array dei colori
  const colors = [
    'blue', // per il type animal
    'orange', // per il type vegetable
    'purple', // per il type user
  ];

  // filtriamo per estrarre il type animale, vegetale, utente
  // se funziona trasformalo in una funzione e commentalo
  // const types = [];
  // icons.forEach((item) => {
  //   if(!types.includes(item.type)){
  //     types.push(item.type);
  //   }
  // });
  // console.log(types);
  const iconTypes = getTypes(icons); // funzione che rappresenta il codice sopra di essa
  console.log(iconTypes); // non lasciando log nelle funzioni, inseriamo il risultato della fun in una const per verificare col log se è corretto

});



function getTypes(array) {
  const types = [];
  array.forEach((item) => {
    if(!types.includes(item.type)){
      types.push(item.type);
    }
  });
  return types
}
