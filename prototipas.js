
function Detale(k) {

    this.atvaizdas = document.createElement("canvas");
    this.atvaizdas.width = langelioPlotis + 20;
    this.atvaizdas.height = langelioAukstis + 20;
    this.atvaizdas.setAttribute("id", k);
    this.atvaizdas.classList.add("padetas");
    this.koordX = 0;
    this.koordY = 0;
    this.resize = 1;
    this.langelioPlotis = 60;
    this.langelioAukstis = 60;
}

Detale.prototype.padideja = function(image, ratio) {

    let ctx = this.atvaizdas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 80, 80);
    ctx.scale(ratio, 1);
    this.nupiesti(image, ctx, this.langelioPlotis, this.langelioAukstis);
    ctx.restore();

}


Detale.prototype.plast = function(image, phase) {

    let ctx = this.atvaizdas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 80, 80);
    switch (phase) {
        case 0:
        ctx.transform(1, 0, 0, 1, 0, 0);
            break;
        case 1:
        ctx.transform(1, 0, 0, 1, 1, 0);
            break;
        case 2:
        ctx.transform(1, 0, 0, 1, 2, 0);
    }
    this.nupiesti(image, ctx, this.langelioPlotis, this.langelioAukstis);
    ctx.restore();
}

Detale.prototype.keicia_vaizda = function(image) {
    let ctx = this.atvaizdas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 80, 80);
    this.nupiesti(image, ctx, this.langelioPlotis, this.langelioAukstis);
    ctx.restore();
}

Detale.prototype.nupiesti = function (image, ctx, langelioPlotis, langelioAukstis){

    let i = this.koordX;
    let j = this.koordY;
    let resize = this.resize;
    let tempCanvas = document.createElement("canvas");
    tempCanvas.width = langelioPlotis + 16;  /* "liezuvelio" issikisimas x 2*/
    tempCanvas.height = langelioAukstis + 16;
    let tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(image, Math.round(langelioPlotis*j*resize), Math.round(langelioAukstis*i*resize), Math.round(this.atvaizdas.width*resize), Math.round(this.atvaizdas.height*resize), 0, 0, this.atvaizdas.width, this.atvaizdas.height);
    let pattern = ctx.createPattern(tempCanvas, 'repeat');
    ctx.fillStyle = pattern;



                // DETALES PIESINYS


    let ikiArc = Math.round(langelioPlotis / 2) - 8;
    let ikiCen = Math.round(langelioPlotis / 2);
    let ikiArcH = Math.round(langelioAukstis / 2) - 8;
    let ikiCenH = Math.round(langelioAukstis / 2);

    let ik = 8;                     /* "liezuvelio" issikisimas ir apskritimuko skersmuo*/
    let lx = ik + langelioPlotis;
    let ly = ik + langelioAukstis;
    let cx = ik + Math.round(langelioPlotis / 2);  /*liezuvelio apskritimo centras*/
    let cy = ik + Math.round(langelioAukstis / 2);


    ctx.beginPath();
    ctx.moveTo(ik, ik);

    switch (this.sieneles.s1) {
        case 0:
            ctx.lineTo(lx, ik);
            break;
        case 1:
            ctx.arc(cx, ik, ik, 0.9*Math.PI, 0.1*Math.PI);
            ctx.lineTo(lx, ik);
            break
        case 2:
            ctx.arc(cx, ik, ik, 1.1*Math.PI, 1.9*Math.PI, true);
            ctx.lineTo(lx, ik);
    }
    switch (this.sieneles.s2) {
        case 0:
            ctx.lineTo(lx, ly);
            break;
        case 1:
            ctx.arc(lx, cy, ik, 1.4*Math.PI, 0.6*Math.PI);
            ctx.lineTo(lx, ly);
        break
        case 2:
            ctx.arc(lx, cy, ik, 1.6*Math.PI, 0.4*Math.PI, true);
            ctx.lineTo(lx, ly);
    }
    switch (this.sieneles.s3) {
        case 0:
            ctx.lineTo(ik, ly);
            break;
        case 1:
            ctx.arc(cx, ly, ik, 1.9*Math.PI, 1.1*Math.PI);
            ctx.lineTo(ik, ly);
            break
        case 2:
            ctx.arc(cx, ly, ik, 0.1*Math.PI, 0.9*Math.PI, true);
            ctx.lineTo(ik, ly);
    }
    switch (this.sieneles.s4) {
        case 0:
            ctx.lineTo(ik, ik);
            break;
        case 1:
            ctx.arc(ik, cy, ik, 0.5*Math.PI, 1.6*Math.PI);
            ctx.lineTo(ik, ik);
            break
        case 2:
            ctx.arc(ik, cy, ik, 0.6*Math.PI, 1.4*Math.PI, true);
            ctx.lineTo(ik, ik);
    }
        ctx.closePath();
        ctx.fill();
}
