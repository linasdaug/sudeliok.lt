let collectionLT = [
    "img/lt/gedimino.jpg",
    "img/lt/trispalve.jpg",
    "img/lt/ona.jpg",
    "img/lt/zemelapis.jpg",
    "img/lt/naktis.jpg",
    "img/lt/herbas.jpg",
    "img/lt/litai.jpg",
    "img/lt/trakai.jpg",
    "img/lt/kaunas.jpg",
    "img/lt/fanes.jpg"];

let collection = [
    "img/neuschwanstein.jpg",
    "img/venecija.jpg",
    "img/drasa.jpg",
    "img/katinas.jpg",
    "img/ramybe.jpg",
    "img/laivai.jpg",
    "img/siela.jpg",
    "img/tajmahal.jpg",
    "img/geisha.jpg"];

let imagePaths = collection;
let currentImage = 0;
let int = [];
let intvid = [];

let lygis = 10;

let langelioPlotis = 60;
let langelioAukstis = 60;
let sideOffset = 0;  /*remelio plotis sonuose*/
let updownOffset = 0;  /*remelio plotis virsuje ir apacioje*/

let zaidimasMode = false;


// PROTOTIPAS Detale() yra aprasytas faile prototipas.js
// EFEKTU funcijos yra faile efektai.js
// DRAG-DROP funkcijos yra faile dragdrop.js


function naujasLygis(select) {
    lygis = select.options[select.selectedIndex].getAttribute("value");
    zaidimas();
}

function visanuotrauka() {
    let im = document.getElementById("visa-nuotrauka");
    im.classList.toggle("susitraukusi");
}

function isdelioti(image) {

    // if (zaidimasMode) {
        sideOffset = 10;
        updownOffset = 10;
    // }

    let w = image.naturalWidth;
    let h = image.naturalHeight;
    let proporcija = w / h;
    let langeliuSk_W, langeliuSk_H;


    if (proporcija <= 1) {       // portrait

        image.width = langelioPlotis * lygis + sideOffset*2;      /*6-10 langeliu ir remelis*/
        image.height = Math.round(image.width / proporcija);
        langeliuSk_W = lygis;
        langeliuSk_H = Math.floor(image.height / langelioAukstis);

        // if (zaidimasMode) {

            updownOffset = Math.round((image.height % langelioAukstis) / 2); /*apskaiciuojam remelio ploti virsuj ir apacioj*/
            // document.getElementById("detales").style.width = "100%";

            if ((image.height % langelioAukstis) > 20) {                        /*langelio ir remelio aukscio nedidele korekcija, jeigu remelis storesnis negu 10px*/
            langelioAukstis += Math.round(((image.height % langelioAukstis) - 20) / langeliuSk_H);
            updownOffset = Math.round((image.height % langelioAukstis) / 2);
            }
            if ((image.height % langelioAukstis) <= 10) {                        /*langelio ir remelio aukscio nedidele korekcija, jeigu remelis plonesnis negu 5px*/
            langeliuSk_H--;
            langelioAukstis += Math.round(((image.height % langelioAukstis) + langelioAukstis - 20) / langeliuSk_H);
            updownOffset = Math.round((image.height % langelioAukstis) / 2);
            }

        // }


    } else {      // landscape

        // if (proporcija >= 1.5) {lygis--};
        image.height = langelioAukstis * lygis + updownOffset*2;
        image.width = Math.round(image.height * proporcija);
        langeliuSk_H = lygis;
        langeliuSk_W = Math.floor(image.width / langelioPlotis);

        // if (zaidimasMode) {
            sideOffset = Math.round((image.width % langelioPlotis) / 2);
            if ((image.width % langelioPlotis) > 20) {                        /*langelio ir remelio aukscio nedidele korekcija*/
                langelioPlotis += Math.round(((image.width % langelioPlotis) - 20) / langeliuSk_W);
                sideOffset = Math.round((image.width % langelioPlotis) / 2);
            }

            if ((image.width % langelioPlotis) <= 10) {                        /*langelio ir remelio aukscio nedidele korekcija, jeigu remelis plonesnis negu 5px*/
                langeliuSk_W--;
                langelioPlotis += Math.round(((image.width % langelioPlotis) + langelioPlotis - 20) / langeliuSk_W);
                sideOffset = Math.round((image.width % langelioPlotis) / 2);
            }
        // }
    }


    let resize = w / image.width;   /* originali nuotrauka vis dar seno dydzio, reikalingas koeficientas perskaiciavimui*/

    let k = 0;

    let darboStalas = document.getElementById("detales");
    let rinkinys = [];

    for (i = 0; i < langeliuSk_H; i++){
        for (var j = 0; j < langeliuSk_W; j++) {
            let detale = new Detale(k);
            rinkinys.push(detale);
            detale.koordX = i;
            detale.koordY = j;
            detale.resize = resize;
            rinkinys[k].sieneles = new Object();
            if (i == 0) {rinkinys[k].sieneles.s1 = 0} else if (rinkinys[k-langeliuSk_W].sieneles.s3 == 1) {rinkinys[k].sieneles.s1 = 2} else {rinkinys[k].sieneles.s1 = 1};
            if (j == langeliuSk_W - 1) {rinkinys[k].sieneles.s2 = 0} else {rinkinys[k].sieneles.s2 = Math.ceil(Math.random()*2)};
            if (i == langeliuSk_H - 1) {rinkinys[k].sieneles.s3 = 0} else {rinkinys[k].sieneles.s3 = Math.ceil(Math.random()*2)};
            if (j == 0) {rinkinys[k].sieneles.s4 = 0} else if (rinkinys[k-1].sieneles.s2 == 1) {rinkinys[k].sieneles.s4 = 2} else {rinkinys[k].sieneles.s4 = 1};

            let ctx = detale.atvaizdas.getContext('2d');
            detale.nupiesti(image, ctx, langelioPlotis, langelioAukstis, i, j);
            if (zaidimasMode) {
                detale.atvaizdas.setAttribute("draggable", "true");
                detale.atvaizdas.setAttribute("ondragstart", "traukti(event)");
                detale.atvaizdas.setAttribute("onclick", "pazymeti(event)");
                detale.atvaizdas.classList.remove("padetas");
                detale.atvaizdas.classList.add("palaidas");
            };
            k++;
        }
    }

    if (!zaidimasMode) {
        efektas0s(rinkinys, langeliuSk_H, langeliuSk_W);
        pradziosLangelis();
    }



    document.getElementById("detales").setAttribute("value", k);

    paruostiStala(rinkinys, image, langeliuSk_H, langeliuSk_W);

    if (zaidimasMode) {
        while (rinkinys.length > 0) {
            let i = Math.floor(Math.random() * rinkinys.length);
            let newCanvas = rinkinys[i].atvaizdas;
            darboStalas.appendChild(newCanvas);
            rinkinys.splice(i, 1);
        };
    }


    let remas = document.getElementById('remas');
    remas.style.width = langeliuSk_W * langelioPlotis + (sideOffset * 2) + "px";
    remas.style.height = langeliuSk_H * langelioAukstis + (updownOffset * 2) + "px";
    remas.setAttribute("src", imagePaths[currentImage]);

    let delione = document.getElementById('delione');

    delione.style.width = langeliuSk_W * langelioPlotis + "px";
    delione.style.height = langeliuSk_H * langelioAukstis + "px";


    let maxHeight = screen.height - 20 - (langelioAukstis * langeliuSk_H) - updownOffset*2;

    darboStalas.style.maxHeight = maxHeight + "px";
    darboStalas.style.minHeight = langelioAukstis * 2 + 10 + "px";

    if (maxHeight < 400) {
        darboStalas.style.overflow = "auto";
    }


    // if (zaidimasMode) {
        delione.style.top = updownOffset + "px";
        delione.style.left = sideOffset + "px";
    // }

    // let flyer = document.getElementById("visa-nuotrauka");
    // flyer.style.top = ((langelioAukstis * langeliuSk_H) + updownOffset*2) + "px";

}

function paruostiStala(rinkinys, image, eilutes, stulpeliai) {
    let delione = document.getElementById("delione");
    let sk = document.getElementById("detales").getAttribute("value");

    for (let i = 0; i < sk; i++) {
            let newDiv = document.createElement("div");
            if (!zaidimasMode) {newDiv.appendChild(rinkinys[i].atvaizdas);}
            newDiv.setAttribute("class", "langelis");
            newDiv.setAttribute("id", "langelis" + i);
            newDiv.setAttribute("ondrop", "padetiIVieta(event)");
            newDiv.setAttribute("ondragover", "leisti(event)");
            newDiv.setAttribute("onclick", "permesti(event)");
            newDiv.setAttribute("style", "width: " + langelioPlotis + "px; height: " + langelioAukstis + "px");
            delione.appendChild(newDiv);

            // if (!zaidimasMode) {
            //
            //     if (i == 0) {newDiv.addEventListener("click", function(){efektas0(rinkinys, eilutes, stulpeliai);});}
            //     if (i == 1) {newDiv.addEventListener("click", function(){efektas1(rinkinys);});}
            //
            //     if (i == 2) {newDiv.addEventListener("click", function(){efektas2(rinkinys, eilutes, stulpeliai);});}
            //
            //     if (i == 3) {newDiv.addEventListener("click", function(){efektas3(rinkinys, eilutes, stulpeliai);});}
            //
            //     if (i == sk-1) {newDiv.addEventListener("click", function(){zaidimas()});}
            // }

        }
        // document.getElementById('langelis0')
}


function pradzia() {

    lygis=10;
    let puslapis = document.getElementById("puslapis");   /* istrinam viska is puslapio ir pakraunam pasirinkta turini*/
    let body = document.getElementsByTagName("BODY")[0];
    body.style.background = "url('img/fonelis.jpg') repeat;"

    while (puslapis.firstChild) {
        puslapis.removeChild(puslapis.firstChild);
    }

    let header = document.createElement("header");
    header.classList.add("titulinis-heading");
    let container = document.createElement("div");
    container.classList.add("container");
    let titulinisHeadingText = document.createElement("h1");
    titulinisHeadingText.innerHTML = "Sudėliok sau nuotaiką";
    let titulinisHeadingSubtext = document.createElement("a");
    titulinisHeadingSubtext.setAttribute("href", "#ownImg");
    titulinisHeadingSubtext.innerHTML = "Pasirink dėlionę arba įkelk savo"
    container.appendChild(titulinisHeadingText);
    container.appendChild(titulinisHeadingSubtext);
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

        let thumbnailInput = document.createElement("div");
        thumbnailInput.classList.add("titulinis-thumbnail");
        thumbnailInput.classList.add("input-thumbnail");


        let inputImg = document.createElement("img");
        inputImg.setAttribute("alt", "Įkelk savo dėlionę");
        inputImg.setAttribute("id", "ownImg");
        thumbnailInput.appendChild(inputImg);
        listSection.appendChild(thumbnailInput);

        let feedback = document.createElement("div");
        feedback.setAttribute("id", "feedback");
        feedback.setAttribute("style", "color:red");
        thumbnailInput.appendChild(feedback);

        let imgInput = document.createElement("input");
        imgInput.setAttribute("id", "uploadImage");
        imgInput.setAttribute("type", "file");
        imgInput.setAttribute("onchange", "ss(this)");
        imgInput.setAttribute("style", "display:none");
        thumbnailInput.appendChild(imgInput);

        let inputButton = document.createElement("button");
        inputButton.setAttribute("class", "file-upload-button");
        inputButton.setAttribute("onclick", "document.getElementById('uploadImage').click()");
        inputButton.innerHTML = "Pasirinkti";
        thumbnailInput.appendChild(inputButton);


        footer();


}

function intro(x) {
    clearAllIntervals();

    let puslapis = document.getElementById("puslapis");   /* istrinam viska is puslapio ir pakraunam pasirinkta turini*/

    while (puslapis.firstChild) {
        puslapis.removeChild(puslapis.firstChild);
    }



    currentImage = x;

    let grizti = document.createElement("a");
    grizti.innerHTML = "Grįžti &#8624;";
    grizti.setAttribute("onclick", "grizimas()");
    grizti.setAttribute("class", "grizti");
    puslapis.appendChild(grizti);

    let origNuoroda = document.createElement("a");
    origNuoroda.innerHTML = "Paslėpti originalą";
    origNuoroda.setAttribute("id", "origNuoroda");
    origNuoroda.setAttribute("onclick", "originalas()");
    origNuoroda.setAttribute("class", "grizti");
    puslapis.appendChild(origNuoroda);



    let dezes = document.createElement("div");
    dezes.setAttribute("class", "dezes");
    puslapis.appendChild(dezes);

    let stalokonteineris = document.createElement("div");
    stalokonteineris.setAttribute("class", "stalas-container");
    stalokonteineris.setAttribute("id", "stalokonteineris");
    dezes.appendChild(stalokonteineris);

    let remas = document.createElement("img");
    remas.setAttribute("id", "remas");
    remas.setAttribute("src", "");
    stalokonteineris.appendChild(remas);

    let delione = document.createElement("div");
    delione.setAttribute("id", "delione");
    delione.setAttribute("class", "stalas");
    stalokonteineris.appendChild(delione);

    let detales = document.createElement("div");
    detales.setAttribute("class", "deze");
    detales.setAttribute("id", "detales");
    detales.setAttribute("ondrop", "padetiIVieta(event)");
    detales.setAttribute("ondragover", "leisti(event)");
    detales.setAttribute("onclick", "sugrazinti(event)");
    dezes.appendChild(detales);
    zaidimasMode = false;
    let image = new Image();
    image.src = imagePaths[currentImage];

    lygis = 10;

    image.onload = function(){
        isdelioti(image);
    }

}

function zaidimas() {

        let image = new Image();
        image.src = imagePaths[currentImage];

        document.getElementById("introInfo").remove();

        let im = document.createElement("img");
        im.setAttribute("class", "flyer");
        im.setAttribute("id", "visa-nuotrauka");
        im.setAttribute("src", image.src);
        im.setAttribute("alt", "no image");
        im.setAttribute("onclick", "visanuotrauka()");
        im.setAttribute("draggable", "true");
        im.setAttribute("ondragstart", "traukti(event)");
        puslapis.appendChild(im);


        zaidimasMode = true;


        delione = document.getElementById("delione");
        while (delione.firstChild) {
            delione.removeChild(delione.firstChild);
        }

        let footer = document.getElementById("footer");
        while (footer.firstChild) {
            footer.removeChild(footer.firstChild);
        }

        image.onload = function(){
            isdelioti(image);
        }

}

function originalas() {
    let flyer = document.getElementById("visa-nuotrauka");
    flyer.classList.toggle("visa-nuotrauka-rodoma");

    let origNuoroda = document.getElementById("origNuoroda");
    if (origNuoroda.innerHTML == "Parodyti originalą") {
        origNuoroda.innerHTML = "Paslėpti originalą";
    } else {
        origNuoroda.innerHTML = "Parodyti originalą";
    }

}

function grizimas() {

    let footer = document.getElementById("footer");
    while (footer.firstChild) {
        footer.removeChild(footer.firstChild);
    }

    lygis = 10;
    langelioPlotis = 60;
    langelioAukstis = 60;
    sideOffset = 0;  /*remelio plotis sonuose*/
    updownOffset = 0;  /*remelio plotis virsuje ir apacioje*/


    if (imagePaths == collection) {
        pradzia();
    } else {
        pradziaLietuva();
    }

}
