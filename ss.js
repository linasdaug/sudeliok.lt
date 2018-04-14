function validFile(file) {
    let valid = false;
    var el = document.getElementById("feedback");

    // let fileSize = file.size;
    // if (fileSize > 2097) {
    //     valid = false;
    //     el.innerHTML = "Per didelis failas";
    //     return valid;
    // }
    let fileName = file.value;
    var allowed_extensions = new Array("jpg","png","gif");
    var file_extension = fileName.split('.').pop();
    for(var i = 0; i < allowed_extensions.length; i++) {
        if(allowed_extensions[i]==file_extension) {
            valid = true; 
            el.innerHTML = "";
        }
    }
    if (!valid) {
        el.innerHTML = "Negeras failas";
    }
    return valid;
}



function ss(input) {

    let ownImg = document.getElementById('ownImg');

    if (input.files && input.files[0] && validFile(input)) {
        var reader = new FileReader();

        reader.onload = function (e) {
            let ownPath = e.target.result;
            collection.push(ownPath);
            ownImg.src =  ownPath;
            ownImg.setAttribute("onclick", "intro("+(collection.length-1)+")");
        }
        reader.readAsDataURL(input.files[0]);

    }
}
