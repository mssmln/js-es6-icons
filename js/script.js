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
  // array dei colori che è stato creato per far coincidere gli index col array iconTypes
  const colors = [
    'blue', // per il type animal
    'orange', // per il type vegetable
    'purple', // per il type user
  ];

  // ****** 1 step filtriamo per estrarre il type animale, vegetale, utente
  // se funziona trasformalo in una funzione e commentalo
  // const types = [];
  // icons.forEach((item) => {
  //   if(!types.includes(item.type)){
  //     types.push(item.type);
  //   }
  // });
  // console.log(types);
  const iconTypes = getTypes(icons,'type'); // funzione che rappresenta il codice sopra di essa
  console.log(iconTypes); // non lasciando log nelle funzioni, inseriamo il risultato della fun in una const per verificare col log se è corretto
  // *********


  // ****** 2 step
  const iconsColor = icons.map((item) => {
    // console.log(item.type);
    const indexType = iconTypes.indexOf(item.type);
    // console.log(indexType);
    return{
      ...item,
      color : colors[indexType]
    }
  });
  console.log(iconsColor);
  // ********


  // ********** 3 step print icons
  const appendedIcons = $('.icons');
  printIcons(iconsColor,appendedIcons);
  const select = $('#type');
  printOptions(iconTypes,select);
  select.change(function() {
    const selected =$(this).val();
    console.log(selected);

    const filteredIcons = filterValue(iconsColor,selected);
    console.log(filteredIcons);

    printIcons(filteredIcons,appendedIcons);
  });


});


// area delle funzioni
function getTypes(array,toFilter) { // l'argomento toFilter sarà un jolly per qualsiasi dato noi vogliamo dall'array...
  const types = [];
  array.forEach((item) => {
    if(!types.includes(item[toFilter])){ // ...bisogna metterlo tra quadre e tra '' quando si invoca la funzione
      types.push(item[toFilter]);
    }
  });
  return types // il return sempre l'ultima azione da compiere, mettendolo sotto types.push ciclerebbe solo una volta
}


function printIcons(array,container) {
  container.html(''); // lo svuotiamo ad ogni click della select option
  array.forEach((item) => {
    const {name,prefix,type,family,color} = item; // destrutturazione per facilitarci le cose con i backtick
    container.append(
      `
        <div class="icon">
          <i class="${family} ${prefix}${name}" style="color:${color}"></i>
          <div class="title">${name.toUpperCase()}</div>
        </div>
      `
    );
  });
}


function printOptions(array,select) {
  array.forEach((item) => {
    select.append(
      `
        <option value="${item}">${item}</option>
      `
    );
  });
}


function filterValue(array,type) {
  const filteredIcons = array.filter((item) => {
    return item.type == type;
  });
  if(filteredIcons.length > 0){
    return filteredIcons;
  }
  return array;
}
