require('../src/data.js');
require('../src/data/pokemon/pokemon.js');

const data = window.pokemon.pokemon;

describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('orderData', () => {
  it('deberia de mostrar al pokemon Abra como el primero en la lista cuando se ordene de la  A - Z', () => {
    let pokemon_data = window.orderData(data, 'az');
    expect(pokemon_data[0].name).toBe('Abra');
  });

  it('deberia de mostrar al pokemon Zubat como el primero en la lista cuando se ordene de la  Z - A', () => {
    let pokemon_data = window.orderData(data, 'za');
    expect(pokemon_data[0].name).toBe('Zubat');
  });
  it('deberia de mostrar al pokemon Bulbasaur como el primero en la lista cuando se ordena Idasc ', () => {
    let pokemon_data = window.orderData(data, 'idasc');
    expect(pokemon_data[0].name).toBe('Bulbasaur');
  });
  it('deberia de mostrar al pokemon Mew como el primer pokemon de la lista cuando se ordedne Iddesc', () => {
    let pokemon_data = window.orderData(data, 'iddesc');
    expect(pokemon_data[0].name).toBe('Mew');
  });
});

describe('filterType', () => {
  it('deberia de mostrar 33 Pokemons de tipo Poison', () => {
    let pokemon_data = window.filterType(data, 'Poison');
    expect(pokemon_data.length).toBe(33);
  });
  it('deberia de mostrar 3 Pokemons de tipo Ghost', () => {
    let pokemon_data = window.filterType(data, 'Ghost');
    expect(pokemon_data.length).toBe(3);
  });
  it('deberia de mostrar 151 Pokemons de tipo All', () => {
    let pokemon_data = window.filterType(data, 'all');
    expect(pokemon_data.length).toBe(151);
  });

});

describe('ComputeStats', () => {
  it('deberia de sumar 12 pokemon de tipo Bug', () => {
    let pokemon_data = window.computeStats(data);
    expect(pokemon_data.Bug).toBe(12);
  });
  it('deberia de sumar 32 pokemon de tipo Water', () => {
    let pokemon_data = window.computeStats(data);
    expect(pokemon_data.Water).toBe(32);
  });
  it('deberia de sumar 3 pokemon de tipo Dragon', () => {
    let pokemon_data = window.computeStats(data);
    expect(pokemon_data.Dragon).toBe(3);
  });

});


