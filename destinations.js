let search = window.location.search
let params = new URLSearchParams(search)
console.log(params);
let id = params.get("id")
console.log(id);

let mainElm = document.createElement("main")
document.querySelector("#root").append(mainElm)

let headerElm = document.createElement("header");
// headerElm.classList.add("");
headerElm.innerHTML = `
<nav class="header">
    <div class="header__nav">
    <ul class="header__nav--list">
        <li><a href="index.html">Home</a></li>
    </ul>
        <input type="search" name="soegefelt" id="soegefelt" placeholder="Search">
        <div>
            <label for="switch">Dark Mode</label>
            <input type="checkbox" switch name="switch" id="switch">
        </div>
    </div>
</nav>
`;
mainElm.append(headerElm);

fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then(data =>  {
        let sectionElm = document.createElement("section")
        // sectionElm.classList.add("");
        sectionElm.innerHTML = `
        <div class="half info__site">
            <figure class="info__site--img">
                <img src="${data.image}" alt="">
            </figure>
            <div class="info__site--favorite">
            <img src="like.png" class="info__site--icon" data-id="${id}">
            <p class="info__site--text">FAVORIT</p>
            </div>
        </div>
        <div class="half section info__site">
            <h1 class="section text-center">${data.destination}</h1>
            <h2 class="margin-top text-center">${data.title}</h2>
            <h3 class="margin-top text-center">${data.subtitle}</h3>
            <p class="margin-top">${data.text}</p>
            <h4 class="margin-top">facilities</h4>
            <ul>
                ${data.facilities.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </div>
        `
            mainElm.append(sectionElm)
    })


