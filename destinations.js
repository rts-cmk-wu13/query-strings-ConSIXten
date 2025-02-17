
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
        sectionElm.classList.add("full-width");
        sectionElm.innerHTML = `
        <figure class="half info__site--img">
            <img src="${data.image}" alt="">
        </figure>
        <div class="half section">
            <h1 class="section text-center">${data.destination}</h1>
            <h2 class="margin-top text-center">${data.title}</h2>
            <h3 class="margin-top text-center">${data.subtitle}</h3>
            <p class="margin-top">${data.text}</p>
            <h4 class="margin-top">Facilities</h4>
            <ul>
                ${data.facilities.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </div>
        `
            mainElm.append(sectionElm)
    })


