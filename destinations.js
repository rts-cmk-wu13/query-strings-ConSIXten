
let search = window.location.search
let params = new URLSearchParams(search)
console.log(params);
let id = params.get("id")
console.log(id);

let mainElm = document.createElement("main")
document.querySelector("#root").append(mainElm)

fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data =>  {
        let sectionElm = document.createElement("section")
        sectionElm.innerHTML = data.destinations.map(destination => `
            <div class="location">
            <figure class="location__img>
            <img src="/img/${destination.image}">
            </figure>
            <div class="location__info">
            <h1 class="location__info--headline></h1>
            </div>
                </div>`).join("")
            mainElm.append(sectionElm)
    })


