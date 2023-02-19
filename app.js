function TraducirTipo ( type ) {
    switch ( type ) {
        case "fire":
            return "fuego"
            break;
        case "water":
            return "agua"
            break;
        case "electric":
            return "eléctrico"
            break;
        case "ice":
            return "hielo"
            break;
        case "ground":
            return "tierra"
            break;
        case "psychic":
            return "psíquico"
            break;
        case "rock":
            return "roca"
            break;
        case "dark":
            return "siniestro"
            break;
        case "dragon":
            return "dragón"
            break;
        case "normal":
            return "normal"
            break;
        case "steel":
            return "acero"
            break;
        case "fighting":
            return "lucha"
            break;
        case "grass":
            return "planta"
            break;
        case "fairy":
            return "hada"
            break;
        case "poison":
            return "veneno"
            break;
        case "ghost":
            return "fantasma"
            break;
        case "bug":
            return "insecto"
            break;
        case "flying":
            return "volador"
            break;
        default:
            break;
    }
}

function GenerarFicha( datos ) {

    const contenedorFicha = document.querySelector("#contenedorFicha")
    contenedorFicha.innerHTML = "";
// Carta
    const cartaPokemon = document.createElement("div")
    cartaPokemon.classList.add("carta")
    contenedorFicha.appendChild(cartaPokemon)
// Esfera
    const esfera = document.createElement("div")
    esfera.classList.add("esfera")
    esfera.classList.add(datos.types[0].type.name)
    cartaPokemon.appendChild(esfera)
// Contenedor Imagen
    const contenedorImagen = document.createElement("div")
    contenedorImagen.classList.add('imagen')
    cartaPokemon.appendChild(contenedorImagen)
// Imagen
    const imagen = document.createElement("img")
    imagen.src = datos.sprites.front_default
    contenedorImagen.appendChild(imagen)
// Nombre
    const nombrePokemon = document.createElement("div")
    nombrePokemon.innerHTML = datos.name;
    nombrePokemon.classList.add('nombre')
    cartaPokemon.appendChild(nombrePokemon);
// Tipo
    const tipoa = document.createElement("div")
    tipoa.innerHTML = TraducirTipo( datos.types[0].type.name )
    tipoa.classList.add("tipo")
    tipoa.classList.add(datos.types[0].type.name)
    cartaPokemon.appendChild(tipoa)
// Tipo 2
try {
    const tipob = document.createElement("div")
    tipob.innerHTML = TraducirTipo( datos.types[1].type.name )
    tipob.classList.add("tipo")
    tipob.classList.add(datos.types[1].type.name)
    cartaPokemon.appendChild(tipob)
} catch {

}
// Contenedor Stats
    const statsPokemon = document.createElement("div")
    statsPokemon.classList.add("stats")
    cartaPokemon.appendChild(statsPokemon)
// Stat Ataque
    const atkPokemon = document.createElement("div")
    atkPokemon.innerHTML = `<span>Ataque</span><span>${datos.stats[1].base_stat}</span>`
    atkPokemon.classList.add('stat')
    statsPokemon.appendChild(atkPokemon)
// Stat Defensa
    const defPokemon = document.createElement("div")
    defPokemon.innerHTML = `<span>Defensa</span><span>${datos.stats[2].base_stat}</span>`
    defPokemon.classList.add('stat')
    statsPokemon.appendChild(defPokemon)
// Stat Ataque Especial
    const atkespPokemon = document.createElement("div")
    atkespPokemon.innerHTML = `<span>Ataque Especial</span><span>${datos.stats[3].base_stat}</span>`
    atkespPokemon.classList.add('stat')
    statsPokemon.appendChild(atkespPokemon)
// Stat Defensa Especial
    const defespPokemon = document.createElement("div")
    defespPokemon.innerHTML = `<span>Defensa Especial</span><span>${datos.stats[4].base_stat}</span>`
    defespPokemon.classList.add('stat')
    statsPokemon.appendChild(defespPokemon)
// Stat Velocidad
    const velPokemon = document.createElement("div")
    velPokemon.innerHTML = `<span>Velocidad</span><span>${datos.stats[5].base_stat}</span>`
    velPokemon.classList.add('stat')
    statsPokemon.appendChild(velPokemon)
// Stat Vida
    const hpPokemon = document.createElement("div")
    hpPokemon.innerHTML = `<span>Puntos de vida</span><span>${datos.stats[0].base_stat}</span>`
    hpPokemon.classList.add('stat')
    statsPokemon.appendChild(hpPokemon)
    


    buscador.value = "";
}

function TraerDatos() {

    const id = buscador.value.toLowerCase();

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => GenerarFicha(data))
        .catch(error => document.querySelector("#contenedorFicha").innerHTML = `<div style='text-align:center; font-size:24px'><br><i>'${id}' no existe.</i></div>`)

}