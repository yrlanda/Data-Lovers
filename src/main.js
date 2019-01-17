window.onload = () => {

  const data = window.pokemon.pokemon;
  const pokemon_list = document.getElementById('lista');

  let pokemon_data = window.orderData(data, 'idasc');
  
  let type_counts = window.computeStats(data);
  

  drawCards(pokemon_data);

  document.getElementById('az').addEventListener('click', (evento) => {
    evento.preventDefault();
    pokemon_data = window.orderData(data, 'az');
    drawCards(pokemon_data);
  });
  document.getElementById('za').addEventListener('click', (evento) => {
    evento.preventDefault();
    pokemon_data = window.orderData(data, 'za');
    drawCards(pokemon_data);
  });
  document.getElementById('idasc').addEventListener('click', (evento) => {
    evento.preventDefault();
    pokemon_data = window.orderData(data, 'idasc');
    drawCards(pokemon_data);
  });
  document.getElementById('iddesc').addEventListener('click', (evento) => {
    evento.preventDefault();
    pokemon_data = window.orderData(data, 'iddesc');
    drawCards(pokemon_data);
  });



  function drawCards(datos) {
    pokemon_list.innerHTML = '';

    datos.forEach(pokemon => {
      pokemon_list.innerHTML += `<div class="card">
    <img src="${pokemon.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${pokemon.name}</h5>
      <p class="card-text">${pokemon.egg}</p>
      <p class="card-text">${pokemon.candy}</p>
    </div>
    </div`;

    });

  }
  
    
  const selectType = document.getElementById("type");
    
  selectType.addEventListener('change', () => {
    //const pokemon_list = document.getElementById('lista');
    let condition = selectType.value
    let filtered = window.filterType(data, condition);
    pokemon_list.innerHTML = '';
    drawCards(filtered);
  })

  var ctx = document.getElementById('myChartPokemon').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',
    
        // The data for our dataset
        data: {
            labels: ['Bug', "Dragon", "Electric", "Fighting", "Fire", "Flying", "Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Water"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: ['#f9d770','#FF4D00','#484A4E','#6A8FB7','#FFCE00','#8F94E3','#E8E9E3','#278B08','#907830','#3FD0D4','#FF0198','#330F1C','#1aa0dd','#1aa0dd','#1aa0dd','#1aa0dd'],
                data: [
                    type_counts.Bug,
                    type_counts.Dragon,
                    type_counts.Electric,
                    type_counts.Fighting,
                    type_counts.Fire,
                    type_counts.Flying,
                    type_counts.Ghost,
                    type_counts.Grass,
                    type_counts.Ground,
                    type_counts.Ice,
                    type_counts.Normal,
                    type_counts.Poison,
                    type_counts.Psychic,
                    type_counts.Rock,
                    type_counts.Water
                 ],
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

  





