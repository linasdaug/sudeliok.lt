
function clearAllIntervals() {
    for (let i = 0; i < int.length; i++) {
        clearInterval(int[i]);
    }
    for (i = 0; i < intvid.length; i++) {
        clearInterval(intvid[i]);
    }
}

function nextImage() {
    currentImage++;
    if (currentImage == imagePaths.length) {currentImage = 0};
    return currentImage;
}


function efektas3 (rinkinys, eilutes, stulpeliai) {

    clearAllIntervals();
    let image = new Image();
    image.src = imagePaths[currentImage];
    let image_next = new Image();
    currentImage = nextImage();
    image_next.src = imagePaths[currentImage];

    let st = [];
    let k = [];
    let rand = [];

    for (let i = 0; i < eilutes; i++) {
        st[i] = stulpeliai;
        k[i] = 0;
        rand[i] = Math.round(35 + Math.random()*20);
    }

    let j = 0;

    for (let j = 0; j < eilutes; j++) {
        k[j] = 0;
            int[j] = setInterval(function(){
                rinkinys[k[j]+stulpeliai*j].keicia_vaizda(image_next);
                if (k[j] > 0) {rinkinys[k[j]+stulpeliai*j-1].keicia_vaizda(image);}
                if (k[j] == st[j]-1) {
                    st[j]--;
                    k[j] = 0;
                } else {
                    k[j]++;
                }
            if (st[j] == 0) {
                clearInterval(int[j]);
                return;
            };
        }, rand[j]);
    }
}



function efektas1 (rinkinys) {
    clearAllIntervals();

    let img = new Image();
    currentImage = nextImage();
    img.src = imagePaths[currentImage];
    let krepselis = [];
    for (let j = 0; j < rinkinys.length; j++) {
        krepselis[j] = j;
    }

    let detaliuSkaicius = krepselis.length;

    let int0 = setInterval(function(){
            if (detaliuSkaicius >= 0) {
                let r = Math.floor(Math.random() * (krepselis.length-1));
                rinkinys[krepselis[r]].keicia_vaizda(img);
                detaliuSkaicius--;
                krepselis.splice(r, 1);

                if (detaliuSkaicius == 0) {
                    clearInterval(int0);
                    return};
            }
    }, 20);
}



function efektas0 (rinkinys, eil, stulp) {
    clearAllIntervals();

    let image = new Image();
    image.src = imagePaths[currentImage];

    let image_next = new Image();
    currentImage = nextImage();
    image_next.src = imagePaths[currentImage];

    let scaleRatio, direction, phase;
    let i = -1;
    let img = image;
    let x = 0;

    let int0 = setInterval(function(){

        scaleRatio = 1;
        direction = 1;
        phase = 0;
        if (i >= eil + stulp) {clearInterval(int0); return};
        let int = setInterval(function(){
            phase++;
            if (phase == 1) {scaleRatio = 1.1};
            if (phase == 2) {scaleRatio = 1.15; img = image_next};
            if (phase == 3) {scaleRatio = 1.1};
            if (phase == 4) {scaleRatio = 1};
            if (phase == 5) {scaleRatio = 1};

            for (let j = 0; j < eil; j++) {
                x = i + j * stulp - j;
                if (((i - j) >= 0) && ((i - j) < stulp)) {
                    rinkinys[x].padideja(img, scaleRatio);
                }
            };
            if (phase == 5) {clearInterval(int); return};

        }, 15)

            i++;
    }, 90);
}


function efektas0s (rinkinys, eil, stulp) {
    clearAllIntervals();

    let image = new Image();
    image.src = imagePaths[currentImage];

    let scaleRatio, direction, phase;
    let i = -1;
    let x = 0;

    let int0 = setInterval(function(){

        scaleRatio = 1;
        direction = 1;
        phase = 0;
        if (i >= eil + stulp) {clearInterval(int0); return};
        let int = setInterval(function(){
            phase++;
            if (phase == 1) {scaleRatio = 1.1};
            if (phase == 2) {scaleRatio = 1.15;};
            if (phase == 3) {scaleRatio = 1.1};
            if (phase == 4) {scaleRatio = 1};
            if (phase == 5) {scaleRatio = 1};

            for (let j = 0; j < eil; j++) {
                x = i + j * stulp - j;
                if (((i - j) >= 0) && ((i - j) < stulp)) {
                    rinkinys[x].padideja(image, scaleRatio);
                }
            };
            if (phase == 5) {clearInterval(int); return};
        }, 15)
            i++;
    }, 90);
}


function efektas2(rinkinys, eil, stulp) {
    clearAllIntervals();
    let image = new Image();
    image.src = imagePaths[currentImage];
    let phase = 0;
    let direction = 0;
    let i = stulp - 1;
    let int0 = setInterval(function(){
        phase = 1;
        if (i == 0) {clearInterval(int0); return};
        let int = setInterval(function(){
            phase++;
            if (phase > 2) {phase = 0};
            if (phase == 2) {direction = 1};
            if (phase == 0) {clearInterval(int)};

            for (let j = 0; j < eil; j++) {
                    rinkinys[i+j*stulp].plast(image, phase);
                }
        }, 25);
            i--;
    }, 85);
}
