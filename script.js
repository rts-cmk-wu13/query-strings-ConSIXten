
let mainElm = document.createElement("main")
document.querySelector("#root").append(mainElm)

fetch("/data/destinations.json")
    .then(response => response.json())
    .then(data => {
        let sectionElm = document.createElement("section")

        sectionElm.innerHTML = data.destinations.map(destination => `
            <div class="card">
            <figure class="card__img">
            <img src="/img/${destination.image}">
            </figure>
            <div class="card__nav">
            <img src="like.png" class="card__nav--icon">
            <a class="card__nav--link" href="destination.html?id=${destination.id}">
                MORE
                </a>
                </div>
                </div>`).join("")
            mainElm.append(sectionElm)
    })