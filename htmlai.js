function grizti() {
    window.history.back();
}


function footer() {

        let footerContainer = document.createElement("div");
        footerContainer.classList.add("container");
        let footerInfo = document.createElement("div");
        footerInfo.classList.add("footer-info");
        let footerUl = document.createElement("ul");

        let footerP = document.createElement("p");
        footerP.innerHTML = "&copy; L. D., 2018. Nuotraukos: <em>fotolia.com</em>";

        let footerLi2 = document.createElement("li");
        let footerLi2a = document.createElement("a");
        footerLi2a.innerHTML = "Vasario 16-osios dėlionės";
        footerLi2a.setAttribute("href", "sudeliok-lietuva.html");
        footerLi2.appendChild(footerLi2a);

        let footerLi3 = document.createElement("li");
        let footerLi3a = document.createElement("a");
        footerLi3a.innerHTML = "Kaip dėlioti";
        footerLi3a.setAttribute("href", "kaip-delioti.html");
        footerLi3.appendChild(footerLi3a);

        let footerLi4 = document.createElement("li");
        let footerLi4a = document.createElement("a");
        footerLi4a.innerHTML = "Rašykite mums";
        footerLi4a.setAttribute("href", "mailto:sudeliok.lt@gmail.com");
        footerLi4.appendChild(footerLi4a);

        footerInfo.appendChild(footerP);
        footerUl.appendChild(footerLi2);
        footerUl.appendChild(footerLi3);
        footerUl.appendChild(footerLi4);
        footerContainer.appendChild(footerInfo);
        footerInfo.appendChild(footerUl);
        document.getElementById("footer").appendChild(footerContainer);

}

function footerLt() {

    let footerContainer = document.createElement("div");
    footerContainer.classList.add("container");
    let footerInfo = document.createElement("div");
    footerInfo.classList.add("footer-info");
    let footerUl = document.createElement("ul");

    let footerP = document.createElement("p");
    footerP.innerHTML = "&copy; L. D., 2018. Nuotraukos: <em>fotolia.com</em>";

    let footerLi2 = document.createElement("li");
    let footerLi2a = document.createElement("a");
    footerLi2a.innerHTML = "Sudeliok.lt";
    footerLi2a.setAttribute("href", "index.html");
    footerLi2.appendChild(footerLi2a);

    let footerLi3 = document.createElement("li");
    let footerLi3a = document.createElement("a");
    footerLi3a.innerHTML = "Kaip dėlioti";
    footerLi3a.setAttribute("href", "kaip-delioti.html");
    footerLi3.appendChild(footerLi3a);

    let footerLi4 = document.createElement("li");
    let footerLi4a = document.createElement("a");
    footerLi4a.innerHTML = "Rašykite mums";
    footerLi4a.setAttribute("href", "mailto:sudeliok.lt@gmail.com");
    footerLi4.appendChild(footerLi4a);

    footerInfo.appendChild(footerP);
    footerUl.appendChild(footerLi2);
    footerUl.appendChild(footerLi3);
    footerUl.appendChild(footerLi4);
    footerContainer.appendChild(footerInfo);
    footerInfo.appendChild(footerUl);
    document.getElementById("footer").appendChild(footerContainer);

}

function pradziosLangelis() {

    let stalokonteineris = document.getElementById("stalokonteineris");

    let infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "intro-info");
    infoDiv.setAttribute("id", "introInfo");

    let infoLead = document.createElement("h2");
    infoLead.innerHTML = "Pradėti";
    infoLead.setAttribute("onclick", "zaidimas()");
    infoDiv.appendChild(infoLead)


    let infoSelectLabel = document.createElement("p");
    infoSelectLabel.innerHTML = "Lygis:";
    infoDiv.appendChild(infoSelectLabel);


    let infoSelect = document.createElement("select");
    infoSelect.setAttribute("name", "lygis");
    infoSelect.setAttribute("onchange", "if (this.selectedIndex) {naujasLygis(this)};");
    infoSelect.setAttribute("onfocus", "this.selectedIndex = -1;");


    let infoSelectOpt0 = document.createElement("option");
    infoSelectOpt0.innerHTML = "pasirinkite ...";
    infoSelectOpt0.setAttribute("value", -1);
    infoSelect.appendChild(infoSelectOpt0);

    let infoSelectOpt1 = document.createElement("option");
    infoSelectOpt1.innerHTML = "vienas-du ir baigta";
    infoSelectOpt1.setAttribute("value", 5);
    infoSelect.appendChild(infoSelectOpt1);

    let infoSelectOpt2 = document.createElement("option");
    infoSelectOpt2.innerHTML = "lengvai";
    infoSelectOpt2.setAttribute("value", 6);
    infoSelect.appendChild(infoSelectOpt2);

    let infoSelectOpt3 = document.createElement("option");
    infoSelectOpt3.innerHTML = "vidutiniškai";
    infoSelectOpt3.setAttribute("value", 7);
    infoSelect.appendChild(infoSelectOpt3);

    let infoSelectOpt4 = document.createElement("option");
    infoSelectOpt4.innerHTML = "sudėtingai";
    infoSelectOpt4.setAttribute("value", 8);
    infoSelect.appendChild(infoSelectOpt4);

    let infoSelectOpt5 = document.createElement("option");
    infoSelectOpt5.innerHTML = "yra ką veikti";
    infoSelectOpt5.setAttribute("value", 10);
    infoSelect.appendChild(infoSelectOpt5);

    infoDiv.appendChild(infoSelect);
    stalokonteineris.appendChild(infoDiv);

}
