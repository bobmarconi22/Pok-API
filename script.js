const findPoke = async() => {

  document.getElementById('types').innerText = ''

  const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${document.getElementById("search-input").value.toLowerCase()}`)

  if(!res.ok){
    return window.alert('Pokémon not found');
  };
  const data = await res.json();
    document.getElementById('pokemon-name').innerText = `${data.name.toUpperCase()}`;
    document.getElementById('sprite').src = `${data.sprites.front_default}`;
    document.getElementById('pokemon-id').innerText = `${data.id}`;
    document.getElementById('height').innerText = `Height: ${data.height}`;
    document.getElementById('weight').innerText = `Weight: ${data.weight}`;
    data.types.forEach(type => {
      const div = document.createElement('div');
      div.className = `${type.type.name}`;
      div.innerText = type.type.name;
      document.getElementById('types').appendChild(div);
    });
    document.getElementById('hp').innerText = `${data.stats[0].base_stat}`;
    document.getElementById('attack').innerText = `${data.stats[1].base_stat}`;
    document.getElementById('defense').innerText = `${data.stats[2].base_stat}`;
    document.getElementById('special-attack').innerText = `${data.stats[3].base_stat}`;
    document.getElementById('special-defense').innerText = `${data.stats[4].base_stat}`;
    document.getElementById('speed').innerText = `${data.stats[5].base_stat}`
    console.log(data)
  };
