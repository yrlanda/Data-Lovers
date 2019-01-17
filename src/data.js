// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;

// función para ordenar

const orderData = (data, criteria) => {

  let ordered = [];

  if (criteria === 'az') {
    ordered = data.sort(orderByName);
  }
  if (criteria === 'za') {
    ordered = data.sort(orderByName).reverse();
  }
  if (criteria === 'idasc') {
    ordered = data.sort(orderById);
  }
  if (criteria === 'iddesc') {
    ordered = data.sort(orderById).reverse();
  }

  return ordered;
};

window.orderData = orderData;

// logica para ordenar por nombre
function orderByName(a, b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

// logica para ordenar por Id
function orderById(a, b) {
  if (a.id < b.id)
    return -1;
  if (a.id > b.id)
    return 1;
  return 0;
}

// funcion para filtrar
const filterType = (data, condition) => {
  if (condition == "all") {
    return data;
  }
  const filteredType = data.filter(element => {
    return element.type.indexOf(condition) !== -1
  })
  return filteredType;
}

window.filterType = filterType;

// funcion para calcular las estadisticas
const computeStats = (data) => {
  let stats = {};

  data.forEach(function (pokemon) {
    pokemon.type.forEach(function (type) {
      stats[type] = (stats[type] || 0) + 1;
    });
  });
  return stats;

}
window.computeStats = computeStats;


