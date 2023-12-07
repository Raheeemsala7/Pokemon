const typeColor = {
    bug:"#26de81",
    dregon:"#affeaa7",
    electric:"#fed330",
    fairy:"#FF0069",
    fighting:"#30336b",
    fire:"#81ecec",
    flying:"#00b894",
    grass:"#00b894",
    ground:"#efb594",
    ghost:"#a55eea",
    ice:"#74b9ff",
    normal:"#95afc0",
    poison:"#6c5ce7",
    psychic:"#a29bfe",
    rock:"#2d3436",
    psychic:"#0190FF ",
}
























let url = " https://pokeapi.co/api/v2/pokemon/"
let card = document.querySelector(".card")

function getData() {
    let id = Math.floor(Math.random() * 649)

    const finalUrl = url + id

    fetch(finalUrl).then((res => res.json())).then((data => {
        generateCard(data)
    }))
}



let generateCard = (data) => {
    console.log(data);

    const hp = data.stats[0].base_stat;
    const name =( data.name).toUpperCase();
    const img = data.sprites.other.dream_world.front_default;
    const attack = data.stats[1].base_stat;
    const defense = data.stats[2].base_stat;
    const speed = data.stats[5].base_stat;

    const themeColor = typeColor[data.types[0].type.name]

    card.innerHTML = `
    <p class="hp">
    <span>HP</span>
    <span class="id">${hp}</span>
    </p>
    <img src="${img}" alt="" srcset="">
    <h3 class="name">${name}</h3>
    <div class="types">
    </div>
    <div class="stats">
        <div>
            <h4 class="attack">${attack}</h4>
            <p>Attack</p>
        </div>
        <div>
            <h4 class="defense">${defense}</h4>
            <p>Defence</p>
        </div>
        <div>
            <h4 class="${speed}">90</h4>
            <p >Speed</p>
        </div>
    </div>
    `;

    appendTypes(data.types)
    styleColor(themeColor)
}

let appendTypes = (types) => {
    types.forEach(item => {
        let span = document.createElement("span");
        span.textContent = item.type.name;

        document.querySelector(".types").appendChild(span)

    });
}

let styleColor = color => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36% , #FFF 36%)`;
    document.querySelectorAll(".types span").forEach(span => {
        span.style.background = color
    })
}


document.querySelector(".btn").addEventListener("click", getData)
window.addEventListener("load", getData)

// document.querySelector(".card img").src = data.sprites.other.dream_world.front_default

