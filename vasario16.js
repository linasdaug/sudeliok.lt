
function pradziaLietuva() {

    let body = document.getElementsByTagName("BODY")[0];
    body.style.background = "url('img/fonelisLt.jpg') repeat";

    let puslapis = document.getElementById("puslapis");   /* istrinam viska is puslapio ir pakraunam pasirinkta turini*/
    // let footerInfo = document.getElementById("footerInfo");

    imagePaths = collectionLT;
    lygis = 10;

    while (puslapis.firstChild) {
        puslapis.removeChild(puslapis.firstChild);
    }


    let header = document.createElement("header");
    header.classList.add("titulinis-heading");
    let container = document.createElement("div");
    container.classList.add("container");
    let titulinisHeadingText = document.createElement("h1");
    titulinisHeadingText.innerHTML = "Vasario 16-osios dėlionės";
    container.appendChild(titulinisHeadingText);
    header.appendChild(container);
    puslapis.appendChild(header);
    let listSection = document.createElement("div");
    listSection.classList.add("container");
    listSection.classList.add("titulinis-list");

    puslapis.appendChild(listSection);

    for (var i = 0; i < imagePaths.length; i++) {

        let thumbnail = document.createElement("div");
        thumbnail.classList.add("titulinis-thumbnail");
        listSection.appendChild(thumbnail);
        thumbnail.setAttribute("onclick", "intro("+i+")");
        let anc = document.createElement("a");
        thumbnail.appendChild(anc);
        let thumbnail_image = document.createElement("img");
        thumbnail_image.setAttribute("src", imagePaths[i]);
        anc.appendChild(thumbnail_image);
    }

    footerLt();

}
