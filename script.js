let mainElm = document.createElement("main");
document.querySelector("#root").append(mainElm);

let headerElm = document.createElement("header");
headerElm.innerHTML = `<h1>Apartments for rent</h1>`;
mainElm.append(headerElm);

// Load likede destinationer fra localStorage
let likedDestinations = new Set(JSON.parse(localStorage.getItem("likedDestinations")) || []);

fetch("/data/destinations.json")
    .then(response => response.json())
    .then(({ destinations }) => {
        let sectionElm = document.createElement("section");
        sectionElm.innerHTML = destinations.map(({ id, image }) => `
            <div class="card">
                <figure class="card__img">
                    <img src="/img/${image}" alt="">
                </figure>
                <div class="card__nav">
                    <img src="like.png" class="card__nav--icon" data-id="${id}">
                    <a class="card__nav--link" href="destination.html?id=${id}">MORE</a>
                </div>
            </div>`).join("");
        mainElm.append(sectionElm);

        // Vælg alle ikoner og tilføjer eventlistener
        document.querySelectorAll(".card__nav--icon").forEach(icon => {
            let id = icon.dataset.id;

            // Tilføjer klassen "liked", hvis destinationen er i favoritter
            if (likedDestinations.has(id)) {
                icon.classList.add("liked");
            }

            // skifter on-click
            icon.addEventListener("click", function () {
                if (likedDestinations.has(id)) {
                    likedDestinations.delete(id); // fjerner fra favoritter
                    this.classList.remove("liked");
                } else {
                    likedDestinations.add(id); // tilføjer til favoritter
                    this.classList.add("liked");
                }

                // Gemmer favoritter i localStorage
                localStorage.setItem("likedDestinations", JSON.stringify([...likedDestinations]));
                console.log(likedDestinations)
            });
        });
    });
