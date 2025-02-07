
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
        sectionElm.innerHTML = `
        <img src="${data.image}" alt="">

        `
            mainElm.append(sectionElm)
    })


