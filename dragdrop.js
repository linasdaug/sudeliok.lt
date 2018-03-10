
//DRAG AND DROP FUNKCIJOS

function leisti(event) {
    event.preventDefault();
}

function traukti(event) {
    // event.dataTransfer.setData("text", event.target.id);


/*insertas:*/
    let style = window.getComputedStyle(event.target, null);
    let str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY)+ ',' + event.target.id;
    event.dataTransfer.setData("Text",str);


    event.dataTransfer.dropEffect = "move";
    let langelis = event.target.parentElement;
    langelis.classList.remove("pilnas");
}

function padeti(event) {
    event.preventDefault();

    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);


    if (offset[2] == 'visa-nuotrauka') {
        dm.style.left = (event.clientX + parseInt(offset[0])) + 'px';
        dm.style.top = (event.clientY + parseInt(offset[1])) + 'px';
        event.preventDefault();
        return
    } else {
        return;
    }
}


function padetiIVieta(event) {
    event.preventDefault();

    // let data = event.dataTransfer.getData("text");
/*insertas:*/
    var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);

    if (offset[2] == 'visa-nuotrauka') {
        return
    }

    let detales = document.getElementById("detales");

    if (event.target.classList.contains("pilnas") || event.target.classList.contains("padetas")) {
        return;
    } else if (event.target.classList.contains("palaidas")) {
        detales.appendChild(document.getElementById(offset[2]));     /*data*/
        document.getElementById(offset[2]).classList.remove("padetas");
        document.getElementById(offset[2]).classList.add("palaidas");
        if (event.target.classList.contains("pazymetas")) {document.getElementById(offset[2]).classList.remove("pazymetas")};

    } else {
        event.target.appendChild(document.getElementById(offset[2]));     /*data*/

        if (!event.target.classList.contains("deze")) {
        event.target.classList.add("pilnas");
        document.getElementById(offset[2]).classList.add("padetas");    /*data*/
        document.getElementById(offset[2]).classList.remove("palaidas");
        document.getElementById(offset[2]).classList.remove("pazymetas");

        } else {
        document.getElementById(offset[2]).classList.remove("padetas");
        document.getElementById(offset[2]).classList.add("palaidas");
        document.getElementById(offset[2]).classList.remove("pazymetas");
        }
    }
}

function pazymeti(event) {
    let pazymetas = document.getElementsByClassName("pazymetas");

    if (pazymetas[0]) {
        pazymetas[0].classList.remove("pazymetas");
        // event.target.classList.add("pazymetas");
    } else {
        event.target.classList.add("pazymetas");
    }
    event.stopPropagation();
}

function permesti(event) {

    if (event.target.classList.contains("pilnas")) {return};
    if (event.target.classList.contains("pazymetas")) {return};

    let pazymetas = document.getElementsByClassName("pazymetas");

    if (pazymetas[0]) {
        pazymetas[0].classList.remove("palaidas");
        pazymetas[0].classList.add("padetas");
        pazymetas[0].parentElement.classList.remove("pilnas");
        if (!event.target.classList.contains("pilnas")) {event.target.appendChild(pazymetas[0]);};
        event.target.classList.add("pilnas");
        pazymetas[0].classList.remove("pazymetas");
    }
}

function sugrazinti(event) {

    let pazymetas = document.getElementsByClassName("pazymetas");
    if (pazymetas[0]) {
        pazymetas[0].classList.remove("padetas");
        pazymetas[0].classList.add("palaidas");
        pazymetas[0].parentElement.classList.remove("pilnas");
        if (event.target.classList.contains("deze")) {event.target.appendChild(pazymetas[0]);};
        pazymetas[0].classList.remove("pazymetas");
    } else {return;}
    // event.stopPropagation();
}
